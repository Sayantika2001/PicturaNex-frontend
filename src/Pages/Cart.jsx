import React from 'react'
import './Cart.css'
import Payment from '../Components/Assets/Payment.png'
import Payment1 from '../Components/Assets/Visa.png'
import Payment2 from '../Components/Assets/Master.png'
import Payment3 from '../Components/Assets/Discover.png'
import Payment4 from '../Components/Assets/Paypal.png'

const Cart = () => {
  return (
    <div className='container'>
        <div className="text-field">
            <p>If you want to bye this images then pay now
            &nbsp;&nbsp;<img src={Payment} alt=''/></p>
                
        </div>
        <form action=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={Payment1} alt=''/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={Payment2} alt=''/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={Payment3} alt=''/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={Payment4} alt=''/>

            <div className="input-box">
            <span>Card Number</span>
            <input type='text' placeholder='Enter your card number' className='card-input'/>
            </div>
            <div className="input-box">
            <span>Card Holder</span>
            <input type='text' placeholder='Enter card holder name' className='card-input'/>
            </div>
            <div className="flexbox">
                <div className="input-box">
                  <span>Expiration Month</span>
                  <select name='' id='' className='month-input'>
                  <option value= 'month' selected disabled>Month</option>
                  <option value= 'January'>January</option>
                  <option value= 'February'>February</option>
                  <option value= 'March'>March</option>
                  <option value= 'April'>April</option>
                  <option value= 'May'>May</option>
                  <option value= 'June'>June</option>
                  <option value= 'July'>July</option>
                  <option value= 'August'>August</option>
                  <option value= 'September'>September</option>
                  <option value= 'October'>October</option>
                  <option value= 'November'>November</option>
                  <option value= 'December'>December</option>
                  </select>
            </div>
            <div className="input-box">
                  <span>Expiration Year</span>
                  <select name='' id='' className='year-input'>
                  <option value= 'year' selected disabled>Year</option>
                  <option value= '2024'>2024</option>
                  <option value= '2025'>2025</option>
                  <option value= '2026'>2026</option>
                  <option value= '2027'>2027</option>
                  <option value= '2028'>2028</option>
                  <option value= '2029'>2029</option>
                  <option value= '2030'>2030</option>
                  <option value= '2031'>2031</option>
                  </select>
            </div>
            <div className="input-box">
                <span>CVV</span>
                <input type="password" className='cvv-input' />
            </div>
            </div>
            <input type="submit" value= 'submit' className='submit-btn' />

        </form>
        </div>
    
  )
}

export default Cart