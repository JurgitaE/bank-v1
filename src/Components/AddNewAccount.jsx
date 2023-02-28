import { useState } from 'react';

const AddNewAcccount = ({ accountListGenerator }) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    const addNameHandler = e => {
        setName(e.target.value);
    };

    const addLastNameHandler = e => {
        setLastName(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();
        accountListGenerator(name, lastName);
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                onChange={addNameHandler}
            />
            <label htmlFor="lastname">Last Name</label>
            <input
                type="text"
                id="lastname"
            />
            <button
                type="submit"
                onChange={addLastNameHandler}>
                Add Account
            </button>
        </form>
    );
};

export default AddNewAcccount;
