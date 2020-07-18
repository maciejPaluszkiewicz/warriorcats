import React from 'react';
import withStyles from 'react-jss';
import HireDismissButton from './HireDismissButton';
import { getWarriors } from '../redux/reducers'
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'

const styles = {
    name: {

    },
    details: {

    },
    backToList: {
        background: 'pink'
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

function WarriorDetails({ classes, warriors }) {

    let { id } = useParams();
    const warrior = warriors.filter(warrior => warrior.id === id)[0];

    const history = useHistory();
    const goToWarriorsList = () => { history.push(`/`) };

    return (
        <div className={classes.container}>
            <button className={classes.backToList} onClick={goToWarriorsList}>Back To List </button>
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


const mapStateToProps = (state) => ({
    warriors: getWarriors(state),
})

export default connect(
    mapStateToProps,
    null
)(withStyles(styles)(WarriorDetails));