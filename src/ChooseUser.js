import { USERS } from "./const";

export default function ChooseUser({ value, setValue }) {
  return (
    <div>
      <p>Нужно авторизоваться</p>
      <p>
        Я{" "}
        <select value={value ?? ""} onChange={(e) => setValue(e.target.value)}>
          <option value="">-</option>
          {USERS.map((x) => (
            <option value={x} key={x}>
              {x}
            </option>
          ))}
        </select>
      </p>
    </div>
  );
}
