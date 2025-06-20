import { useRef } from 'react'
import './App.css'
import AboutMe from './components/aboutme'
import Header from './components/header'
import Projects from './components/projects'
import ContactMe from './components/contact'
function App() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  return (
    <div className='bg-neutral-800'>
      <Header
        onAboutClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onProjectsClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onContactClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />
      <section ref={aboutRef} className="scroll-mt-20">
        <AboutMe />
      </section>
      <section ref={projectsRef} className="scroll-mt-20">
        <Projects/>
      </section>
      <section ref={contactRef} className="scroll-mt-20">
        <ContactMe/>
      </section>
    </div>

  )
}

export default App
