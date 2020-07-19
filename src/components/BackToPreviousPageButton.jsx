import React from 'react';
import withStyles from 'react-jss';
import { useHistory } from 'react-router-dom';

const styles = {
    backPrevious: {
        color: '#2a2a2a',
        borderRadius: '5px',
        backgroundColor: '#cacaca',
        marginLeft: '15px',
        border: '1px solid #5b5b5b',
        height: '30px',
        width: '200px',
        cursor: 'pointer',
    },
}

function BackToPreviousPageButton({ classes }) {

    const history = useHistory();
    const goToPreviousPage = () => { history.goBack() };

    return (
        <>
            <button className={classes.backPrevious} onClick={goToPreviousPage}><i class="fas fa-arrow-left"></i> Back To Previous Page </button>
        </>
    );
}

export default withStyles(styles)(BackToPreviousPageButton);