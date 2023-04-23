function Table({ data }) {

    const renderedData = data.map((row) => {
        return (
            <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.color}</td>
                <td>{row.score}</td>
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Fruit</th>
                    <th>Color</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {renderedData}
            </tbody>
        </table>
    );
};

export default Table;