import React from "react";
//import { CalendarItem } from "./calendaritem";
import '../styles.css';
import { blankarray, fillMonthArray, weekdays } from "../Helpers/generatedays";
import { monthdays } from "../Helpers/generatedays";



export const Calendar :React.FC<{}> = ({}) => { 
   
    console.log(monthdays)

   return ( 

    
      

    <div className ="grid-container">  
      
       {weekdays.map(day => (<div className="square weekday-container glow-square"> {day} </div>))} 
       {blankarray.map(x => (<div className="square-dark"> </div>))}
       {monthdays.map(day => (<div className="square glow-square"> {day.toString()} </div>))}  
      

    </div>



    )
    
}