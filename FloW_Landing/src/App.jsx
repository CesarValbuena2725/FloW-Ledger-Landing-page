import { useState } from 'react'
import BasicButton from './components/basicButton'
import './App.css'

function App() {


  return (
    <>
      <header className='header'>
        <img src="Logo_Mas_Nombre-NoBackground.png" alt="/FloWLdgr Logo" />
        <h1>
          Flow Ledger
        </h1>
      </header>
      <div className='content-body'>
        <ul className='contact'>
          <li>
            Features |
          </li>
          <li>
            About |
          </li>
          <li>
            Contact
          </li>
        </ul>

        <h2>Your Cloud Spend, Accountable and Under Control</h2>

        <p>
          See the financial impact of engineering delivery bottlenecks in real-time — reduce cloud waste, speed delivery, and make engineers accountable for cost
        </p>

        <div className='button-holder'>

          <BasicButton
            backgroundCol={"#92487A"}
            borderCol={"#E49BA6"}
            text={"GET STARTED"}
            textColor={"#FFFFFF"}
          />

          <BasicButton
            backgroundCol={"#540863"}
            borderCol={"#FFD3D5"}
            text={"LEARN MORE"}
            textColor={"#FFD3D5"}
          />
        </div>

        <hr className='separator'/>
        {/* Pending for Feature's section*/}
        {/* Pending for Main Benefit section*/}
        <hr className='separator'/>
        {/* Pending for Reviews section*/}
        <hr className='separator'/>
        {/* Pending for Contact section*/}

      </div>
      <footer className='footer'>
        <ul className='contact'>
          <li>
            Features |
          </li>
          <li>
            About |
          </li>
          <li onClick={() => alert('Sorry, this feature is still undergoing some work!')}>
            Testimonials |
          </li>
          <li>
            Contact
          </li>
        </ul>

        <hr />

        <p>
          Homestead, FL, USA <br />
          © 2025 FloW Ledger Team. <br />
          All rights reserved.
        </p>
      </footer >
    </>
  )
}

export default App
