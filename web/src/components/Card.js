import React, { useState } from 'react';

const Card =(props)=>{
  const[Alert,setAlert]=useState('')



    const remove = (e) =>{
        const a= JSON.parse(sessionStorage.getItem('cart'))
         for (var i =0; i < a.length; i++){
        if (a[i].img === e.img) {
           a.splice(i,1);
           
        }
      }
      sessionStorage.setItem('cart',JSON.stringify(a))
      setAlert('removed from cart')
      setTimeout(()=>{
        setAlert('')
        window.location.reload()
      },2000)
      }
      
        return (
            <div id='card'>
                {Alert?<div id='alert'>{Alert}</div>:<></>}
              
                <img src={`${props.img}`} width='100%'/>
                &nbsp; <b id='h3'>{props.pre}$</b><br/>
               &nbsp;price- <b>{props.price}$</b><br/>
           
             <br/><br/>{props.del==="true"?<center><button id='btn-3' onClick={()=>remove({_id:props._id,pre:props.pre,price:props.price,img:props.img})}>remove from cart</button></center>:<center>click to see</center>}
              
              
            </div>
        );
    
}

export default Card;