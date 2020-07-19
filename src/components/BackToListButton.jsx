import React from 'react';
import withStyles from 'react-jss';
import { useHistory } from 'react-router-dom';

const styles = {
    backToList: {
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

function BackToListButton({ classes }) {

    const history = useHistory();
    const goToList = () => { history.push(`/`) };

    return (
        <>
            <button className={classes.backToList} onClick={goToList}><i class="fas fa-arrow-left"></i> Back To List </button>
        </>
    );
}

export default withStyles(styles)(BackToListButton);