import './index.css';
import Weather from "./Weather";
function App() {
return (
  <div className ="App">
  <div class="container">
  <Weather defaultCity="Chiang Mai" />
  <footer>
          This project was coded by
      
            Niamh Talbot
          
          
          <a
            href="https://github.com/wecodeschool/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
  </div>
  </div>
)
}

export default App;
