import React from 'react';
import withStyles from 'react-jss';

const styles = {
    container: {
        marginTop: '50px',
        paddingTop: '40px',
    },
    error: {
        fontSize: '2.5rem',
        fontWeight: '900',
        textAlign: 'center',
        width: '100%',
        color: '#1a1a1a'
    },
    errorInfo: {
        fontSize: '1.5rem',
        fontWeight: '700',
        textAlign: 'center',
        width: '100%',
        color: '#1a1a1a',
        paddingBottom: '40px'
    }
}

function Error({ classes }) {
    return (
        <div className={classes.container}>
            <div className={classes.error}><i className="fas fa-paw"></i> Cat-a-strophic Error <i className="fas fa-paw"></i></div>
            <div className={classes.errorInfo}>Can't load any warriors. Fetch Failed. Flee!</div>
        </div>
    )
}

export default withStyles(styles)(Error);