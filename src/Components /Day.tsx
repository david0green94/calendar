import React from "react";

type DayProps = {
  day: number;
};

export const Day = ({ day }: DayProps) => (
  <div className="square glow-square"> {day.toString()} </div>
);
