import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom'
import Card from './Card';


const Cart =() =>{
    
const[total,setTotal]=useState('')

useEffect(()=>{
    if(!sessionStorage.getItem('cart')){
        sessionStorage.setItem('cart','[]')
        }
            let a=[]
            let b=0
        for(var i=0;i<JSON.parse(sessionStorage.getItem('cart')).length;i++){
        
            a.push(JSON.parse(sessionStorage.getItem('cart'))[i].price)
        }
        
        a.forEach(element=>b=b+parseInt(element))
        setTimeout(() => {
            setTotal(b)
        }, 100);

})







        return (
            <div><br/><br/>
<center><h3>total ammount-{total}$</h3></center>

                {sessionStorage.getItem('cart')?<>{JSON.parse(sessionStorage.getItem('cart')).map(res=><>



                    
<Card 
  img={`${res.img}`}
  _id={`${res._id}`}
    pre={`${res.pre}`}
    price={`${res.price}`}
    del="true"

/>



           </>  )
                 
             }</>:<h3>empty cart?!</h3>}

<br></br><br></br>
<center><Link id='btn-3' to='/Checkout'>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;check out&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</Link></center>
<br></br><br></br><br></br><br></br>
            </div>
        );
    
}

export default Cart;