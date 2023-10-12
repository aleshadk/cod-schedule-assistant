import "./App.css";
import { useState } from "react";
import userStorage from "./storage/UserStorage";
import ChooseUser from "./ChooseUser.js";
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
    now.setHours(now.getHours + 1);
  }

  return now;
}

function App() {
  const [user, setUser] = useState(userStorage.getUser());
  const [slot, setSlot] = useState(chooseDefaultTime());

  function onUserSelect(user) {
    userStorage.saveUser(user);
    setUser(user);
  }

  function onResetUser() {
    userStorage.resetUser();
    setUser(null);
  }

  return user ? (
    <>
      <ChooseSlot value={slot} setSlot={setSlot} />
      {USERS.map((x) => (
        <p key={x}>
          {x}: {utcToZonedTime(slot, TIMEZONE_MAPPING[x]).toLocaleTimeString()}
        </p>
      ))}

      <button onClick={onResetUser}>Очистить текущего пользователя</button>
    </>
  ) : (
    <ChooseUser value={user} setValue={onUserSelect} />
  );
}

export default App;
