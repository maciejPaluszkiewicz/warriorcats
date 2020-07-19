import React from 'react';
import withStyles from 'react-jss';
import WarriorTile from './WarriorTile';
import BackToPreviousPageButton from './BackToPreviousPageButton';

const styles = {
    constainer: {

    },
    title: {

    }
}

function WarriorList({ classes, warriors, title, showBackButton }) {

    return (
        <div className={classes.container}>
            {showBackButton ? <BackToPreviousPageButton /> : ''}
            <h3 className={classes.title}>{title}</h3>
            {warriors.map((warrior, key) =>
                <WarriorTile key={key} warrior={warrior} />
            )}

        </div>
    );
}

export default withStyles(styles)(WarriorList);