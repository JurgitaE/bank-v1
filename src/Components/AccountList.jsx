import { useState } from 'react';
import AccountsFilter from './AccountsFilter';

const AccountList = ({ accounts, setAccount }) => {

    const [filtered, setFiltered] = useState('all');
    const [modal, setModal] = useState({ class: 'hidden', msg: '', color: '' });

    const deleteHandler = id => {

        if (accounts.filter(acc => acc.id === id)[0].sum > 0) {
            setModal({
                class: 'visible',
                msg: 'Cannot delete account with balance above 0.',
                color: 'hsl(350, 75%, 60%)',
            });
            setTimeout(() => {
                setModal({ class: 'hidden', msg: '', color: '' });
            }, 2000);
        } else {
            setModal({ class: 'visible', msg: 'Successfully deleted.', color: 'hsl(181, 82%, 37%)' });
            setTimeout(() => {
                setModal({ class: 'hidden', msg: '', color: '' });
            }, 2000);
            setAccount(prev => prev.filter(acc => acc.id !== id));
        }
    };

    // Dealing with money transfers

    const inputHandler = e => {
        if (+e.target.value >= 0 || !e.target.value) {
            let updatedBalance = accounts.map(acc =>
                acc.id === +e.target.id ? { ...acc, value: e.target.value } : acc
            );
            setAccount(updatedBalance);
        }
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
        if (+accounts.filter(acc => acc.id === id)[0].value > accounts.filter(acc => acc.id === id)[0].sum) {
            setModal({
                class: 'visible',
                msg: 'Cannot withdraw more than remaining balance!',
                color: 'hsl(350, 75%, 60%)',
            });
            setTimeout(() => {
                setModal({ class: 'hidden', msg: '', color: '' });
            }, 2000);
        } else {
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
        }
    };

    const filterHandler = e => {
        setFiltered(e.target.value);
    };

    const filteredAccounts = accounts.filter(acc =>
        filtered === 'empty' ? acc.sum === 0 : filtered === 'positive' ? acc.sum > 0 : true
    );

    return (
        <div className="accounts-container">
            <AccountsFilter filterHandler={filterHandler} />
            {/* ----------------modal---------------------------- */}
            <div className={`${modal.class} modal`}>
                <p style={{ backgroundColor: modal.color }}>{modal.msg} </p>
            </div>

            <section className="accounts">
                {filteredAccounts.length === 0 ? <p className='none'>No items to show.</p> : [...filteredAccounts]
                    .sort((a, b) => a.lastName.localeCompare(b.lastName))
                    .map(acc => (
                        <div className='accounts-item' key={acc.id}>
                            <div className="info">
                                <p>
                                    Owner: {acc.name} {acc.lastName}
                                </p>
                                <p>Balance: Є {(+acc.sum.toFixed(2)).toLocaleString('lt')}</p>
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
                                    onChange={inputHandler}
                                    value={acc.value}
                                />
                                <div>
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
                        </div>
                    ))}
            </section>

        </div>
    );
};

export default AccountList;
