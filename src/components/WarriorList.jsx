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
        fontSize: '2rem',
        fontWeight: '900',
        marginTop: '30px',
        marginLeft: '15px',
        color: '#1a1a1a',
    },
    tile: {
        margin: '15px',
    },
    prevButton: {
        marginTop: '30px'
    }
}

function WarriorList({ classes, warriors, title, showBackButton }) {

    return (
        <div className={classes.warriorListBox}>
            {showBackButton ? <div className={classes.prevButton}><BackToPreviousPageButton /></div> : ''}
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