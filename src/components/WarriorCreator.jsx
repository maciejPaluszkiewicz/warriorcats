import React, { useState } from 'react';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import { createWarrior } from '../redux/actions';
import { getNextFreeID } from '../redux/selectors';
import { createRandomName, createRandomSkill } from '../utilities';
import BackToPreviousPageButton from './BackToPreviousPageButton';
import { useHistory } from 'react-router-dom';

const styles = {
    container: {
        marginTop: '50px',
        paddingTop: '40px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '15px'
    },
    title: {
        fontSize: '2rem',
        fontWeight: '900',
        marginTop: '30px',
        marginLeft: '15px',
        color: '#1a1a1a',
    },
    label: {
        display: 'flex',
        justifyContent: 'flex-start',
        fontSize: '1.2rem',
        margin: '5px 0',
    },
    span: {
        width: '10%',
    },
    input: {
        width: '25%',
        fontSize: '1.2rem',
        marginRight: '5px',
    },
    button: {
        width: '10%',
    },
    face: {
        width: '200px',
        height: '300px',
        objectFit: 'contain',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-start',
        margin: '15px 10%',

    },
    create: {
        border: '1px solid #1a1a1a',
        borderRadius: '5px',
        padding: '5px 5px',
        fontSize: '1.2rem',
        backgroundColor: '#dac400',
        cursor: 'pointer',
        width: '15%',
        marginRight: '5px'
    },
    cancel: {
        border: '1px solid #1a1a1a',
        borderRadius: '5px',
        padding: '5px 5px',
        fontSize: '1.2rem',
        backgroundColor: '#eaeaea',
        cursor: 'pointer',
        width: '15%',
    },
}

function WarriorCreator({ createWarrior, nextFreeId, classes }) {
    const [name, setName] = useState('');
    const [skill, setSkill] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const history = useHistory();
    const goToWarriorsList = () => { history.push(`/`) };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(nextFreeId)
        const warrior = { id: nextFreeId, name, skill, description, image }
        createWarrior(warrior);
        alert('Warrior created!'); //Future improvement: pop-up window instead of 'alert'
        goToWarriorsList();
    }

    return (
        <div className={classes.container}>
            <BackToPreviousPageButton />
            <h1 className={classes.title}>Warrior Creator</h1>

            <form onSubmit={handleSubmit} className={classes.form}>
                <label className={classes.label}>
                    <span className={classes.span}>  Name:</span>
                    <input className={classes.input}
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <button className={classes.button} type='button' onClick={() => setName(createRandomName())}>Random <i className="fas fa-paw"></i></button>
                </label>

                <label className={classes.label}>
                    <span className={classes.span}> Skill:</span>
                    <input className={classes.input}
                        type='text'
                        value={skill}
                        onChange={e => setSkill(e.target.value)}
                    />
                    <button className={classes.button} type='button' onClick={() => setSkill(createRandomSkill())} >Random <i className="fas fa-paw"></i></button>
                </label>

                <label className={classes.label}>
                    <span className={classes.span}>Image URL:</span>
                    <input className={classes.input}
                        type='text'
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />
                </label>

                <label className={classes.label}>
                    <span className={classes.span}> Description:</span>
                    <textarea className={classes.input}
                        type='text'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </label>

                <div className={classes.buttons}>
                    <button type='submit' className={classes.create}>Create <i className="fas fa-paw"></i></button >
                    <button type='button' className={classes.cancel} onClick={goToWarriorsList} >Cancel <i className="fas fa-times"></i> </button>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        createWarrior: (warrior) => dispatch(createWarrior(warrior)),
    }
}

const mapStateToProps = (state) => ({
    nextFreeId: getNextFreeID(state),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(WarriorCreator));
