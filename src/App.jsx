import { useState } from 'react'
import Menu from './Menu.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx'
import Footer from './Footer.jsx'

function App() {

  return (<>
        <section className="menu"><Menu /></section>
        <section className="panel"><Home /></section>
        <section className="panel"><About /></section>
        <section className="panel"><Skills /></section>
        <section className="panel"><Contact /></section>
        <section className="panel"><Projects /></section>
        <section className="panel"><Footer /></section>
    </>
  );
}

export default App
