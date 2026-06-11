export function buildWorkoutSequence(routine) {
  if (!routine) return [];

  const sequence = [];

  sequence.push({
    type: "prepare",
    title: "Prepárate",
    subtitle: "Comenzamos en...",
    mode: "time",
    duration: 10,
    video: "",
  });

  const workoutBlocks = [
    ...routine.warmup.map((item) => ({
      ...item,
      type: "exercise",
      section: "Calentamiento",
    })),

    ...Array.from({ length: routine.rounds }).flatMap((_, roundIndex) =>
      routine.exercises.map((item) => ({
        ...item,
        type: "exercise",
        section: `Ronda ${roundIndex + 1}/${routine.rounds}`,
      }))
    ),

    ...routine.cooldown.map((item) => ({
      ...item,
      type: "exercise",
      section: "Movilidad final",
    })),
  ];

  workoutBlocks.forEach((item, index) => {
    sequence.push(item);

    const isLastItem = index === workoutBlocks.length - 1;

    if (!isLastItem) {
      const nextItem = workoutBlocks[index + 1];

      sequence.push({
        type: "interval",
        title: "Cambia de posición",
        subtitle: "Siguiente ejercicio:",
        nextTitle: nextItem.title,
        mode: "time",
        duration: 10,
        video: "",
      });
    }
  });

  sequence.push({
    type: "finish",
    title: "¡Enhorabuena!",
    subtitle: "Entrenamiento concluido",
    mode: "time",
    duration: 0,
    video: "",
  });

  return sequence;
}