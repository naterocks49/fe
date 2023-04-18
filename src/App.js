import Accordion from "./components/Accordion";

function App() {
    const items = [
        {
            id: '1',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project.'
        },
        {
            id: '2',
            label: 'Can I use JS on a project?',
            content: 'You can use JS on any project.'
        },
        {
            id: '3',
            label: 'Can I use Python on a project?',
            content: 'You can use Python on any project.'
        },
    ]

    return <Accordion items={items} />
};

export default App