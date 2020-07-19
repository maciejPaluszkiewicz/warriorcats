import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import withStyles from 'react-jss';

const styles = {
    spinner: {
        color: 'green'
    },
}


function Spinner({ classes }) {
    return (
        <div className={classes.spinner}>
            <ClipLoader
                size={150}
                color={"#123abc"}
            />
        </div>
    );
}

export default withStyles(styles)(Spinner);