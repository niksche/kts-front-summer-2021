

import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Input from "../components/Input";
import RepoTile from "../components/RepoTile";
import SearchIcon from "../components/SearchIcon";
import StarIcon from "../components/StarIcon";
import ReposSearchPage from "../ReposSearchPage";

import "./App.css";
const App = () => {
    // return (<div className="repo-list">
    //     <div className="search-element">
    //         <Input value={"yay"} placeholder={"fwefwe"} onChange={(e: InputEvent) => (e.data)} />
    //         <Button onClick={() => { }} children="fwfwe" />
    //         <RepoTile item={"f"} onClick={() => { }} />
    //     </div>
    // </div>);

    return (
        <ReposSearchPage></ReposSearchPage>
    );
};

export default App;