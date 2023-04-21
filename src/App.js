import Route from "./components/Route";
import AccordionPage from './pages/AccordionPage';
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/SideBar";
import ButttonPage from "./pages/ButtonPage";

function App() {
    return (
        <div>
            <Sidebar />
            <div>
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path='/'>
                    <DropdownPage />
                </Route>
                <Route path="/buttons">
                    <ButttonPage />
                </Route>
            </div>
        </div>
    );
};

export default App;