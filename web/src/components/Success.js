import React, { useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'
import queryString from 'query-string';
import axios from 'axios'


const Success =()=>{
    const {search}=useLocation()
    const {paymentId,PayerID}=queryString.parse(search)
    const [data,setData]=useState('')


    useEffect(()=>{

        axios.post('https://futuristic-heavy-shelf.glitch.me/success',{paymentId,PayerID}).then(res=>
setData(res.data)
        ).catch(err=>
alert(err)
        )
    },[])


        return (
            <div>
                <br/><br/><br/><br/><br/>
            
                <br/><br/><br/><br/><br/>
            <center><div id='warning'> 
            
           successfully purchased!! You will get a mail with the product. If you don't get a mail then contact with us and also save the cart no <i class='fa fa-check'></i>&nbsp;<br/>
           <br/>
             <b>cart no-{data}</b><br/>(please save this cart no. In future we can't provide any kind of technical help without this cart no)
            
             </div>
             </center>
             <br/><br/><br/>



             <br/><br/><br/><br/>
            
            </div>
        );
    
}

export default Success;