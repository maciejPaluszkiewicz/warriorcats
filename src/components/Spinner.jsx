import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import withStyles from 'react-jss';

const styles = {
    spinner: {
        marginTop: '100px',
        textAlign: 'center',
    },
}

function Spinner({ classes }) {
    return (
        <div className={classes.spinner}>
            <ClipLoader
                size={200}
                color={"#dac400"}
            />
        </div>
    );
}

export default withStyles(styles)(Spinner);