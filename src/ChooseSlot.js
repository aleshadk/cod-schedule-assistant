export default function ChooseSlot({ value, setSlot }) {
  const date = new Date(value);
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  const formatedDateTime = date.toISOString().slice(0, 16);

  return (
    <div>
      <span>Выбери время для игры</span>
      <input
        type="datetime-local"
        value={formatedDateTime}
        onChange={(e) => setSlot(e.target.value)}
      ></input>
    </div>
  );
}
