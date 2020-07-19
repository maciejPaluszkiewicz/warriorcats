import React from 'react';
import BackToListButton from './BackToListButton';
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

    }
}

function FourOhFour({ classes }) {
    return (
        <div className={classes.container}>
            <BackToListButton />
            <div className={classes.error}><i className="fas fa-paw"></i> 404 ERROR <i className="fas fa-paw"></i><br /> ZOMG No cats here!</div>

        </div>
    )
}

export default withStyles(styles)(FourOhFour);

