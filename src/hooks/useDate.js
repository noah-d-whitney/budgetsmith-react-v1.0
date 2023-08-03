import { useState, useEffect } from "react";

const monthsOfYear = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const daysOfWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export function useDate() {
  const [date, setDate] = useState();

  useEffect(() => {
    function newDateString() {
      const date = new Date();
      const month = monthsOfYear[date.getMonth()];
      const day = date.getDate();
      const weekday = daysOfWeek[date.getDay()];
      const year = date.getFullYear();

      setDate(`${weekday} ${month} ${day}, ${year}`);
    }

    newDateString();
    const newDateInterval = setInterval(newDateString, 1000);

    return function cleanup() {
      clearInterval(newDateInterval);
    };
  }, []);

  return { date };
}
