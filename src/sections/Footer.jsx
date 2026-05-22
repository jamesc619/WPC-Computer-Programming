import img17 from '/img.png';

function Footer(){
    return(
        <section>
	    	<div id= "footer" className="center">
		    	<p className="center">Project 3 - About me</p>
                <a href="https://github.com/jamesc619" target="_blank">
                    <img src={img17}/>
                    Github
                </a>
	    	</div>
        </section>
    )
}
export default Footer