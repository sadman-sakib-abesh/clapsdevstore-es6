import React, { useState,useEffect } from 'react';
import axios from 'axios'



const Build =() =>{
    
    const [mail,setMail]=useState('')
    const [msg,setMsg]=useState('Hello,I need portfolio/ecommerce website. Please let me know the budget.')
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const body=`name=${name}<br/>
   phone= ${phone}<br/>
   msg=${msg}
    `


const send=()=>{
    if(!mail || !name || !phone){
        alert('all the fields are required')
    }else{
    axios.post('https://futuristic-heavy-shelf.glitch.me/build',{mail,body})
    .then(response=>{

        alert(response.data)
    })
    .catch(err=>{
alert(err)
    })
    }
}





        return (
            <div>
                <br/><br/>
               

               <center><div id='form-2'>
               <div id='span-3'>
                   <br/> <br/> <br/>
<h3>more details to reach out</h3><br/>
sadmansakib@claps.ml<br/>
<a href='https://www.facebook.com/sadman.sakib.902604/'><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
 &nbsp;&nbsp;&nbsp;<a href='https://github.com/sadman-sakib-abesh'><i class="fa fa-github-square"></i></a>
 &nbsp;&nbsp;&nbsp;<a href='https://www.linkedin.com/in/sadman-sakib-abesh-677794214?fbclid=IwAR2xfjInkKP-31sbBpqinyxNIWwuc_RYooX0CbpNHFc-WRkzrLWLKUmk0TM'><i class="fa fa-linkedin-square"></i></a>
 &nbsp;&nbsp;&nbsp;<a href="https://twitter.com/AbeshSakib?s=09&fbclid=IwAR12teZdzW8VJ49yjs52o_9V2Un3I0tMagg_hUhMlyMIP4wRFfnQ68DhILk"><i class="fa fa-twitter-square"></i></a><br/>
 
                
               </div>
<div id='span-4'>
    <h2 id='head-form'>need a website?</h2>
              <input id='in-5'  type='email' placeholder='mail address' onChange={(e)=>setMail(e.target.value)}/><br/><br/><br/>
              <input id='in-5'  type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)}/><br/><br/><br/>
              <input id='in-5'  type='text' placeholder='phone number' onChange={(e)=>setPhone(e.target.value)}/><br/><br/><br/>
               
              <textarea rows='6' cols='40' placeholder='massage' id='in-5' onChange={(e)=>setMsg(e.target.value)}>{msg}</textarea><br/>
              <br/><br/><br/>
              <button id='btn-1' onClick={()=>send()}> send massage</button>
              <br/><br/><br/></div>
</div></center><br/><br/><br/>
            </div>
        );
    
}

export default Build;