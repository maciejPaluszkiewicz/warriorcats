import React from 'react';
import withStyles from 'react-jss';
import { useHistory } from 'react-router-dom';

const styles = {
    backToList: {
        color: 'green'
    },
}

function BackToListButton({ classes }) {

    const history = useHistory();
    const goToList = () => { history.push(`/`) };

    return (
        <>
            <button className={classes.backToList} onClick={goToList}>Back To List </button>
        </>
    );
}

export default withStyles(styles)(BackToListButton);