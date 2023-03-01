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
            <div>
                <label htmlFor="name">First Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={addNameHandler}
                />
            </div>
            <div>
                <label htmlFor="lastname">Last Name</label>
                <input
                    type="text"
                    id="lastname"
                    onChange={addLastNameHandler}
                />
            </div>
            <button
                className="add"
                type="submit">
                Create account
            </button>
        </form>
    );
};

export default AddNewAcccount;
