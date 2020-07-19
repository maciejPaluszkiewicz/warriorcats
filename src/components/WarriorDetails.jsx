import React from 'react';
import withStyles from 'react-jss';
import HireDismissButton from './HireDismissButton';
import { getWarriors } from '../redux/selectors';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { retireWarrior } from '../redux/actions';
import BackToPreviousPageButton from './BackToPreviousPageButton';

const styles = {
    container: {
        marginTop: '50px',
        paddingTop: '30px',
    },
    name: {
        marginLeft: '15px',
        fontWeight: '900',
        fontSize: '2rem',
    },
    details: {
        display: 'flex',
    },
    warriorData: {
        display: 'flex',
        flexDirection: 'column',
    },
    skill: {
        fontWeight: '700',
        fontSize: '1.5rem',
    },
    face: {
        width: '400px',
        height: '600px',
        objectFit: 'contain',
        margin: '0 15px 15px 15px'
    },
    description: {
        fontSize: '1.2rem',
    },
    retire: {
        marginTop: '10px',
        color: '#1a1a1a',
        border: '1px solid #1a1a1a',
        borderRadius: '5px',
        padding: '5px 5px',
        fontSize: '1.1rem',
        backgroundColor: '#eaeaea',
        cursor: 'pointer',
        width: '100%',
        fontWeight: '700'
    }
}

function WarriorDetails({ classes, warriors, retireWarrior }) {

    let { id } = useParams();
    const warrior = warriors.filter(warrior => warrior.id === id)[0];

    const dummyCat = '/dummyCat400x600.jpg'

    const history = useHistory();
    const goToWarriorsList = () => { history.push(`/`) };

    const retireAndRedirect = () => {
        const r = window.confirm("Sure about retirement of this warrior?"); //Future improvement: pop-up window instead of 'confirm'
        if (r === true) {
            retireWarrior(warrior);
            goToWarriorsList();
        }
    };

    if (warrior === undefined) {
        history.push(`/Error404`)
        return null;
    }

    return (
        <div className={classes.container}>
            <BackToPreviousPageButton />
            <h2 className={classes.name}>{warrior.name}</h2>
            <div className={classes.details}>
                <img className={classes.face} alt='catface' src={warrior.image ? warrior.image : dummyCat} />
                <div className={classes.warriorData}>
                    <h3 className={classes.skill}>{warrior.skill}</h3>
                    <p className={classes.description}>{warrior.description}</p>
                    <div className={classes.buttons}>
                        <HireDismissButton warrior={warrior} />
                        <button className={classes.retire} onClick={retireAndRedirect}>Retire <i class="fas fa-bed"></i></button>
                    </div>
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => ({
    warriors: getWarriors(state),
})

const mapDispatchToProps = dispatch => {
    return {
        retireWarrior: (warrior) => dispatch(retireWarrior(warrior)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(WarriorDetails));