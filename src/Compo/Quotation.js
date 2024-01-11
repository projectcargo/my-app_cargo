import React from 'react'

function Quotation() {
  return (
      <form action="">
    <div className="quote">
        <input type="text" placeholder='Pick-Up'/>
        {/* <select>
            <option>In</option>
            <option>eng</option>
            <option>euro</option>   
            <option>Amre</option>
        </select> */}
        <input type="text" placeholder='Deliver'/>
        <input type="date" placeholder='Departure-Date'/>
        <input type="text" placeholder='Containre-Type'/>
        <button class="btn btn-primary" type="submit">Get Quote</button>
    </div>
        </form>
  )
}

export default Quotation;