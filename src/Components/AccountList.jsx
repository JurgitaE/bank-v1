import { useState } from 'react';

const AccountList = ({ accounts, setAccount }) => {
    const [filter, setFilter] = useState('all');

    const deleteHandler = id => {
        setAccount(prev => prev.filter(acc => acc.id !== id));
    };

    const sumHandler = e => {
        let updatedBalance = accounts.map(acc => (acc.id === +e.target.id ? { ...acc, value: e.target.value } : acc));
        setAccount(updatedBalance);
    };

    const depositHandler = id => {
        let updatedBalance = accounts.map(acc =>
            acc.id === id
                ? {
                      ...acc,
                      sum: acc.sum + +acc.value,
                      value: '',
                  }
                : acc
        );
        setAccount(updatedBalance);
    };

    const withdrawtHandler = id => {
        let updatedBalance = accounts.map(acc =>
            acc.id === id
                ? {
                      ...acc,
                      sum: acc.sum - +acc.value,
                      value: '',
                  }
                : acc
        );
        setAccount(updatedBalance);
    };

    const filterHandler = e => {
        setFilter(e.target.value);
    };
    return (
        <>
            <section>
                <label htmlFor="filter">Filter Accounts:</label>
                <select
                    name="filter"
                    id="filter"
                    onChange={filterHandler}>
                    <option value="all">All accounts</option>
                    <option value="positive">Positive Balance Accounts</option>
                    <option value="empty">0 balance accounts</option>
                </select>
            </section>
            <section className="accounts">
                {[...accounts]
                    .sort((a, b) => a.lastName.localeCompare(b.lastName))
                    .filter(acc => (filter === 'empty' ? acc.sum === 0 : filter === 'positive' ? acc.sum > 0 : true))
                    .map(acc => (
                        <div key={acc.id}>
                            <p>{acc.name}</p>
                            <p>{acc.lastName}</p>
                            <p>{acc.sum.toLocaleString(navigator.languages)}</p>
                            <button
                                className="delete"
                                onClick={() => deleteHandler(acc.id)}>
                                Delete Acc
                            </button>
                            <input
                                type="number"
                                id={acc.id}
                                onChange={sumHandler}
                                value={acc.value}
                            />
                            <button onClick={() => depositHandler(acc.id)}>Deposit</button>
                            <button onClick={() => withdrawtHandler(acc.id)}>Withdraw</button>
                        </div>
                    ))}
            </section>
        </>
    );
};

export default AccountList;
