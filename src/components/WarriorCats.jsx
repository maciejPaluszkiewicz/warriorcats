import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import WarriorCreator from "./WarriorCreator";
import WarriorList from './WarriorList';
import WarriorDetails from './WarriorDetails';
import { bindActionCreators } from 'redux';
import { getWarriorsPending, getWarriors, getWarriorsError } from '../redux/reducers';
import fetchWarriorsAction from '../redux/fetch';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import Error from './Error';

function WarriorCats({ warriors, pending, error, fetchWarriors }) {

    useEffect(fetchWarriors, []);

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/create">Create New Warrior</Link>
                        </li>
                        <li>
                            <Link to="/gang">My Gang</Link>
                        </li>
                    </ul>
                </nav>
                {pending ? <Spinner /> : error ? <Error /> :
                    <Switch>
                        <Route exact path="/warrior/:id">
                            <WarriorDetails />
                        </Route>
                        <Route path="/create">
                            <WarriorCreator />
                        </Route>
                        <Route path="/gang">
                            <WarriorList warriors={warriors.filter(x => x.hired)} title="My Gang" />
                        </Route>
                        <Route path="/">
                            <WarriorList warriors={warriors} title="List of Cats" />
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
)(WarriorCats);
