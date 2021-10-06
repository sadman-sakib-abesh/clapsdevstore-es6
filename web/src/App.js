import React,{useEffect,useState} from 'react';
import {HashRouter as Router, Route,Link,NavLink} from 'react-router-dom'
import './App.css'
import Checkout from './components/Checkout';
import Home from './components/Home';
import Cart from './components/Cart';
import search from './components/Search';
import Shop from './components/Shop';
import Full from './components/Full'
import Contact from './components/Contact';
import Build from './components/Build';
import  Success  from './components/Success';
import Canceled from './components/Canceled'
import Search from './components/Search';

const App =()=>{

const [search,setSearch]=useState('')


//on load animation
useEffect(()=>{

 

document.getElementById('h-logo').style.top='0'
document.getElementById('h-logo').style.transition='2s'

document.getElementById('animation-grid-1').style.bottom='0'
document.getElementById('animation-grid-1').style.transition='3s'

document.getElementById('animation-grid-2').style.bottom='0'
document.getElementById('animation-grid-2').style.transition='3s'


document.getElementById('animation-grid-3').style.right='0'
document.getElementById('animation-grid-3').style.transition='3s'


document.getElementById('animation-grid-4').style.right='0'
document.getElementById('animation-grid-4').style.transition='3s'


})


//on load animation

const down=()=>{
  
  document.getElementById('in').style.display='block'
  
  document.getElementById('s-div').style.height='100%'
  document.getElementById('s-div').style.width='100%'
  document.getElementById('s-div').style.transition='1s'
  setTimeout(()=>{
    document.getElementById('in').style.width='300px'
    document.getElementById('in').style.transition='1s'
  
  },300)
  }

const up=()=>{
  
  document.getElementById('in').style.width='0px'
  document.getElementById('in').style.transition='1s'
  document.getElementById('s-div').style.height='0%'
  document.getElementById('s-div').style.width='0%'
  document.getElementById('s-div').style.transition='1s'
  
  document.getElementById('in').style.display='none'


}


const sear=()=>{
  window.location.href='/#/Search?i='+search
}


    return (
      <div>
        <Router>
        <span id='animation-grid-1'></span>
        <span id='animation-grid-2'></span>
        <span id='animation-grid-3'></span>
        <span id='animation-grid-4'></span>

<nav id='header'>
<img src='https://raw.githubusercontent.com/sadman-sakib-abesh/images/main/Logopit_1627314975002.png' alt='logo' id='h-logo' height='45px'/>
<label id='in-1' onClick={()=>down()} type='search' placeholder='search' >search</label>
<span  onClick={()=>down()} id='search-btn'><i id='i-bar-2' class="fa fa-search"></i></span>

<div id='i-bar-div'>
<Link class="fa fa-shopping-cart" to='/Cart' id='i-bar-1'></Link>   
</div>
{sessionStorage.getItem('cart')?<span id='confirm'>&nbsp;&nbsp;{JSON.parse(sessionStorage.getItem('cart')).length===0?<>no item in cart</>:<>{JSON.parse(sessionStorage.getItem('cart')).length===1?<>{JSON.parse(sessionStorage.getItem('cart')).length} item in cart</>:<>{JSON.parse(sessionStorage.getItem('cart')).length} items in cart</>}</>}</span>:<></>}
  
</nav>
<nav id='header-1'>
<div id='nav'>
<NavLink exact={true} activeClassName='active-1' className='link' to='/'>Home</NavLink>

<NavLink activeClassName='active-1' className='link' to='/Shop'>Store</NavLink>
<NavLink activeClassName='active-1' className='link' to='/Contact'>Help</NavLink>


</div>

</nav>


<Route exact path='/' component={Home}/>
<Route path='/Cart' component={Cart}/>
<Route path='/Shop' component={Shop}/>
<Route path='/Contact' component={Contact}/>
<Route path='/Build' component={Build}/>
<Route path='/Full' component={Full}/>
<Route path='/Success' component={Success}/>
<Route path='/Canceled' component={Canceled}/>
<Route path='/Checkout' component={Checkout}/>
<Route path='/Search' component={Search}/>

</Router>
<center>
<div id='s-div'>
  <span><i onClick={()=>up()} class="fa fa-window-close"></i></span><br/><br/><br/><br/><br/><br/><br/><br/>
  <center><input id='in' placeholder='search' onKeyDown={(event)=>{if(event.keyCode == 13){up(); sear()}}} onChange={(e)=>setSearch(e.target.value)} type='search'/></center>
</div>
</center>

<div id='footer'><br/>
 <div id='line'>&nbsp;sadmansakib@claps.ml<br/>
 &nbsp;&nbsp;&nbsp;<a href='https://www.facebook.com/sadman.sakib.902604/'><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
 &nbsp;&nbsp;&nbsp;<a href='https://github.com/sadman-sakib-abesh'><i class="fa fa-github-square"></i></a>
 &nbsp;&nbsp;&nbsp;<a href='https://www.linkedin.com/in/sadman-sakib-abesh-677794214?fbclid=IwAR2xfjInkKP-31sbBpqinyxNIWwuc_RYooX0CbpNHFc-WRkzrLWLKUmk0TM'><i class="fa fa-linkedin-square"></i></a>
 &nbsp;&nbsp;&nbsp;<a href="https://twitter.com/AbeshSakib?s=09&fbclid=IwAR12teZdzW8VJ49yjs52o_9V2Un3I0tMagg_hUhMlyMIP4wRFfnQ68DhILk"><i class="fa fa-twitter-square"></i></a>

    </div> 
</div>
      </div>
    );


  }


export default App;