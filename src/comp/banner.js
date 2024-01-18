import './banner.css';
import icon from './icon.webp';
const Banner = () => {
    return (
        <div class='banner'>
            <div>
            <h1>
              <img alt="me" src={icon} onDragStart={(e) => {e.preventDefault();}}/>Hello World
            </h1>
            <hr />
            <p style={{margin:0}}>I made a site floating around serving no purpose</p>
        </div></div>
    )
};
export default Banner;