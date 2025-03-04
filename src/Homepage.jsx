import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Banner } from './components/Banner/Banner'
import { About } from './components/about/About'
import { Skills } from './components/skills/Skills'
import { Projects } from './components/projects/Projects'
import { Contact } from './components/contact/Contact'

export const Homepage = () => {
  return (
    <>
    <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </>
  )
}
