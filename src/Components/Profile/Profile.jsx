import { LinkedinFilled, GithubFilled, MailFilled } from '@ant-design/icons'
import { useEffect, useState } from 'react';
import './profile.css';
const Profile = () => {
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
        <div className={mobile ? "prof-ctn-mobile" : "prof-ctn"}>

            <img src="static_face1.png" className="prof-img" />
            <h1 className='prof-name'>Hi! I'am Krishnanand</h1>
            <p className='prof-sub'>Software Engineer</p>

            <div className='links'>
                <a href='https://www.linkedin.com/in/krishnanand-a-40205121b/'><LinkedinFilled /></a>
                <a href='https://github.com/krishnanand654'> <GithubFilled /></a>
                <a href='mailto:krishnanand654@gmail.com'> <MailFilled /></a>
            </div>
        </div >
    )
}

export default Profile