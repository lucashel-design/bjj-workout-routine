import {
  getTodayRoutine,
  getRandomRoutineByCategory,
} from "../data/routines";

export default function HomeScreen({ openRoutine }) {
  function handleTodayRoutine() {
    const today = new Date().toISOString().slice(0, 10);
    const routine = getTodayRoutine(today);

    if (!routine) {
      alert("No hay rutina para hoy.");
      return;
    }

    openRoutine(routine);
  }

  function handleCategory(category) {
    const routine = getRandomRoutineByCategory(category);

    if (!routine) {
      alert("No hay rutinas en esta categoría.");
      return;
    }

    openRoutine(routine);
  }

  return (
    <main className="home-screen">
      <h1>BJJ Workout Routine</h1>

      <button onClick={handleTodayRoutine}>
        Abrir rutina del día
      </button>

      <h2>Elegir categoría</h2>

      <button onClick={() => handleCategory("bajo")}>
        Día bajo
      </button>

      <button onClick={() => handleCategory("medio")}>
        Día medio
      </button>

      <button onClick={() => handleCategory("duro")}>
        Día duro
      </button>
    </main>
  );
}