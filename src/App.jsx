import { useEffect, useState } from 'react';
import './App.css';
import AccountList from './Components/AccountList';
import AccountSummary from './Components/AccountSymmary';
import AddNewAcccount from './Components/AddNewAccount';

function App() {
    const [account, setAccount] = useState(JSON.parse(localStorage.getItem('accounts')) || []);

    const accountListGenerator = (name, lastName) => {
        setAccount(acc => [...acc, { name, lastName, id: Math.random(), sum: 0, value: '' }]);
        console.log(account);
    };

    useEffect(() => localStorage.setItem('accounts', JSON.stringify(account)), [account]);

    return (
        <div className="App">
            <header className="App-header">
                <AccountSummary accountData={account} />
                <AddNewAcccount accountListGenerator={accountListGenerator} />
                <AccountList
                    accounts={account}
                    setAccount={setAccount}
                />
            </header>
        </div>
    );
}

export default App;
