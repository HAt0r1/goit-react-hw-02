import style from "./Options.module.css";

const Options = ({ onFunc, review, onRes }) => {
  return (
    <ul className={style.list}>
      <li>
        <button className={style.button} onClick={() => onFunc("good")}>
          Good
        </button>
      </li>
      <li>
        <button className={style.button} onClick={() => onFunc("neutral")}>
          Neutral
        </button>
      </li>
      <li>
        <button className={style.button} onClick={() => onFunc("bad")}>
          Bad
        </button>
      </li>
      <li>
        {review !== 0 && (
          <button className={style.button} onClick={onRes}>
            Reset
          </button>
        )}
      </li>
    </ul>
  );
};

export default Options;
