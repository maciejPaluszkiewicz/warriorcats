import React from 'react';
import withStyles from 'react-jss';
import { useHistory } from 'react-router-dom';

const styles = {
    backToList: {
        color: 'green'
    },
}

function BackToPreviousPageButton({ classes }) {

    const history = useHistory();
    const goToPreviousPage = () => { history.goBack() };

    return (
        <>
            <button className={classes.backToList} onClick={goToPreviousPage}>Back To Previous Page </button>
        </>
    );
}

export default withStyles(styles)(BackToPreviousPageButton);