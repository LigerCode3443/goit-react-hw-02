import { Description, Options, Feedback, Notification } from "components";

import "./App.css";
import { useLocalStorage } from "hooks/useLocalStorage";
const initState = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [points, setPoints] = useLocalStorage("points", initState);

  const handleClick = (point) => {
    setPoints({ ...points, [point]: points[point] + 1 });
  };

  const handleReset = () => {
    setPoints(initState);
  };

  const total = Object.values(points).reduce((acc, value) => acc + value, 0);
  const totalPositive = `${Math.round((points.good / total) * 100)}%`;

  return (
    <>
      <Description />
      <Options
        options={Object.keys(points)}
        handleClick={handleClick}
        handleReset={handleReset}
        total={total}
      />
      {total ? (
        <Feedback
          points={[
            ...Object.entries(points),
            ["total", total],
            ["Positive", totalPositive],
          ]}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
