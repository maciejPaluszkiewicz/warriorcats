import React from 'react';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import { createWarrior } from '../redux/actions';

// NAME; input/generate
// DEtails: skill (input/generate), description, image
// buttons: create / cancel
// checkID/generateID

const styles = {
    name: {

    },
    details: {

    },
    cancel: {
        background: 'pink'
    },
    face: {
        width: '200px',
        height: '300px',
        objectFit: 'contain',
    },
    desription: {

    },
    buttons: {
        backgroundColor: 'yellow'
    }
}


function WarriorCreator({ createWarrior }) {

    const Testocat = {
        "id": "001337",
        "name": "Test Cat",
        "skill": "Sneak of Darkness",
        "description": "Mouser lynx siberian puma. Tomcat abyssinian for kitty and munchkin. Kitten leopard but cornish rex.",
        "image": "https://images.unsplash.com/photo-1564492008791-1f2582d3c60a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=400"
    }

    return (
        <div className="container">
            <h1>WARRIOR CREATOR</h1>

            <button onClick={() => createWarrior(Testocat)}>ADD CAT</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        createWarrior: (warrior) => dispatch(createWarrior(warrior)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(withStyles(styles)(WarriorCreator));