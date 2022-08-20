export const weekdays:Array<string> = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
//export const monthdays:Array<Number> = [];
const getDaysInMonth = (year:number,month:number) => {return new Date(year,month,0).getDate();} //returns days in month

export const fillarr =(year:number, month:number) => { 
    
    let x = getDaysInMonth(year,month);
    console.log("days in month" , x);
    let tmparray:Array<number> =[];
    
    for (let i=1; i<x; i++)
    {          
        tmparray.push(i)
        console.log("temparray: ", tmparray[i])
        
    }
    return tmparray;
}

export const monthdays:Array<Number> = fillarr(2022,8);

/*

TODO: Replace this functon with one that takes in the month as an argument
      and returns an array with the number of days in that month. 



const fillarr = () => {

let tmparray = [];
    for(let i =1; i<30; i++)
    {tmparray.push(i.toString())}

    return tmparray;
}

export const weekdays:Array<String> = fillarr(); 

*/