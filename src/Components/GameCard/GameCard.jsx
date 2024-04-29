import { LikeOutlined } from '@ant-design/icons'
import './GameCard.css';

const GameCard = () => {
    return (
        <div className="game-ctn">
            <img src="cover.png" className='cover-img' />
            <h2>Snake & Ladder</h2>
            <p className="game-sub">Non voluptate mollit in minim magna cillum. Cupidatat nulla excepteur cillum laborum enim sint.
                Est quis Lorem Lorem irure commodo ipsum ea aliquip quis mollit eiusmod non duis.</p>
            <div className='btn-ctn'>
                <a href='https://github.com/krishnanand654/Snake-and-Ladder'> <LikeOutlined style={{ fontSize: '20px', position: 'relative', top: '3px' }} /></a>
                <a href="https://replit.com/@KrishnanandA/Snake-and-Ladder"><button className='play-btn'>Play Now</button></a>
            </div>
        </div>
    )
}

export default GameCard