import { useState } from "react";
import Timer from "./components/Timer";
import TimerSettingsContext from "./TimerSettingsContext";
import "./PomodoroTimerHome.css";

function App() {
  const [workMinutes, setWorkMinutes] = useState(15);
  const [breakMinutes, setBreakMinutes] = useState(5);
  return (
    <>
      <main className="pomodoro-main">
        <TimerSettingsContext.Provider
          value={{
            workMinutes,
            setWorkMinutes,
            breakMinutes,
            setBreakMinutes,
          }}
        >
          <Timer />
        </TimerSettingsContext.Provider>
      </main>
    </>
  );
}

export default App;
