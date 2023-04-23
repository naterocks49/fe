function Table({ data, config }) {
    const renderedHeaders = config.map((column) => {
        return <th key={column.kay}>{column.label}</th>
    });

    const renderedData = data.map((row) => {
        return (
            <tr key={row.name} className="border-b">
                <td className="p-3">{row.name}</td>
                <td className="p-3">
                    <div className={`p-3 m-2 ${row.color}`}></div>
                </td>
                <td className="p-3">{row.score}</td>
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
                {renderedData}
            </tbody>
        </table>
    );
};

export default Table;