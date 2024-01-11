import React from 'react'
import sample from './hero.mp4'
function Backer() {
    return (
        <div className="back-video">
            
            <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
        </div>
    )
}

export default Backer;