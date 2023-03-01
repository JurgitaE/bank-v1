const AccountList = ({ accounts, setAccount }) => {
    const deleteHandler = id => {
        setAccount(prev => prev.filter(acc => acc.id !== id));
    };

    /* 
     const [money, setMoney] = useState({ money: 0, id: null });

    const sumHandler = e => {
        setMoney({ money: e.target.value, id: e.target.id });
    };

    const depositHandler = id => {
        let updatedMoney = accounts;
        if (+money.id === id) {
            updatedMoney = accounts.map(acc => (acc.id === id ? { ...acc, sum: acc.sum + +money.money } : acc));
            setAccount(updatedMoney);
        }
    }; */

    // const [balance, setBalance] = useState({ money: 0, id: null });

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
                            id={acc.id}
                            onChange={sumHandler}
                            value={acc.value}
                        />
                        <button onClick={() => depositHandler(acc.id)}>Deposit</button>
                        <button onClick={() => withdrawtHandler(acc.id)}>Withdraw</button>
                    </div>
                ))}
        </>
    );
};

export default AccountList;
