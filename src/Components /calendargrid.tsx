import React from "react";
//import { CalendarItem } from "./calendaritem";
import '../styles.css';
import { fillarr, weekdays } from "../Helpers/generatedays";
import { monthdays } from "../Helpers/generatedays";


export const Calendar :React.FC<{}> = ({}) => { 
    fillarr(2022,8);
    console.log(monthdays)

   return ( 

    
      

    <div className ="grid-container">  
      
       {weekdays.map(day => (<div className="square glow-square"> {day} </div>))} 
       {monthdays.map(day => (<div className="square glow-square"> {day.toString()} </div>))}  
      

    </div>



    )
    
}