import React, { useEffect,useState } from 'react';
import axios from 'axios'



const Checkout =()=> {
    const[total,setTotal]=useState('')
    const[mail,setMail]=useState('')
    let items=[]

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





useEffect(()=>{
   
    JSON.parse(sessionStorage.getItem('cart')).forEach(ele=>
items.push({"name": ele.img,
"sku": ele._id,
"price": ele.price,
"currency": "USD",
"quantity": 1})
    )


})





const pay=()=>{
    if(mail){
        axios.post('https://futuristic-heavy-shelf.glitch.me/pay',{total,items,mail}).then((response)=>{
            
if(response.data.err){
    alert(response.data.err)
}

else{

            let a= document.createElement('a');
            a.target= '_blank';
            a.href=response.data;
            a.click();
            


}

         }).catch(err=>
            alert(err)
            )
        }else{
            alert('mail required')
        }
    
}







        return (
            <div>
               <center><div id='warning'>
                  &nbsp;&nbsp; <i class="fa fa-exclamation-circle"></i> sorry for our payment limitation. Our system just support paypal.

                    </div></center>
                <br/><br/>
                <center>
                    <span id='top'/>
                   <table>
                     
 
                     <tr id='a'>
                       <td>total price-</td>
                       <td>{total}$</td>
                   
                     </tr>
                     <tr id='b'>
                       <td>items-</td>
                       <td>{JSON.parse(sessionStorage.getItem('cart')).length}</td>
                     </tr>
                    
                   </table>
                   <br/><br/>
                   <input id='in-5'  type='email' placeholder='mail address' onChange={(e)=>setMail(e.target.value)}/><br/><br/><br/><br/>
              
                    <br/><br/>
                    <input id='in-5' type="text" placeholder="promo code"/>
                    <br/><br/>
                    <br/> <button id='btn-4' onClick={()=>pay()}>  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; <img src="https://logos-world.net/wp-content/uploads/2020/05/PayPal-Logo-700x394.png" height='35px'/> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</button><br/><br/>
                   
</center>
                   <br/> <br/><br/><br/><br/><br/><br/></div>
        );
    
}

export default Checkout;