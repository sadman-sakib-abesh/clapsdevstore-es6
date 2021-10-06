import {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Card from './Card';

const App=() =>{

  const [img,setImg]=useState('')
  const [pre,setPre]=useState('')
  const [price,setPrice]=useState('')
  const [about,setAbout]=useState('')
  const [hash,setHash]=useState('')
  const [link,setLink]=useState('')
  const [download,setDownload]=useState('')
  const [data,setData]=useState([])

useEffect(()=>{
axios.get('http://localhost:4000/product-get').then(res=>
setData(res.data)
).catch(err=>{
  console.log(err)
})
})


const post =()=>{
  if(img==='' || pre==='' || price==='' || link===''){
    alert('required field are empty')
  }else{
    axios.post('http://localhost:4000/product-post',{img,pre,price,about,hash,link,download}).then(res=>
    alert(res.data)
  
    ).catch(err=>{
      console.log(err)
    })

  }
 
}




  return (
    <div className="App">
      <br/><br/><br/>
    <center>
    <input id='in' type='text' placeholder='img' onChange={(e)=>setImg(e.target.value)}/><br/><br/>
    <input id='in' type='text' placeholder='pre' onChange={(e)=>setPre(e.target.value)}/><br/><br/>
    <input id='in' type='text' placeholder='price' onChange={(e)=>setPrice(e.target.value)}/><br/><br/>
    <textarea id='in' cols='20' rows='10' type='text' placeholder='about' onChange={(e)=>setAbout(e.target.value)}/><br/><br/>
    <input id='in' type='text' placeholder='hash' onChange={(e)=>setHash(e.target.value)}/><br/><br/>
    <input id='in' type='text' placeholder='link' onChange={(e)=>setLink(e.target.value)}/><br/><br/>
    <input id='in' type='text' placeholder='link' onChange={(e)=>setDownload(e.target.value)}/><br/><br/>
    
    <button onClick={()=>post()}>post</button><br/><br/>
 </center>
  {data.map(res=><Card
                img={`${res.img}`}
              _id={`${res._id}`}
                pre={`${res.pre}`}
                price={`${res.price}`}
        
                
                />)}  
   
      
    </div>
  );
}

export default App;
