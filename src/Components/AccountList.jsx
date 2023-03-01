import { useState } from 'react';

const AccountList = ({ accounts, setAccount }) => {
    const deleteHandler = id => {
        setAccount(prev => prev.filter(acc => acc.id !== id));
    };

    const [balance, setBalance] = useState(0);

    const sumHandler = e => {
        setBalance(e.target.value);
    };
    const depositHandler = id => {
        const updatedMoney = accounts.map(acc =>
            acc.id === id && balance !== 0 ? { ...acc, sum: acc.sum + +balance } : acc
        );
        setAccount(updatedMoney);
    };

    return (
        <>
            {[...accounts]
                .sort((a, b) => a.lastName.localeCompare(b.lastName))
                .map(acc => (
                    <div key={acc.id}>
                        <p>{acc.name}</p>
                        <p>{acc.lastName}</p>
                        <p>{acc.sum}</p>
                        <button onClick={() => deleteHandler(acc.id)}>Delete Acc</button>
                        <input
                            type="number"
                            onChange={sumHandler}
                        />
                        <button onClick={() => depositHandler(acc.id)}>Deposit</button>
                        <button>Withdraw</button>
                    </div>
                ))}
        </>
    );
};

export default AccountList;
