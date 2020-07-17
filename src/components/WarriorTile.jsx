import React from 'react';
import withStyles from 'react-jss';
import HireDismissButton from './HireDismissButton';

const styles = {
    name: {

    },
    buttons: {
        backgroundColor: 'yellow'
    },

    face: {
        width: '200px',
        height: '300px',
        objectFit: 'contain',
    },
    details: {

    },
    removeFromGang: {

    },
    addToGang: {

    }

}

function WarriorTile({ warrior, classes }) {
    return (
        <div className={classes.tile}>
            <h2 className={classes.name}>{warrior.name}</h2>
            <img className={classes.face} alt='catface' src={warrior.image} />
            <div className={classes.buttons}>
                <button className={classes.details}>Details</button>
                <HireDismissButton warrior={warrior} />
            </div>
        </div>
    );
}

export default withStyles(styles)(WarriorTile);