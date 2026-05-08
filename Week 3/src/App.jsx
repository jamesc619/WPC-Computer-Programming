import { useState } from 'react'
import './App.css';
import Top from './sections/Top.jsx';
import Nav from './sections/Nav.jsx';
import Intro from './sections/Intro.jsx';
import Projects from './sections/Projects.jsx';
import Personal from './sections/Personal.jsx';
import Footer from './sections/Footer.jsx';


function App() {
  return (
    <>
	<Top/>
	<Nav/>
	<Intro/>
	<div className="marginated">
        <Projects/>
        <Personal/>
	</div>
    <Footer/>
	</>
    )
	}


export default App;

// npm run dev