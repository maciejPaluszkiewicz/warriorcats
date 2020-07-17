import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import WarriorCreator from "./WarriorCreator";
import MyGang from './MyGang';
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

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

                {pending ? <Spinner /> : error ? <Error /> :
                    <Switch>
                        <Route exact path="/warrior/:id">
                            <WarriorDetails />
                        </Route>
                        <Route path="/create">
                            <WarriorCreator />
                        </Route>
                        <Route path="/gang">
                            <MyGang />
                        </Route>
                        <Route path="/">
                            <WarriorList warriors={warriors} />
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
