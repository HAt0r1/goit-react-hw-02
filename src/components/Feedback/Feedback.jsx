import style from "./Feedback.module.css";

const Feedback = ({ object: { good, neutral, bad }, total, percent }) => {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        <li className={style.listItem}>
          <h2 className={style.title}>Good</h2>
          <p className={style.result}>{good}</p>
        </li>
        <li className={style.listItem}>
          <h2 className={style.title}>Neutral</h2>
          <p className={style.result}>{neutral}</p>
        </li>
        <li className={style.listItem}>
          <h2 className={style.title}>Bad</h2>
          <p className={style.result}>{bad}</p>
        </li>
        <li className={style.listItem}>
          <h2 className={style.title}>Total</h2>
          <p className={style.result}>{total}</p>
        </li>
        <li className={style.listItem}>
          <h2 className={style.title}>Positive</h2>
          <p className={style.result}>{percent}%</p>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
