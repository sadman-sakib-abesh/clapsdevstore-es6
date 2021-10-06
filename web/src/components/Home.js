import React,{useEffect,useState} from 'react';
import Contact from './Contact';
import Shop from './Shop';
import { Slide } from 'react-slideshow-image';
import {Link} from 'react-router-dom'
import 'react-slideshow-image/dist/styles.css';
import axios from 'axios'

const Home =()=>{

  const [Images,setImg]=useState([])
  const [Ad,setAd]=useState([])
  


  useEffect(()=>{
    setTimeout(()=>{
  
      axios.get('https://dour-fuschia-.glitch.me/slide.json')
      .then(res=>
       setImg(res.data)
       )
      .catch(err=>
      alert(err)
       )
    },50)
   
   
  },Images)

  
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
            <div className="slide-container" >
              <div id='cover'>

<span id='build-div'>
  <img src='https://raw.githubusercontent.com/sadman-sakib-abesh/images/main/Logopit_1628511744435.png' width='400px'/>
  </span><br/><br/>
  
              <Link id='build-btn' to='/Build'>&nbsp;&nbsp;&nbsp;&nbsp;Send Build Proposal&nbsp;&nbsp;&nbsp;&nbsp;</Link>
     </div>
     
<div id='section'>

 
  <b>About Us !</b>
    <br/>
    Welcome to my company. Basically my company is a web build product
     selling shop. We offer top notch digital products. 
     I started with the idea of being able to provide you the best digital products possible.
      So web developers and those who want a portfolio on their expertise and also people who are
       willing to start new business can sit back and relax a bit. If you are like us then you want
        the best price to reach your dreams. Don't worry we've got you covered! We develop api, web templates
         and most of our products are made with javascript, libraries and frameworks of javascript! We will 
         also build e-commerce site or portfolio on build proposal. We are dedicated to: react templates 
         and different kind of web api, web themes, portfolio build and also ready made websites with customization
          options! So that you can get started without any hustle! We passionate talking about digital products and 
          chatting with web developers! Especially those who want a portfolio on their expertise or who wants to start
           new business. Just like you! If you need any help at all,
     please don't hesitate to contact us. Thank you for your interest in my company.
</div><br/><br/>
<div id='section-2'>
<div id='slide'>
                      
                      <Slide>
                      {Images.map(src => (
                       <div className="each-slide">
                         <img src={`https://raw.githubusercontent.com/sadman-sakib-abesh/images/main/${src.url}`} width='100%' alt="" />
                       </div> ))
                  }
                      </Slide>
                      
                      
                      </div>
                      <div id='slide-2'>
                      
<ul>
  <li>We work with javascript.</li>
  <li>We build high quality portfolio for your expartise.</li>
  <li>We sell react tamplates,html tamplates and api for production.</li>
  <li>We develop chatting services with socket.io</li>
  <li>Our most services are based on mern stack. </li>
</ul>
                      </div>
</div><br/><br/>


<div id='section'>
<b>Products</b><br/>

<Shop breaking='true'/>
<center>get more products in store</center>
</div><br/><br/>


                   
          <br/><br/>

            <div id='section'>
            
            <center> Help us to improve our products and our services. Give us feedback. We will try our lavel best to improve.</center>
<Contact com='true'/>
            </div>
          </div>
        );
    
}

export default Home;