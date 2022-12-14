import React from 'react';
import './Header.css';
import {NavLink, useNavigate} from 'react-router-dom';   
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
const curuser=JSON.parse(sessionStorage.getItem("user"));

function Header() {
    const navigate=useNavigate();

    const Search=(event)=>{
        if(event.key==="Enter"&&event.target.value) {
            event.preventDefault();
            const val=event.target.value;
            event.target.value="";
            navigate(`/search/${val}`);
        }
    }    
    
    return (    
        <div className="container">
            <div className="container-left">
                <NavLink to='/' className='NavLink' end>BookMovies</NavLink> 
            </div>
            <div className="container-center">
                <input type="text" placeholder='Search Recipes' id='searchbar' onKeyDown={Search}/>
            </div>
            <div className="container-right">
            <AccountCircleRoundedIcon fontSize='large'/><div className="username">{curuser.username}</div>
            </div>
        </div>
    );
}

export default Header
