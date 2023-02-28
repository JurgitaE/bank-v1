const AccountList = ({ accounts, setAccount }) => {
    const deleteHandler = id => {
        setAccount(prev => prev.filter(acc => acc.id !== id));
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
                        <input type="number" />
                        <button>Deposit</button>
                        <button>Withdraw</button>
                    </div>
                ))}
        </>
    );
};

export default AccountList;
