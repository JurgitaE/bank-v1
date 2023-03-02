const AccountSummary = ({ accountData }) => {
    return (
        <div className="summary">
            <h2>Account Summary</h2>
            <div>
                <p>Total accounts: {accountData.length}</p>
                <p>Total Balance: {accountData.reduce((t, c) => t + c.sum, 0).toLocaleString('lt')}</p>
            </div>
        </div>
    );
};

export default AccountSummary;
