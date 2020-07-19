import React from 'react';
import withStyles from 'react-jss';
import HireDismissButton from './HireDismissButton';
import { getWarriors } from '../redux/reducers';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { retireWarrior } from '../redux/actions';

const styles = {
    backToList: {
        background: 'pink'
    },
    name: {

    },
    details: {

    },
    skill: {

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

function WarriorDetails({ classes, warriors, retireWarrior }) {

    let { id } = useParams();
    const warrior = warriors.filter(warrior => warrior.id === id)[0];

    const history = useHistory();
    const goToWarriorsList = () => { history.push(`/`) };

    const retireAndRedirect = () => {
        retireWarrior(warrior);
        goToWarriorsList();
    };

    return (
        <div className={classes.container}>
            <button className={classes.backToList} onClick={goToWarriorsList}>Back To List </button>
            <h2 className={classes.name}>{warrior.name}</h2>
            <div className={classes.details}>
                <img className={classes.face} alt='catface' src={warrior.image} />
                <h3 className={classes.skill}>{warrior.skill}</h3>
                <p className={classes.description}>{warrior.description}</p>
            </div>
            <div className={classes.buttons}>
                <HireDismissButton warrior={warrior} />
                <button className={classes.retire} onClick={retireAndRedirect}>Retire</button>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    warriors: getWarriors(state),
})

const mapDispatchToProps = dispatch => {
    return {
        retireWarrior: (warrior) => dispatch(retireWarrior(warrior)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(WarriorDetails));