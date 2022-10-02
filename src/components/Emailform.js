import React from 'react'
import { useState } from 'react';

const Emailform = () => {

    const [userEmail, setUserEmail] = React.useState('');
    const handleUserEmail = (event) => {
        setUserEmail(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('userEmail:', userEmail);
        if(userEmail === '' ) {
            alert("Can't submit empty");
            return;
        }
      


        // Create new responses (CRUD)
        fetch('https://module7-24f58-default-rtdb.asia-southeast1.firebasedatabase.app/message.json',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userEmail: userEmail,
                    
                }) 
            }
        ).then(res => {
            console.log('res: ', res);
            return res.json();
        }).then ( data => {
            console.log('data: ', data);
        })

     
        
        setUserEmail('');

        alert('Email Submitted ')
    }
   
    
  return (
  <>
     <form onSubmit={handleSubmit}>
  <div className='custom-form'>
           
            <div className='input'>
                
              <input placeholder='Your Email'  onChange={handleUserEmail} value={userEmail}></input>
              <button >Subscribe</button>
              <p>Lorem impsum dolor amit</p>
            </div>
            
          </div></form></>
  )
}

export default Emailform