import './splash.css';
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Zoom';
const Splash = () => {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {

                setMobile(true);
            } else {
                setMobile(false);
            }
        }

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial mode setup
        handleResize();

        // Remove event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Fade>
            <div className="fade-in-image">
                {mobile ? <img src="face1.gif" style={{ width: 'auto', height: '300px' }} /> :
                    <video width="400" height="400" muted autoPlay loop>
                        <source src="face1.mp4" type="video/mp4" />
                    </video>
                }
            </div>
        </Fade>
    )
}

export default Splash