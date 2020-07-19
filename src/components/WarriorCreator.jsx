import React, { useState } from 'react';

import withStyles from 'react-jss';
import { connect } from 'react-redux';
import { createWarrior } from '../redux/actions';
import { createRandomName, createRandomSkill } from '../utilities';
import BackToListButton from './BackToListButton';
import { useHistory } from 'react-router-dom';
import { classes } from 'istanbul-lib-coverage';

// TODO:
// Name; input/generate
// Details: skill (input/generate), description, image
// Buttons: create / cancel
// CheckID/generateID

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
    const [name, setName] = useState('');
    const [skill, setSkill] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const history = useHistory();
    const goToWarriorsList = () => { history.push(`/`) };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const warrior = { id: 'generateId()', name, skill, description, image }
        createWarrior(warrior);
        //TODO alert sucess,
        goToWarriorsList();

    }

    return (
        <div className='container'>
            <BackToListButton />
            <h1>WARRIOR CREATOR</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                <input
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <button type='button' onClick={() => setName(createRandomName())}>Generate Random</button>
                </label>

                <label>
                    Skill:
                <input
                        type='text'
                        value={skill}
                        onChange={e => setSkill(e.target.value)}
                    />
                    <button type='button' onClick={() => setSkill(createRandomSkill())} > Generate Random </button>
                </label>

                <label>
                    Description:
                <input
                        type='text'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </label>

                <label>
                    Image URL:
                <input
                        type='text'
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />
                </label>

                <input type='submit' value='Create' />
                <input type='button' value='Cancel' className={classes.cancel} onClick={goToWarriorsList} />
            </form>
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
