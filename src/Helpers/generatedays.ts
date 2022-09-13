// Note: This entire file can be done with "npm date-fns"

export const WEEKDAYS: Array<string> = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
//export const monthdays:Array<Number> = [];
const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month, 0).getDate(); //returns days in month
export const firstDayOfMonth = (year: number, month: number) =>
  new Date(year, month, 1); // returns first Day of month

export const fillMonthArray = (year: number, month: number) => {
  let x = getDaysInMonth(year, month);
  console.log("days in month", x);
  let tmpdatesarray: Array<number> = [];

  for (let i = 1; i <= x; i++) {
    tmpdatesarray.push(i);
    console.log("temparray: ", tmpdatesarray[i]);
  }
  return tmpdatesarray;
};

/* ToDo: 

Find which day the month starts on . 
add N number of grey squares depending on day. Mon - 1 , Tuesday - 2 etc 
shift white squares? 
*/
