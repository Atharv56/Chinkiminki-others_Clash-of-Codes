import { Parallax } from 'react-parallax';
import './image.css'
import woman2 from '../images/wo4.jpg'
// import { Link } from 'react-router-dom';
const Image2 = () => (
    <Parallax className='image' bgImage= {woman2} strength={800}>
        <div className= "content">
            {/* <Link to='/blog'> */}
            <button className='img-btn'>Enter your blog</button>
            {/* </Link> */}
        </div>
    </Parallax>
);

export default Image2;