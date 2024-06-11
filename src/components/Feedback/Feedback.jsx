import s from "./Feedback.module.css";
export const Feedback = ({ points }) => {
  return (
    <ul className={s.list}>
      {points.map(([key, value]) => (
        <li className={s.item} key={key}>
          {key}:{value}
        </li>
      ))}
    </ul>
  );
};
