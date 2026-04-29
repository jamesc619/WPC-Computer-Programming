import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const headerStyle = {
	color:"white",
}




function App() {
  return (
    <>
    <div id="banner" className="container center">
      	<h1>Technical Artifact 2: About Me (With React)</h1>
    </div>
    <div className="container subbanner center">
      <div>
        <p>THE SECOND PROJECT(NOW WITH A SPRINKLE OF REACT).</p>
      </div>
    </div>
	  <br/>
	<nav>
			<a href = "#projects">My Projects</a>
			<a href = "#personal">Personal Life</a>
	</nav>
	<div className="marginated">
		<h2 className= "marginated">Introduction</h2>
		<p className= "marginated">Hello. My name is James Choy. I am a junior at Bayside High School enrolled in the Computer Science and Web Design CTE.</p>
		<img className="marginated antimargin" src = "/src/assets/MyPortrait.jpg"/>
		<h6 className = "antimargin">Photo taken on August 27th, 2023</h6>
		<br/>
		<br/>
		<br/>

<p id="projects"> Here are some of the projects that I have done over the past two and a half years.</p>
		<div id="simpsons">
			<div className="card">
				<h2>9th Grade</h2>
				<h3>"Easy Game"</h3>
				<h4>By James Choy (me) and Timothy Qiu</h4>
				<a href = "https://drive.google.com/file/d/1DrHyCNyyr0aGh4fmZPKaTHArFJCYtVdZ/view?usp=sharing">Download (Requires Python)</a>
				<br/>
				<br/>
				<br/>
				<img src="/src/assets/Easy Gameplay.png"/>
			</div>
			<div className="card">
				<h2>10th Grade</h2>
				<h3>Country Website</h3>
				<a href = "https://jamesc619.github.io/Country_website/" target="_blank">Link</a>
				<h3>NYC OpenData Project</h3>
				<a href = "https://jamesc619.github.io/311-Project/index.html" target="_blank">Link</a>
			</div>
			<div className="card">
				<h2>11th Grade</h2>
				<h3>Encrpytion Project</h3>
				<a href = "https://docs.google.com/presentation/d/1puhVrD_XvsYfomF6j0l7FvgyyT2juGCV/edit?usp=sharing&ouid=116009779158228015540&rtpof=true&sd=true" target="_blank">Presentation Slides</a>
				<br/>
				<br/>
				<a href = "https://drive.google.com/file/d/1dtfSEFdAT4UWnCEKsnbVGD26T2qwHb7v/view?usp=sharing">Download (Requires Java)</a>
				<h3>Target Shooter Game</h3>
				<a href = "https://drive.google.com/file/d/1bXH7jzyu9CsIyJYqrQrAi1FPdGLnhC80/view?usp=sharing">Download (Requires Java)</a>
			</div>
		</div>
		<hr/>
		 <div id="personal">
        <h2>Interests</h2>
        <p>I love playing games, such as: </p>
        <ul>
          <li>Geometry Dash (I'm pretty good)</li>
          <li>Roblox</li>
          <li>Minecraft</li>
          <li>Brawl Stars, Clash Royale</li>
        </ul>
        <hr/>
        <h2>Favorites</h2>
        <p>Favorite food: Rice</p>
        <p className='colored'>Favorite Color: Lavender</p>
		<br/>
        <p>Favorite Game: Geometry Dash</p>
        <p>Favorite animal: Cats</p>

		
    </div>
	</div>
	<br/>
		<div id= "footer" className="center">
			<p className="center">Project 1 - About me</p>
		</div>
	</>
    )
	}


export default App

// npm run dev