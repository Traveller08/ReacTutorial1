import React from 'react';
import Card from './Card';
import { VscAdd } from 'react-icons/vsc';
import App from './App'
const Navbar =()=>{
  const AddCard=()=>{
    const container=document.getElementsByClassName('card-container');
    const header=document.getElementById('heading');
    const desc = document.getElementById('desc');
    container.innerHTML+=<Card heading={header.value} desc ={desc.value} />
  };
  return (
    <div className='nav-bar'>
       <div className='nav-link'>Home</div>
       <div className='nav-link'>About us</div>
       <div className='nav-link'>Profile</div>
       <div className='nav-link'>Log out</div>
       <VscAdd className='add-btn' />
       <div className='modal'>
          <input type='text' id='heading' />
          <input type='text' id='desc' />
          <button onClick={AddCard}>Submit</button>
        </div>
    </div>
  );
}

export default Navbar;