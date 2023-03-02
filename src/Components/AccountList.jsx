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
                            <div className="info">
                                <p>
                                    Owner: {acc.name} {acc.lastName}
                                </p>
                                <p>Balance: Є {acc.sum.toLocaleString('lt')}</p>
                                <button
                                    className="delete"
                                    onClick={() => deleteHandler(acc.id)}>
                                    Delete Acc
                                </button>
                            </div>
                            <div className="transfers">
                                <input
                                    type="number"
                                    id={acc.id}
                                    onChange={sumHandler}
                                    value={acc.value}
                                />
                                <button
                                    className="deposit"
                                    onClick={() => depositHandler(acc.id)}>
                                    Deposit
                                </button>
                                <button
                                    className="withdraw"
                                    onClick={() => withdrawtHandler(acc.id)}>
                                    Withdraw
                                </button>
                            </div>
                        </div>
                    ))}
            </section>
        </>
    );
};

export default AccountList;
