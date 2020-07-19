import React from 'react';
import withStyles from 'react-jss';
import WarriorTile from './WarriorTile';
import BackToPreviousPageButton from './BackToPreviousPageButton';

const styles = {
    warriorListBox: {
        marginTop: '50px',
        paddingTop: '10px',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: '700',
    },
    tile: {
        margin: '15px',
    }
}

function WarriorList({ classes, warriors, title, showBackButton }) {

    return (
        <div className={classes.warriorListBox}>
            {showBackButton ? <BackToPreviousPageButton /> : ''}
            {title ? <h3 className={classes.title}>{title}</h3> : ''}
            <div className={classes.container}>
                {warriors.map((warrior, key) =>
                    <div className={classes.tile}>
                        <WarriorTile key={key} warrior={warrior} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default withStyles(styles)(WarriorList);