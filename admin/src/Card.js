import React from 'react';
import axios from 'axios'

const Card =(props)=>{
    
    const del =(e)=>{
        
          axios.delete('http://localhost:4000/product-del/'+e).then(res=>
          alert(res.data)
        
          ).catch(err=>{
            console.log(err)
          })

      }


        return (
            <div id='card'>
                
                <img src={`${props.img}`} width='100%'/>
                &nbsp; <b id='h3'>{props.pre}</b><br/>
               &nbsp;price- <b>{props.price}</b><br/>
           
             <br/><br/><center><button onClick={()=>{del(props._id)}}>delete</button></center>
              
              
            </div>
        );
    
}

export default Card;