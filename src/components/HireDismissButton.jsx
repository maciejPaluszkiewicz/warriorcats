import React from 'react';
import withStyles from 'react-jss';

const styles = {
    removeFromGang: {
        color: 'red'
    },
    addToGang: {
        color: 'red'
    }

}

function HireDismissButton({ warrior, classes }) {
    return (
        <>
            {
                warrior.hired ?
                    <button className={classes.removeFromGang}>Dismiss</button> :
                    <button className={classes.addToGang}>Hire</button>
            }
        </>
    );
}

export default withStyles(styles)(HireDismissButton);