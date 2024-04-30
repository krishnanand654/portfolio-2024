import { useEffect, useState } from 'react'
import axios from 'axios';
import './works.css'
const Works = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchDataFromGithub();
    }, [])

    const fetchDataFromGithub = async () => {
        await axios.get('https://api.github.com/users/krishnanand654/repos').then((response) => {
            setData(response.data);
        })
    }

    console.log(data);

    return (
        <div className='banner-ctn fade-in-text'>

            <h1 className='prof-name' style={{ marginBottom: '10px' }}>Works</h1>
            <a href="https://663001599223232560984b6a--courageous-starburst-75eca7.netlify.app/">  <img className="banner1" src="netflix.png" /></a>
            <div className='captions'>
                <h3>Netflix clone</h3>
                <p>Netflix clone app build using react and TMDB</p>
            </div>
            <div className='banner-row'>
                <div>
                    <a href="https://bucolic-starburst-540426.netlify.app/"><img className='banner2' src="jacket.png" /></a>
                    <div className='captions'>
                        <h3>Nitro</h3>
                        <p>Minim aute dolor ipsum veniam adipisicing cillum. </p>
                    </div>
                </div>
                <div>
                    <a href="https://sensational-bombolone-377907.netlify.app/"><img className='banner2' src="splitter.png" /></a>
                    <div className='captions'>
                        <h3>Nitro</h3>
                        <p>Minim aute dolor ipsum veniam adipisicing cillum. </p>
                    </div>
                </div>
                <div>
                    <a href="https://jovial-cranachan-890a85.netlify.app/"><img className='banner2' src="apple.png" /></a>
                    <div className='captions'>
                        <h3>Nitro</h3>
                        <p>Minim aute dolor ipsum veniam adipisicing cillum. </p>
                    </div>
                </div>
            </div>

            <h1 className='prof-name' style={{ marginBottom: '20px' }}>Github</h1>
            <div className='github-ctn' >

                {data && data.map((e) => {
                    return (<>
                        <a href={e.html_url} target="_blank" style={{ textDecoration: 'none' }}>
                            <div className='github-card-glass'>
                                <h4 className='g-name'>{e.name}</h4>
                                <p className='g-sub'>{e.language}</p>
                            </div>
                        </a>
                    </>
                    );
                })}

            </div>

        </div>
    )
}

export default Works