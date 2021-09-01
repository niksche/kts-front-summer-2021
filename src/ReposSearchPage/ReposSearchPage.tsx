import Button from "../components/Button";
import Input from "../components/Input";
import RepoTile from "../components/RepoTile";

import "./ReposSearchPage.css";

const ReposSearchPage = () => {
    return (<div className="repo-list">
        <div className="search-element">
            <Input value="wazzaaap" placeholder="find the organization name" onChange={() => { }} />
            <Button onClick={() => { }} children={"fw"} />
        </div>
        <RepoTile item={"fwef"} onClick={() => { }} />
        <RepoTile item={"fwef"} onClick={() => { }} />
        <RepoTile item={"fwef"} onClick={() => { }} />
    </div>);
};

export default ReposSearchPage;