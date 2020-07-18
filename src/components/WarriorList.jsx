import React from 'react';
import WarriorTile from './WarriorTile';

function WarriorList({ warriors, title }) {
    return (
        <div className="container">
            <h3>{title}</h3>
            {warriors.map((warrior, key) =>
                <WarriorTile key={key} warrior={warrior} />
            )}

        </div>
    );
}

export default WarriorList;