// Note: This entire file can be done with "npm date-fns"

export const weekdays: Array<string> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//export const monthdays:Array<Number> = [];
const getDaysInMonth = (year: number, month: number) => { return new Date(year, month, 0).getDate(); } //returns days in month
const firstDayOfMonth = (year: number, month: number) => { return new Date(year, month, 1) } // returns first Day of month 
let firstDay = firstDayOfMonth(2022, 9 - 1).toDateString().split(" ", 1).toString();
console.log(firstDay);
export const fillMonthArray = (year: number, month: number) => {

    let x = getDaysInMonth(year, month);
    console.log("days in month", x);
    let tmpdatesarray: Array<number> = [];

    for (let i = 1; i <= x; i++) {
        tmpdatesarray.push(i)
        console.log("temparray: ", tmpdatesarray[i])

    }
    return tmpdatesarray;
}

const fillBlankArray = (firstDay: string) => {
    const tempBlankArray:Array<Number> = [];
    let x = 0;
    switch (firstDay) {

        case "Mon":

            x = 0;
            break;

        case "Tue":

            x = 1;
            break;

        case "Wed":

            x = 2;
            break;

        case "Thu":

            x = 3;
            break;

        case "Fri":

            x = 4;
            break;

        case "Sat":

            x = 5;
            break;

        case "Sun":

            x = 6;
            break;

        default:

    }

    for(let i=0; i< x; i++) {
tempBlankArray.push(i);



    }

return tempBlankArray;

}


export const blankarray: Array<Number> = fillBlankArray(firstDay);
console.log("blanlarray", blankarray);
export const monthdays: Array<Number> = fillMonthArray(2022, 12);

/* ToDo: 

Find which day the month starts on . 
add N number of grey squares depending on day. Mon - 1 , Tuesday - 2 etc 
shift white squares? 
*/