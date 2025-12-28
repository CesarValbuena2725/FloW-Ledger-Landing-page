import BasicButton from './components/basicButton'
import FeatureDisplay from './components/featureDisplay'
import GeneralCard from './components/generalCard'
import CarruselComponent from './components/carruselComponent'
import ContactForm from './components/contactForm'
import './App.css'

function App() {

  const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

  return (
    <>
      <header className='header'>
        <img src="No_Background_White.png" alt="FloWLdgr Logo" />
        <h1>Flow Ledger</h1>
      </header>

      <main className='content-body'>
        {/* Navigation */}
        <nav>
          <ul className='contact' style={{borderBottom: '2px solid #0B3D91'}}>
            <li onClick={() => scrollToSection('Features')}>
                Features
            </li>
            <li onClick={() => scrollToSection('Reviews')}> 
              About 
            </li>
            <li onClick={() => scrollToSection('Contact')}>
              Contact
            </li>
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
              backgroundCol={"#3069cbff"}
              borderCol={"#0B3D91"}
              text={"GET STARTED"}
              textColor={"#F5F7FA"}
              onClick={() => alert('si')}
            />

            <BasicButton
              backgroundCol={"#0B3D91"}
              borderCol={"#153163"}
              text={"LEARN MORE"}
              textColor={"#F5F7FA"}
            />
          </div>
        </section>

        <hr className='separator' />

        {/* Features section */}
        <section aria-label="Features" id='Features'>
          <div className='feature-holder'>
            <article>
              <FeatureDisplay img={'/feat1.jfif'} title="Real-Time Bottleneck Visibility" text="Spot slow PRs, queued builds, and idle environments instantly — no guesswork, just actionable insight." />
            </article>
            <article>
              <FeatureDisplay img={'/feat2.jfif'} title="Financial Impact Tracking" text="Understand how workflow inefficiencies inflate cloud spend. Make cost-visible decisions today." />
            </article>
            <article>
              <FeatureDisplay img={'/feat3.jfif'} title="Actionable Attribution & Feedback" text="Get clear feedback on where delays occur, so teams can improve processes — not assign blame." />
            </article>
            <article>
              <FeatureDisplay img={'/feat4.jpg'} title="Enterprise-Grade Transparency" text="Full versioned, auditable data for finance and leadership. See the why behind every cost impact." />
            </article>
          </div>
        </section>

        {/* Pending sections */}
        <hr className='separator' />

        <section className='main-benefit' aria-label="Main Benefit">
          <GeneralCard
            title={"From Build Queues to Budget Impact—All in One Dashboard"}
            description={"FloW Ledger is a tool that links engineering bottlenecks to their real-time financial impact, giving finance and operations teams visibility into how slow merges, queued builds, and workflow delays drive up cloud costs. By combining engineering metrics with cost data, it helps companies optimize processes, cut waste, and hold teams accountable—all in one actionable dashboard."}
            img={"/FloW Ledger — General Dashboard (Mock).jpg"}
          />
        </section>

        <hr className='separator' />

        <section className='reviews' aria-label="Reviews" id='Reviews'>
          <CarruselComponent></CarruselComponent>
        </section>
        <hr className='separator' />

        <section aria-label="Contact" id='Contact' style={{margin: '0'}}>
          <ContactForm/>
        </section>
      </main>

      <footer className='footer'>
        <ul className='footer-contact'>
          <li onClick={() => scrollToSection('Features')}>Features </li>
          <li onClick={() => scrollToSection('Reviews')}>About </li>
          <li onClick={() => alert('Sorry, this feature is still undergoing some work!')}>Testimonials </li>
          <li onClick={() => scrollToSection('Contact')}>Contact</li>
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
