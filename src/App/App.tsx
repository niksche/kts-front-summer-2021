import Button from '@components/Button';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ReposSearchPage from "../ReposSearchPage";
import "./App.css";
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/repos" component={ReposSearchPage} />
                <Route>
                    <Redirect to="/repos" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;