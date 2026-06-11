import { useState } from "react";

import HomeScreen from "./screens/HomeScreen";
import IntroScreen from "./screens/IntroScreen";
import WorkoutScreen from "./screens/WorkoutScreen";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  function goHome() {
    setScreen("home");
    setSelectedRoutine(null);
  }

  function openRoutine(routine) {
    setSelectedRoutine(routine);
    setScreen("intro");
  }

  return (
    <>
      {screen === "home" && <HomeScreen openRoutine={openRoutine} />}

      {screen === "intro" && (
        <IntroScreen
          routine={selectedRoutine}
          goHome={goHome}
          startWorkout={() => setScreen("workout")}
        />
      )}

      {screen === "workout" && (
        <WorkoutScreen routine={selectedRoutine} goHome={goHome} />
      )}
    </>
  );
}