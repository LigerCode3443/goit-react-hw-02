import s from "./Description.module.css";
export const Description = () => {
  return (
    <>
      <h2 className={s.caption}>Sip Happens Cafe</h2>
      <p className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};
