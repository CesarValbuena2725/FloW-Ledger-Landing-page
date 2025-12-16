import { useState } from 'react'
import BasicButton from './components/basicButton'
import FeatureDisplay from './components/featureDisplay'
import GeneralCard from './components/generalCard'
import CarruselComponent from './components/carruselComponent'
import ContactForm from './components/contactForm'
import './App.css'

function App() {


  return (
    <>
      <header className='header'>
        <img src="Logo_Mas_Nombre-NoBackground.png" alt="FloWLdgr Logo" />
        <h1>Flow Ledger</h1>
      </header>

      <main className='content-body'>
        {/* Navigation */}
        <nav>
          <ul className='contact'>
            <li>Features |</li>
            <li>About |</li>
            <li>Contact</li>
          </ul>
        </nav>

        {/* Hero / Impact section */}
        <section>
          <h2>Your Cloud Spend, Accountable and Under Control</h2>
          <p className='impact-paragraph'>
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
        </section>

        <hr className='separator' />

        {/* Features section */}
        <section aria-label="Features">
          <div className='feature-holder'>
            <article>
              <FeatureDisplay img={'/feat1.jpeg'} title="Feature One" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis felis convallis, rhoncus leo id, scelerisque purus. Ut auctor gravida nulla." />
            </article>
            <article>
              <FeatureDisplay img={'/feat2.jpeg'} title="Feature Two" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis felis convallis, rhoncus leo id, scelerisque purus. Ut auctor gravida nulla." />
            </article>
            <article>
              <FeatureDisplay img={'/feat3.jpeg'} title="Feature Three" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis felis convallis, rhoncus leo id, scelerisque purus. Ut auctor gravida nulla." />
            </article>
            <article>
              <FeatureDisplay img={'/feat4.jpeg'} title="Feature Four" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis felis convallis, rhoncus leo id, scelerisque purus. Ut auctor gravida nulla." />
            </article>
          </div>
        </section>

        {/* Pending sections */}
        <hr className='separator' />

        <section className='main-benefit' aria-label="Main Benefit">
          <GeneralCard
            title={"From Build Queues to Budget Impact—All in One Dashboard"}
            description={"FloW Ledger is a tool that links engineering bottlenecks to their real-time financial impact, giving finance and operations teams visibility into how slow merges, queued builds, and workflow delays drive up cloud costs. By combining engineering metrics with cost data, it helps companies optimize processes, cut waste, and hold teams accountable—all in one actionable dashboard."}
            img={"/scott.jpg"}
          />
        </section>

        <hr className='separator' />

        <section className='reviews' aria-label="Reviews">
          <CarruselComponent></CarruselComponent>
        </section>
        <hr className='separator' />

        <section aria-label="Contact" style={{margin: '0'}}>
          <ContactForm/>
        </section>
      </main>

      <footer className='footer'>
        <ul className='contact'>
          <li>Features |</li>
          <li>About |</li>
          <li onClick={() => alert('Sorry, this feature is still undergoing some work!')}>Testimonials |</li>
          <li>Contact</li>
        </ul>
        <hr />
        <p>
          Homestead, FL, USA <br />
          © 2025 FloW Ledger Team. <br />
          All rights reserved.
        </p>
      </footer>
    </>

  )
}

export default App
