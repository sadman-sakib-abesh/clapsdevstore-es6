import React, { useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Card from './Card'

const Search =()=> {


const {search}=useLocation()
const {i}=queryString.parse(search)
const [data,setData]=useState([])




useEffect(()=>{
    axios.get('https://futuristic-heavy-shelf.glitch.me/search?i='+i).then(res=>{
        setData(res.data)
            }).catch(err=>{
          console.log(err)
        })
    

})

        return (
            <div>
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
            </div>
        );
    
}

export default Search;