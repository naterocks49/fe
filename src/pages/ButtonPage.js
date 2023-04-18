import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
import Button from "../components/Button"

function ButtonPage() {
    const handleClick = () => {
        console.log('Click!');
    };

    return <div>
        <div>
            <Button success rounded outline onClick={handleClick}>
                <GoBell />
                Click me!
            </Button>
        </div>
        <div>
            <Button danger outline onMouseEnter={handleClick}>
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

export default ButtonPage