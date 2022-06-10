import Slider from '../../components/slider/Slider';
import Images from "../../assets/images/Images.js";
import './welcome.css';
const Welcome = () => {
    return (
        <div className='pps__welcome' id='welcome'>
             <Slider className = 'slider'  images={Images} />
        </div>
    )
};

export default Welcome
