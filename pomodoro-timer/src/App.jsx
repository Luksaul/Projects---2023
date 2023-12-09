import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import TimerSettingsContext from "./TimerSettingsContext";

function App() {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  return (
    <>
      <main>
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
