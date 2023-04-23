function Table({ data, config }) {
    const renderedHeaders = config.map((column) => {
        return <th key={column.kay}>{column.label}</th>
    });

    const renderedRows = data.map((fruit) => {
        const renderedCells = config.map((column) => {
            return <td key={column.label}>{column.render(fruit)}</td>
        });

        return (
            <tr key={fruit.name} className="border-b">
                {renderedCells}
            </tr>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
};

export default Table;