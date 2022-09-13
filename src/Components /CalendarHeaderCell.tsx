import React from "react";

type CalendarHeaderCellProps = {
  weekday: string;
};

export const CalendarHeaderCell = ({ weekday }: CalendarHeaderCellProps) => (
  <div className="square weekday-container glow-square"> {weekday}</div>
);
