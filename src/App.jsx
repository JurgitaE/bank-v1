import { useEffect, useState } from 'react';
import './App.css';
import AccountList from './Components/AccountList';
import AccountSummary from './Components/AccountSummary';
import AddNewAcccount from './Components/AddNewAccount';

function App() {
    const [account, setAccount] = useState(JSON.parse(localStorage.getItem('accounts')) || []);

    const accountListGenerator = (name, lastName) => {
        setAccount(prev => [...prev, { name, lastName, id: Math.random(), sum: 0, value: '' }]);
    };

    useEffect(() => localStorage.setItem('accounts', JSON.stringify(account)), [account]);

    return (
        <div className="App">
            <header className="App-header">
                <AccountSummary accounts={account} />
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
