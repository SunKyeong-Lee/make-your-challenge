import { useState } from "react";

const DateComp = () => {
  const [today, setToday] = useState(new Date());

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate() + 1).padStart(2, "0");

  return (
    <div>
      {year}. {month}. {date}
    </div>
  );
};

export default DateComp;
