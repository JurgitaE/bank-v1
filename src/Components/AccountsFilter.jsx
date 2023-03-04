function AccountsFilter({ filterHandler }) {
    return (
        <section className="filter">
            <label htmlFor="filter">Filter Accounts:</label>
            <select
                id="filter"
                onChange={filterHandler}>
                <option value="all">All accounts</option>
                <option value="positive">Positive Balance Accounts</option>
                <option value="empty">0 balance accounts</option>
            </select>
        </section>
    );
}

export default AccountsFilter;
