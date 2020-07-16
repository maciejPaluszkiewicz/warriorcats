import React from 'react';
import WarriorTile from './WarriorTile';

function WarriorList({ warriors }) {
    return (
        <div className="container">
            <h3>list of cats</h3>
            {warriors.map((warrior, key) =>
                <WarriorTile key={key} warrior={warrior} />
            )}

        </div>
    );
}

export default WarriorList;