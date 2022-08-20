export function Calendar () {


    return ( 

<div onClick={e => (e.currentTarget.childNodes[0] as HTMLDivElement).click()}>

<div> Calendar!@@</div>        
<div onClick={e => e.currentTarget.parentElement?.click()}/>

</div>

    )
}