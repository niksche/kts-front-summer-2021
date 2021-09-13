import Drawer from '@components/Drawer';
import { useRouteMatch, BrowserRouter, Route, Redirect, Switch, matchPath, useParams } from 'react-router-dom';

import ReposSearchPage from "../ReposSearchPage";
import "./App.css";



const App = () => {

    // const { id } = useParams();
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/repos" component={ReposSearchPage} />
                <Route exact path="/repos/:name" component={Drawer} />

                <Route>
                    <Redirect to="/repos"></Redirect>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;