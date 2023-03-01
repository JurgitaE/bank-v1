const AccountSummary = ({ accountData }) => {
    return (
        <div>
            <p>Total accounts: {accountData.length}</p>
            <p>Total Balance: {accountData.reduce((t, c) => t + c.sum, 0)}</p>
        </div>
    );
};

export default AccountSummary;
