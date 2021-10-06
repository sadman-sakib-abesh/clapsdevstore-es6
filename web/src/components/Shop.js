import {React,useEffect,useState} from 'react';
import Card from './Card'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Shop =(props)=>{
    const [data,setData]=useState([])
    const length=data.length
   let [breaking,setBreak]=useState([])



    useEffect(()=>{




if(props.breaking==='true'){

    axios.get('https://futuristic-heavy-shelf.glitch.me/product-get-eight').then(res=>{
    setData(res.data)

        }).catch(err=>{
      console.log(err)
    })

  }else{

  axios.get('https://futuristic-heavy-shelf.glitch.me/product-get').then(res=>{
    setData(res.data)
        }).catch(err=>{
      console.log(err)
    })

    }
    
  



})






  




    
        return (
            <>
             <br/>
                <br/>
                
             <div id='block'>
              
              {
                       data.map(res=><Link id='c-link' to={`/Full?_id=${res._id}`}> <Card
                        img={`${res.img}`}
                      _id={`${res._id}`}
                        pre={`${res.pre}`}
                        price={`${res.price}`}
                        del="false"
                 /></Link>
                 )}
            
              </div>         
         </>
            
        );
    
}

export default Shop;