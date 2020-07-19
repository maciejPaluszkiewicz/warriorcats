import React from 'react';
import withStyles from 'react-jss';
import WarriorTile from './WarriorTile';
import { useHistory } from 'react-router-dom';

const styles = {
    constainer: {

    },
    title: {

    }
}

function WarriorList({ classes, warriors, title, showBackButton }) {

    const history = useHistory();
    const goToWarriorsList = () => { history.push(`/`) };

    return (
        <div className={classes.container}>
            {showBackButton ? <button className={classes.backToList} onClick={goToWarriorsList}>Back To List </button> : ''}
            <h3 className={classes.title}>{title}</h3>
            {warriors.map((warrior, key) =>
                <WarriorTile key={key} warrior={warrior} />
            )}

        </div>
    );
}

export default withStyles(styles)(WarriorList);