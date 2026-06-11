import { useEffect, useMemo, useRef, useState } from "react";
import { buildWorkoutSequence } from "../utils/buildWorkoutSequence";

export default function WorkoutScreen({ routine, goHome }) {
  const sequence = useMemo(() => buildWorkoutSequence(routine), [routine]);

  const [workoutState, setWorkoutState] = useState({
    index: 0,
    valueLeft: 0,
  });

  const [isPaused, setIsPaused] = useState(false);

  const currentItem = sequence[workoutState.index];

  const mainExercises = routine?.exercises?.length || 0;

  const currentRoundText =
    currentItem?.section?.startsWith("Ronda") ? currentItem.section : "";

  const exercisePositionInRound =
    currentItem?.type === "exercise" &&
    currentItem?.section?.startsWith("Ronda") &&
    mainExercises > 0
      ? ((sequence
          .slice(0, workoutState.index + 1)
          .filter(
            (item) =>
              item.type === "exercise" &&
              item.section === currentItem.section
          ).length -
          1) %
          mainExercises) +
        1
      : null;

  const progressPercent = sequence.length
    ? ((workoutState.index + 1) / sequence.length) * 100
    : 0;

  const beepSound = useRef(null);
  const switchSound = useRef(null);
  const finishSound = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    beepSound.current = new Audio("/sounds/beep.mp3");
    switchSound.current = new Audio("/sounds/switch.mp3");
    finishSound.current = new Audio("/sounds/finish.mp3");

    beepSound.current.preload = "auto";
    switchSound.current.preload = "auto";
    finishSound.current.preload = "auto";
  }, []);

  useEffect(() => {
    if (!sequence.length) return;

    const firstItem = sequence[0];

    setWorkoutState({
      index: 0,
      valueLeft: getInitialValue(firstItem),
    });
  }, [sequence]);

  useEffect(() => {
    if (!currentItem) return;
    if (isPaused) return;
    if (currentItem.type === "finish") return;

    const intervalTime =
      currentItem.mode === "reps"
        ? (currentItem.repInterval || 2) * 1000
        : 1000;

    const timerId = setInterval(() => {
      setWorkoutState((prevState) => {
        const step = sequence[prevState.index];

        if (!step) return prevState;

        if (prevState.valueLeft > 1) {
          return {
            ...prevState,
            valueLeft: prevState.valueLeft - 1,
          };
        }

        const nextIndex = prevState.index + 1;
        const nextStep = sequence[nextIndex];

        if (!nextStep) return prevState;

        return {
          index: nextIndex,
          valueLeft: getInitialValue(nextStep),
        };
      });
    }, intervalTime);

    return () => clearInterval(timerId);
  }, [currentItem, isPaused, sequence]);

  useEffect(() => {
    if (!currentItem) return;
    if (isPaused) return;
    if (currentItem.type === "finish") return;

    const shouldBeep =
      currentItem.mode === "time" ||
      currentItem.type === "interval" ||
      currentItem.type === "prepare";

    if (
      shouldBeep &&
      workoutState.valueLeft <= 3 &&
      workoutState.valueLeft > 0 &&
      beepSound.current
    ) {
      beepSound.current.currentTime = 0;
      beepSound.current.play().catch(() => {});
    }
  }, [workoutState.valueLeft, currentItem, isPaused]);

  useEffect(() => {
    if (!currentItem) return;

    if (currentItem.type === "finish") {
      if (finishSound.current) {
        finishSound.current.currentTime = 0;
        finishSound.current.play().catch(() => {});
      }
      return;
    }

    if (workoutState.index > 0 && switchSound.current) {
      switchSound.current.currentTime = 0;
      switchSound.current.play().catch(() => {});
    }
  }, [workoutState.index, currentItem]);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isPaused) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
  }, [isPaused, currentItem]);

  function getInitialValue(item) {
    if (!item) return 0;
    if (item.type === "finish") return 0;

    if (item.mode === "reps") {
      return item.reps || 1;
    }

    return item.duration || 60;
  }

  function togglePause() {
    setIsPaused((prev) => !prev);
  }

  if (!routine || !currentItem) return null;

  const isInterval = currentItem.type === "interval";
  const isPrepare = currentItem.type === "prepare";
  const isExercise = currentItem.type === "exercise";
  const isFinish = currentItem.type === "finish";
  const isRepsExercise = currentItem.mode === "reps";

  return (
    <main className="workout-screen" onClick={togglePause}>
      <button
        onClick={(event) => {
          event.stopPropagation();
          goHome();
        }}
      >
        ← Home
      </button>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <div className="workout-layout">
        <div className="workout-info">
          {currentRoundText && (
            <p>
              {currentRoundText} · Ejercicio {exercisePositionInRound}/
              {mainExercises}
            </p>
          )}

          {isPaused && <p className="paused-label">PAUSADO</p>}

          {isPrepare && <p>Preparación inicial</p>}
          {isInterval && <p>Intervalo</p>}
          {isFinish && <p>Finalizado</p>}

          <h1>{currentItem.title}</h1>

          {isInterval && currentItem.nextTitle && (
            <p className="next-exercise">
              Próximo: <strong>{currentItem.nextTitle}</strong>
            </p>
          )}

          {isExercise && isRepsExercise ? (
            <>
              <p>Repeticiones restantes</p>
              <h2>{workoutState.valueLeft}</h2>
            </>
          ) : (
            <>
              <p>Tiempo restante</p>
              <h2>{workoutState.valueLeft}</h2>
            </>
          )}
        </div>

        <div className="workout-media">
          {isExercise && currentItem.video ? (
            <video
              ref={videoRef}
              src={currentItem.video}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <div className="video-placeholder">
              {isExercise ? <p>Vídeo pendiente</p> : <p>Sin vídeo</p>}
            </div>
          )}
        </div>
      </div>

      {isFinish && (
        <button
          onClick={(event) => {
            event.stopPropagation();
            goHome();
          }}
        >
          Volver a Home
        </button>
      )}
    </main>
  );
}