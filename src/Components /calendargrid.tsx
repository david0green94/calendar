import React, { useMemo } from "react";
//import { CalendarItem } from "./calendaritem";
import "../styles.css";
import {
  fillMonthArray,
  firstDayOfMonth,
  WEEKDAYS,
} from "../Helpers/generatedays";
import { Day } from "./Day";
import { CalendarHeaderCell } from "./CalendarHeaderCell";

type CalendarProps = {
  month: number;
  year: number;
  currentDate?: Date;
};

export const Calendar = ({ year, month, currentDate }: CalendarProps) => {
  const monthdays = useMemo(() => fillMonthArray(year, month), [year, month]);
  const blankArray = useMemo(() => {
    const firstDay = firstDayOfMonth(year, month - 1);
    const firstDayInt = firstDay.getDay() - 1;
    return new Array(firstDayInt === -1 ? 6 : firstDayInt).fill(null);
  }, [year, month]);

  return (
    <div className="grid-container">
      {WEEKDAYS.map((day) => (
        <CalendarHeaderCell weekday={day} />
      ))}
      {blankArray.map(() => (
        <div className="square-dark"> </div>
      ))}
      {monthdays.map((day) => (
        <Day day={day} />
      ))}
    </div>
  );
};
