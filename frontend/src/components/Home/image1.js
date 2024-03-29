import { Parallax } from 'react-parallax';
import './image.css'
import woman1 from '../images/wo3.jpg';
import { Link } from 'react-router-dom';
const Image1 = () => (
    <Parallax className='image' bgImage= {woman1} strength={800}>
        <div className= "content">
            {/* <span className='img-text'>Welcome to Sakhi</span> */}
            <Link to="/predict"><button className='img-btn' style={{fontSize:35}} >
                Find Your Travel Buddy</button></Link>
        </div>
    </Parallax>
);

export default Image1;