import { LinkedinFilled, GithubFilled, MailFilled } from '@ant-design/icons'
import './profile.css';
const Profile = () => {
    return (
        <div className='prof-ctn fade-in-text'>

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