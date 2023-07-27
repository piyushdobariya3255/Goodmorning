import React from 'react';
import './App.css';

function good_morning() {

    let date = new Date()
    // let date = new Date(2023,5,15,17)
    let time = date.getHours()
    console.log(time)

    let display = "";
    const cssStyle = {}

    if(time >= 1 && time <= 12){
        display = "Good Morning";
        cssStyle.color = 'pink';
    }else if(time >= 12 && time <= 19){
        display = "Good Afternon";
        cssStyle.color = 'blue';
    }else{
        display = "Good Night";
        cssStyle.color = 'yellow';
    }


  return (
    <>
    <div className='container'>
        <h1 >Hello Sir ,<span style={cssStyle}>  {display} </span></h1>
    </div>
    </>
  )
}

export default good_morning
