import React from 'react';

function WarriorTile({ warrior }) {
    return (
        <div className='tile'>
            <h2 className='name'>{warrior.name}</h2>
            <img className='face' alt='catface' src={warrior.image} />
            <div className='buttons'>
                <button className='details'>Details</button>
                {warrior.hired ?
                    <button className='removeFromGang'>Dismiss</button> :
                    <button className='addToGang'>Hire</button>
                }
            </div>
        </div>
    );
}

export default WarriorTile;