import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import { useState, useEffect } from "react";

import style from "./App.module.css";

const App = () => {
  const [data, setData] = useState(() => {
    const checkData = localStorage.getItem("reviews");
    if (checkData !== null) {
      return JSON.parse(checkData);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(data));
  }, [data]);

  // Dont need to create 3 independent functions, rather create 1 function with parameter
  function handleSetReviews(type) {
    setData({
      ...data,
      [type]: data[type] + 1,
    });
  }

  function handleResetReviews() {
    setData({
      ...data,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const reviewTotal = data.good + data.bad + data.neutral;
  const percentCount = Math.round((data.good / reviewTotal) * 100);

  return (
    <>
      <Description />
      <Options
        onFunc={handleSetReviews}
        review={reviewTotal}
        onRes={handleResetReviews}
      />
      {reviewTotal !== 0 ? (
        <Feedback object={data} total={reviewTotal} percent={percentCount} />
      ) : (
        <p className={style.message}>Not feedback yet</p>
      )}
    </>
  );
};

export default App;
