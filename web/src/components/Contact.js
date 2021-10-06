import React,{useState,useEffect} from 'react';
import axios from 'axios';


const Contact =(props)=>{
    
    const [mail,setMail]=useState('')
    const [msg,setMsg]=useState('')
    const [Ad,setAd]=useState([])
    
const send=()=>{
    if(!mail || !msg){
        alert('all the fields are required')

        }
    else{
    axios.post('https://futuristic-heavy-shelf.glitch.me/contact',{mail,msg})
    .then((response)=>{

        alert(response.data)
    })
    .catch(err=>{
alert(err)
    })
}
}




useEffect(()=>{
    setTimeout(()=>{
  
      axios.get('https://dour-fuschia-.glitch.me/ad.json')
      .then(res=>
       setAd(res.data)
       )
      .catch(err=>
      alert(err)
       )
    },100)
   
   
  },Ad)


        return (
            <div>
                <br/><br/>
               {props.com==='true'?<></>:<div id='section'>
                    <b>need help?</b><br/>
                    If you are facing any type problem with our products or services. Please let us know. We are always ready to help you.
                </div>}



               <center><div id='form'>
               <div id='span-1'>
                   <br/> <br/> <br/>{props.com==='true'?<>
                   <h3>Help us with feedback.<br/>
                   We will try our lavel best to improve our services.
                   </h3>
                   <br/>
sadmansakib@claps.ml<br/>
<a href='https://www.facebook.com/sadman.sakib.902604/'><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
 &nbsp;&nbsp;&nbsp;<a href='https://github.com/sadman-sakib-abesh'><i class="fa fa-github-square"></i></a>
 &nbsp;&nbsp;&nbsp;<a href='https://www.linkedin.com/in/sadman-sakib-abesh-677794214?fbclid=IwAR2xfjInkKP-31sbBpqinyxNIWwuc_RYooX0CbpNHFc-WRkzrLWLKUmk0TM'><i class="fa fa-linkedin-square"></i></a>
 &nbsp;&nbsp;&nbsp;<a href="https://twitter.com/AbeshSakib?s=09&fbclid=IwAR12teZdzW8VJ49yjs52o_9V2Un3I0tMagg_hUhMlyMIP4wRFfnQ68DhILk"><i class="fa fa-twitter-square"></i></a>
              
                   </>:<>
<h3>more details to reach out</h3><br/>
sadmansakib@claps.ml<br/>
<a href='https://www.facebook.com/sadman.sakib.902604/'><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
 &nbsp;&nbsp;&nbsp;<a href='https://github.com/sadman-sakib-abesh'><i class="fa fa-github-square"></i></a>
 &nbsp;&nbsp;&nbsp;<a href='https://www.linkedin.com/in/sadman-sakib-abesh-677794214?fbclid=IwAR2xfjInkKP-31sbBpqinyxNIWwuc_RYooX0CbpNHFc-WRkzrLWLKUmk0TM'><i class="fa fa-linkedin-square"></i></a>
 &nbsp;&nbsp;&nbsp;<a href="https://twitter.com/AbeshSakib?s=09&fbclid=IwAR12teZdzW8VJ49yjs52o_9V2Un3I0tMagg_hUhMlyMIP4wRFfnQ68DhILk"><i class="fa fa-twitter-square"></i></a>
                </>   }
               </div>
<div id='span-2'>
{props.com==='true'?<h2 id='head-form'>feedback</h2>:<h2 id='head-form'>need help?</h2>}
              <input id='in-5'  type='email' placeholder='mail address' onChange={(e)=>setMail(e.target.value)}/><br/><br/><br/>
               
              <textarea rows='6' cols='40' placeholder='massage' id='in-5' onChange={(e)=>setMsg(e.target.value)}/><br/>
              <br/><br/><br/>
              <button id='btn-1' onClick={()=>send()}> send massage</button>
              <br/><br/><br/></div>
</div></center><br/><br/><br/>
<br/><br/>

<div id='section'>
<b>Helps</b><br/><br/>
{Ad.map(rec=><><div id='blog'>
  <h3 id='b'>{rec.head}</h3>
  {rec.body}
</div><br/></>)}
</div>

            </div>
        );
    }


export default Contact;