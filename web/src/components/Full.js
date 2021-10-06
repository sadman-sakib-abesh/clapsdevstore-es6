import React, { Component,useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios'
import { urlencoded } from 'body-parser';


const Full=()=>{

    const {search}=useLocation()
const {_id}=queryString.parse(search)
const [data,setData]=useState([])
const[Alert,setAlert]=useState('')

                







const add = (e) =>{




  if(sessionStorage.getItem('cart')){


      
          
      for (var index = 0; index < JSON.parse(sessionStorage.getItem('cart')).length; index++) {
         
      if( JSON.parse(sessionStorage.getItem('cart'))[index]._id===e._id){
        setAlert('already added')
        
        setTimeout(()=>{
          setAlert('')
          window.location.reload()
        },2000)
      
    }
    else{

      
      setAlert('added to cart')
      setTimeout(()=>{
        setAlert('')
        window.location.reload()
      },2000)
    
const cart= JSON.parse(sessionStorage.getItem('cart'))
cart.push(e)
sessionStorage.setItem('cart',JSON.stringify(cart))


    }
    

      }
      
      if(sessionStorage.getItem('cart')==='[]'){
          setAlert('added to cart')
 
          setTimeout(()=>{
            setAlert('')
            window.location.reload()
          },2000)
        
          const cart= JSON.parse(sessionStorage.getItem('cart'))
          cart.push(e)
          sessionStorage.setItem('cart',JSON.stringify(cart))
          
      }
  

      
}
else{
  sessionStorage.setItem('cart',JSON.stringify([e]))
  setAlert('added to cart')
  setTimeout(()=>{
    setAlert('')
    window.location.reload()
  },2000)

}

}







useEffect(()=>{

    axios.get('https://futuristic-heavy-shelf.glitch.me/product-get-id?_id='+_id).then(res=>
    setData(res.data)
    ).catch(err=>{
      alert(err)
    })

   

},data)


    
        return (
            <div id='full'>
               <center> {Alert?<div id='alert'>{Alert} </div>:<></>}</center>  
              
                   {data.map(rec=><div><center><img src={rec.img} width='700px' height='500px'/></center>
                 <h2 id='about'><b>about product</b></h2>
                   <br/><br/>
                   {rec.about}
                   <br/><br/> 
                <center>
                  <table>
                     
 
  <tr id='a'>
    <td>price-</td>
    <td>{rec.price}$</td>

  </tr>
  <tr id='b'>
    <td>previous price-</td>
    <td id='under-td'>{rec.pre}$</td>
  </tr>
  <tr id='a'>
    <td>content type-</td>
    <td>{rec.hash}</td>
  </tr>
  <tr id='b'>
    <td>demo link-</td>
    <td><b><a id='link' href={`${rec.link}`}>enter</a></b></td>
  </tr>

</table></center>
<br/><br/> <br/><br/>
<center><button id='btn-3' onClick={()=>add({_id:rec._id,pre:rec.pre,price:rec.price,img:rec.img})}>add to cart</button></center>
 <br/><br/> <br/><br/> <br/><br/> <br/><br/><br/><br/>
                    </div>
                   )}
            </div>
        );
    
}

export default Full;