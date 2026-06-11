export default function IntroScreen({ routine, goHome, startWorkout }) {
  if (!routine) return null;

  return (
    <main className="intro-screen">
      <button onClick={goHome}>← Home</button>

      <h1>{routine.title}</h1>

      <p>
        <strong>Objetivo:</strong> {routine.objective}
      </p>

      <p>{routine.description}</p>

      <p>
        <strong>Categoría:</strong> {routine.category}
      </p>

      <p>
        <strong>Rondas:</strong> {routine.rounds}
      </p>

      <section>
        <h2>Calentamiento</h2>

        {routine.warmup.length > 0 ? (
          <ul>
            {routine.warmup.map((exercise, index) => (
              <li key={`warmup-${index}`}>
                {exercise.title} — {exercise.duration}s
              </li>
            ))}
          </ul>
        ) : (
          <p>Sin calentamiento específico.</p>
        )}
      </section>

      <section>
        <h2>Entrenamiento principal</h2>

        <ul>
          {routine.exercises.map((exercise, index) => (
            <li key={`exercise-${index}`}>
              {exercise.title} —{" "}
              {exercise.mode === "reps"
                ? `${exercise.reps} reps`
                : `${exercise.duration}s`}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Movilidad final</h2>

        {routine.cooldown.length > 0 ? (
          <ul>
            {routine.cooldown.map((exercise, index) => (
              <li key={`cooldown-${index}`}>
                {exercise.title} — {exercise.duration}s
              </li>
            ))}
          </ul>
        ) : (
          <p>Sin movilidad final específica.</p>
        )}
      </section>

      <button onClick={startWorkout}>Comenzar</button>
    </main>
  );
}