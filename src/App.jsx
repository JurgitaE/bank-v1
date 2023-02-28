import { useState } from 'react';
import './App.css';
import AccountList from './Components/AccountList';
import AddNewAcccount from './Components/AddNewAccount';

function App() {
    const [account, setAccount] = useState([]);

    const accountListGenerator = (name, lastName) => {
        setAccount(acc => [...acc, { name, lastName, id: Math.random(), sum: 0 }]);
        console.log(account);
    };

    return (
        <div className="App">
            <header className="App-header">
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
