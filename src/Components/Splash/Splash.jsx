import './splash.css';
import Fade from 'react-reveal/Zoom';
const Splash = () => {
    return (
        <Fade>
            <div className="fade-in-image s">
                <video width="400" height="400" muted autoPlay>
                    <source src="face1.mp4" type="video/mp4" />
                </video>
            </div>
        </Fade>
    )
}

export default Splash