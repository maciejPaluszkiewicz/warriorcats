import React from 'react';
import withStyles from 'react-jss';
import { hireWarrior, dismissWarrior } from '../redux/actions'
import { connect } from 'react-redux';

const styles = {
    removeFromGang: {
        color: 'green'
    },
    addToGang: {
        color: 'red'
    }

}

function HireDismissButton({ warrior, classes, hireWarrior, dismissWarrior }) {
    return (
        <>
            {
                warrior.hired ?
                    <button className={classes.removeFromGang} onClick={() => dismissWarrior(warrior)}>Dismiss</button> :
                    <button className={classes.addToGang} onClick={() => hireWarrior(warrior)} >Hire</button>
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