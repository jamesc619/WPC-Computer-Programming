import {useState, useEffect} from 'react';
import img1 from '/ezg0.png';
import img2 from '/ezg1.png';
import img3 from '/ezg2.png';
import img4 from '/ezg3.png';
import img5 from '/ezg4.png';
import img6 from '/ezg5.png';
import img7 from '/EC1.png';
import img8 from '/EC2.png';
import img9 from '/EC3.png';
import img10 from '/EC4.png';
import img11 from '/EC5.png';
import img12 from '/EC6.png';
import img13 from '/EC7.png';
import img14 from '/EC8.png';
import img15 from '/EC9.png';
import img16 from '/EC10.png';
import img17 from '/img.png';


function Projects(){
const pythonSlides = [img1, img2, img3, img4, img5, img6];
const [pythonIndex, setPythonIndex] = useState(0);

const javaSlides = [img7, img8, img9, img10, img11, img12, img13, img14, img15, img16,];
const [javaIndex, setJavaIndex] = useState(0);


useEffect(() => {
  const interval = setInterval(() => {
    setPythonIndex((prev) =>
      (prev + 1) % pythonSlides.length
    );
  }, 3000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setJavaIndex((prev) =>
      (prev + 1) % javaSlides.length
    );
  }, 3000);

  return () => clearInterval(interval);
}, []);
    return(
        <section>
            <div id="simpsons">
                <div className="card">
                    <h2 className="white">9th Grade</h2>
                    <h3>"Easy Game"</h3>
                    <h4>By James Choy (me) and Timothy Qiu</h4>
                    <a href = "https://drive.google.com/file/d/1DrHyCNyyr0aGh4fmZPKaTHArFJCYtVdZ/view?usp=sharing">Download (Requires Python)</a>
                    <br/>
                    <br/>
                    <div className = "slideWrap">
                        <img key={pythonIndex} src = { pythonSlides[pythonIndex] } className = "slideImg fade" alt = "Python project slide" />
                    </div>
                </div>
                <div className="card">
                    <h2>10th Grade</h2>
                    <div className="githubLink">
                    <h3>Country Website</h3>
                    <a href = "https://jamesc619.github.io/Country_website/" target="_blank">
                        <img src={img17}/>
                        <span>Link</span>
                    </a>
                    </div>
                    <div className="githubLink">
                    <h3>NYC OpenData Project</h3>
                    <a href = "https://jamesc619.github.io/311-Project/index.html" target="_blank">
                      <img src={img17}/>
                      <span>Link</span>
                    </a>
                    </div>
                </div>
                <div className="card">
                    <h2>11th Grade</h2>
                    <h3>Encrpytion Project</h3>
                    <div className = "slideWrap">
                        <img key={javaIndex} src = { javaSlides[javaIndex] } className = "slideImg fade" alt = "Java project slide" />
                    </div>
                    <br/>
                    <a href = "https://drive.google.com/file/d/1dtfSEFdAT4UWnCEKsnbVGD26T2qwHb7v/view?usp=sharing">Download (Requires Java)</a>
                    <h3>Target Shooter Game</h3>
                    <a href = "https://drive.google.com/file/d/1bXH7jzyu9CsIyJYqrQrAi1FPdGLnhC80/view?usp=sharing">Download (Requires Java)</a>
                </div>
		</div>
		<hr/>
        </section>
    )
}
export default Projects