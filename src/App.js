import "./App.css";
import { useState } from "react";
import ChooseSlot from "./ChooseSlot.js";
import { TIMEZONE_MAPPING, USERS } from "./const";
import { utcToZonedTime } from "date-fns-tz";

function chooseDefaultTime() {
  const now = new Date();
  now.setSeconds(0);
  const minutes = now.getMinutes();

  if (minutes <= 30) {
    now.setMinutes(30);
  } else {
    now.setMinutes(0);
    now.setHours(now.getHours() + 1);
  }

  return now;
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function App() {
  const [slot, setSlot] = useState(chooseDefaultTime());

  function copyText() {
    const text = USERS.map(
      (x) =>
        `${x}: ${utcToZonedTime(
          slot,
          TIMEZONE_MAPPING[x]
        ).toLocaleTimeString()}`
    ).join("\n");

    copyToClipboard(text);
  }

  return (
    <>
      <ChooseSlot value={slot} setSlot={setSlot} />
      {USERS.map((x) => (
        <p key={x}>
          {x}: {utcToZonedTime(slot, TIMEZONE_MAPPING[x]).toLocaleTimeString()}
        </p>
      ))}

      <button onClick={copyText}>Копировать</button>
    </>
  );
}

export default App;
