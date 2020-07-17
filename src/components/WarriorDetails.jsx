import React from 'react';
import withStyles from 'react-jss';
import HireDismissButton from './HireDismissButton';

const styles = {
    name: {

    },
    details: {

    },

    face: {
        width: '200px',
        height: '300px',
        objectFit: 'contain',
    },
    desription: {

    },
    buttons: {
        backgroundColor: 'yellow'
    },
    removeFromGang: {

    },
    addToGang: {

    },
    retire: {

    }
}

function WarriorDetails({ classes, match: { params: { id } } }) {

    //from redux: warrior of id
    let warrior = {};

    return (
        <div className={classes.container}>
            <h2 className={classes.name}>{warrior.name}</h2>
            <div className={classes.details}>
                <img className={classes.face} alt='catface' src={warrior.image} />
                <p className={classes.description}></p>
            </div>
            <div className={classes.buttons}>
                <HireDismissButton warrior={warrior} />
                <button className={classes.retire}>Retire</button>
            </div>
        </div>
    );
}

export default withStyles(styles)(WarriorDetails);