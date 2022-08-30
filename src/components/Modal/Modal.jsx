import React, { useState } from 'react'
import './Modal.css'

function Modal({movie,closeModal}) {
  // converts 1 digit numbers to 2 digit by adding a 0 infront
  const getFormat=(val)=>{
    const vv=""+val;
    if(vv.length===1)return("0"+vv);
    return vv;
  }

  const [date,setDate]=useState("");
  const [time,setTime]=useState("");
  const [num,setNum]=useState(1);
  let ndate=new Date();  
  let min_date=`${ndate.getFullYear()}-${getFormat(ndate.getMonth()+1)}-${getFormat(ndate.getDate())}`;
  let min_time=`${getFormat(ndate.getHours())}:${getFormat(ndate.getMinutes())}`;
  console.log(min_date,min_time);
  return (
    <div className="modal" id="modal">
        <div className="modal-content">
            <span id="close-btn" className="close" onClick={closeModal}>&times;</span>
            <div className="modal-title">{movie.Title}</div>
            <div className="modal-info">
                <img src={movie.Poster} alt={movie.Title} className="tile-img"/>
                <div className="modal-form">
                  <form className="inp-form">
                    <label className="inp start">Date : </label> 
                    <input type="date" className="inp-start" required value={date} onChange={(e)=>setDate(e.target.value)} min={min_date}/><br/> 
                    <label className="inp start">Time : </label> 
                    <input type="time" className="inp-start" required value={time} onChange={(e)=>setTime(e.target.value)} min={min_time}/><br/> 
                    <label className="inp start">Tickets : </label> 
                    <input type="Number" className="inp-start" min='1' required value={num} onChange={(e)=>setNum(e.target.value)}/><br/>  
                    <hr />
                    <label className="inp start">Cost : </label> 
                    <label className="inp start">{200*num}</label><br/>  
                    <label className="inp start">Taxes(@18%) : </label> 
                    <label className="inp start">{36*num}</label><br/>  
                    <hr />
                    <label className="inp start">Net Cost(Inc. Taxes) : </label> 
                    <label className="inp start">{236*num}</label><br/>  
                    <br/> 
                    <button className="inp-submit base-btn" type='submit'>Book</button>
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Modal