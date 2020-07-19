import React from 'react';
import withStyles from 'react-jss';
import HireDismissButton from './HireDismissButton';
import { useHistory } from 'react-router-dom'

const styles = {
    tile: {
        border: '1px solid #1a1a1a',
        borderRadius: '5px',
        backgroundColor: '#cacaca',
        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
    },
    name: {
        overflow: 'hidden',
        width: '200px',
        height: '60px',
        color: '#1a1a1a',
        paddingLeft: '8px',
        boxSizing: 'border-box',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
    },
    face: {
        width: '200px',
        height: '300px',
        objectFit: 'contain',
    },
    details: {
        color: '#1a1a1a',
        border: '1px solid #1a1a1a',
        borderRadius: '5px',
        padding: '5px 5px',
        fontSize: '1.1rem',
        backgroundColor: '#eaeaea',
        cursor: 'pointer',
        width: '49%',
        fontWeight: '700',
        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
    },
    hireDismissBox: {
        width: '49%',
        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
    }
}

function WarriorTile({ warrior, classes }) {

    const dummyCat = 'dummyCat400x600.jpg'
    const history = useHistory();
    const goToDetails = () => { history.push(`/warrior/${warrior.id}`) };

    return (
        <div className={classes.tile}>
            <h2 className={classes.name}>{warrior.name}</h2>
            <img className={classes.face} alt='catface' src={warrior.image ? warrior.image : dummyCat} />
            <div className={classes.buttons}>
                <button className={classes.details} onClick={goToDetails}>Details <i className="fas fa-search"></i></button>
                <div className={classes.hireDismissBox}><HireDismissButton warrior={warrior} /></div>
            </div>
        </div>
    );
}

export default withStyles(styles)(WarriorTile);