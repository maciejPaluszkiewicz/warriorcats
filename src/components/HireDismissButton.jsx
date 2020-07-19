import React from 'react';
import withStyles from 'react-jss';
import { hireWarrior, dismissWarrior } from '../redux/actions'
import { connect } from 'react-redux';

const styles = {
    removeFromGang: {
        color: '#ae2029',
        border: '1px solid #1a1a1a',
        borderRadius: '5px',
        padding: '5px 5px',
        fontSize: '1.1rem',
        backgroundColor: '#eaeaea',
        cursor: 'pointer',
        width: '100%',
        fontWeight: '700'
    },
    addToGang: {
        color: '#008000',
        border: '1px solid #1a1a1a',
        borderRadius: '5px',
        padding: '5px 5px',
        fontSize: '1.1rem',
        backgroundColor: '#eaeaea',
        cursor: 'pointer',
        width: '100%',
        fontWeight: '700'
    }
}

function HireDismissButton({ warrior, classes, hireWarrior, dismissWarrior }) {
    return (
        <>
            {
                warrior.hired ?
                    <button className={classes.removeFromGang} onClick={() => dismissWarrior(warrior)}>Dismiss <i className="fas fa-times"></i></button> :
                    <button className={classes.addToGang} onClick={() => hireWarrior(warrior)} >Hire <i className="fas fa-paw"></i></button>
            }
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        hireWarrior: (warrior) => dispatch(hireWarrior(warrior)),
        dismissWarrior: (warrior) => dispatch(dismissWarrior(warrior))
    }
}
export default connect(
    null,
    mapDispatchToProps
)(withStyles(styles)(HireDismissButton));