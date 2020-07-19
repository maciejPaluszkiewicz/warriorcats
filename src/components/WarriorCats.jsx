import React, { useEffect } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import WarriorCreator from './WarriorCreator';
import WarriorList from './WarriorList';
import WarriorDetails from './WarriorDetails';
import { bindActionCreators } from 'redux';
import { getWarriorsPending, getWarriors, getWarriorsError } from '../redux/selectors';
import fetchWarriorsAction from '../redux/fetch';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import Error from './Error';
import FourOhFour from './FourOhFour';
import withStyles from 'react-jss';

const styles = {
    strengthInNumbers: {
        boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
        backgroundColor: '#dac400',
        color: '#1a1a1a',
        minHeight: '20px',
        minWidth: '20px',
        fontWeight: '700',
        padding: '5px 10px',
        borderRadius: '15%',
        marginLeft: '10px'
    },
    navigation: {
        position: 'fixed',
        boxSizing: 'border-box',
        top: '0',
        width: '100%',
        maxWidth: '1200px',
        backgroundColor: '#5b5b5b',
        boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.75)',
        backgroundImage: 'url(catwalk.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '95% 0',

    },
    navlist: {
        display: 'flex',
        listStyleType: 'none',

    },
    navListElement: {
        color: '#ffffff',
        margin: '5px 15px',
        '&:visited': { color: '#ffffff' }
    },
    link: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '1.2rem',
        fontWeight: '700',
    }
}

function WarriorCats({ warriors, pending, error, fetchWarriors, classes }) {

    useEffect(fetchWarriors, []);

    return (
        <Router basement='/'>
            <div>
                <nav className={classes.navigation}>
                    <ul className={classes.navlist}>
                        <li className={classes.navListElement}>
                            <Link className={classes.link} to='/'>Home</Link>
                        </li>
                        <li className={classes.navListElement}>
                            <Link className={classes.link} to='/create'>Create New Warrior</Link>
                        </li>
                        <li className={classes.navListElement}>
                            <Link className={classes.link} to='/gang'>My Gang <span className={classes.strengthInNumbers}>{warriors.filter(x => x.hired).length}</span></Link>
                        </li>
                    </ul>
                </nav>
                {pending ? <Spinner /> : error ? <Error /> :
                    <Switch>
                        <Route exact path='/warrior/:id'>
                            <WarriorDetails />
                        </Route>
                        <Route exact path='/create'>
                            <WarriorCreator />
                        </Route>
                        <Route exact path='/gang'>
                            <WarriorList showBackButton warriors={warriors.filter(x => x.hired)} title='My Gang' />
                        </Route>
                        <Route exact path='/'>
                            <WarriorList warriors={warriors} />
                        </Route>
                        <Route>
                            <FourOhFour />
                        </Route>
                    </Switch>
                }
            </div>
        </Router>
    );
}

const mapStateToProps = state => ({
    error: getWarriorsError(state),
    warriors: getWarriors(state),
    pending: getWarriorsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchWarriors: fetchWarriorsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(WarriorCats));
