import {useState} from 'react';
import useTheme from './useTheme';

function Top(){
const { theme, toggleTheme } = useTheme();

    return(
        <section>

        
            <div id='top'></div>
            <div id="banner" className="container center">
      	        <h1>About Me (With React)</h1>
                    <button onClick={toggleTheme}>
                        Switch to {theme === "light" ? "dark" : "light"} mode
                    </button>
            </div>
            <div className="container subbanner center">
                <div>
                    <p>This is my About Me Webpage.</p>
                </div>
            </div>
        </section>
    )
}
export default Top