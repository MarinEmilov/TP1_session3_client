import React, { Component } from "react";
import { useTrail, animated } from "react-spring";

function Flotte () {

    const color= [
    'red','gold','green',
    'pink','Black']
  
    const traillimation = useTrail (color.length,{
      from:{
        height:'0px',
        width: '0px'
      },
      to:{
        height:'100px',
        width: '100px'
      },
      config:{
        mass:1,
        tension:100,
        friction:30
      }
    })
    
    return (
        <div className="flotte" style={{
            'display':'flex',
            'width':'50%',
        }}>
            {traillimation.map((spring, index)=>{
            return (
                
               
                <animated.div key={index} style={{
                ...spring,
                // 'width': 100px,
                'backgroundColor': color[index],
                'margin':'5px'}}>
                    <span>
                      
                    </span>
                </animated.div>)
                })}
            
        </div>
  
  
  
  
  
  
    )};
    export default Flotte;