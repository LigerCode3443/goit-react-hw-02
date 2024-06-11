import s from "./Options.module.css";
export const Options = ({ options, handleClick, handleReset, total }) => {
  return (
    <ul className={s.list}>
      {options.map((item, indx) => {
        return (
          <li key={item}>
            <button
              className={s.btn}
              type="button"
              onClick={() => {
                handleClick(item, indx + 1);
              }}
            >
              {item}
            </button>
          </li>
        );
      })}
      {total > 0 && (
        <li>
          <button className={s.btn__reset} type="button" onClick={handleReset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};
