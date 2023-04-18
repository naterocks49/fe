import Button from "./Button"

function App() {
    return <div>
        <div>
            <Button success rounded outline>a</Button>
        </div>
        <div>
            <Button danger outline>b</Button>
        </div>
        <div>
            <Button warning rounded>c</Button>
        </div>
        <div>
            <Button secondary outline>d</Button>
        </div>
    </div>
};

export default App