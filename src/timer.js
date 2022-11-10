import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("컴포넌트업뎃");

  React.useEffect(function () {
    setTime(time + 1);
  }, []);

  function updateTime() {
    setTime(time + 1);
  }
  return (
    <div>
      <h3>{time}초</h3>
      <button onClick={updateTime}>1초씩 증가시켜주세요</button>
    </div>
  );
}

export default TimerComponent;
