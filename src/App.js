import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
import Button from "./Button"

function App() {
    return <div>
        <div>
            <Button success rounded outline>
                <GoBell />
                Click me!
            </Button>
        </div>
        <div>
            <Button danger outline>
                <GoCloudDownload />
                Buy now!
            </Button>
        </div>
        <div>
            <Button warning rounded>
                <GoDatabase />
                See deal!
            </Button>
        </div>
        <div>
            <Button secondary outline>Hide ads</Button>
        </div>
    </div>
};

export default App