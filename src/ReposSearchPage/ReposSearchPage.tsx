import React from "react";

import Button from "../components/Button";
import Input from "../components/Input";
import RepoTile from "../components/RepoTile";
import SearchIcon from "../components/SearchIcon";

import "./ReposSearchPage.css";

const ReposSearchPage = () => {

    const [currentInputText, setInputText] = React.useState('jopa');

    const handleInputChange = (e: { target: { value: any; }; }) => {
        setValue(e.target.value)
    };

    return (<div className="repo-list">
        <div className="search-element">
            <Input placeholder="find the organization name" onChange={handleInputChange}></Input>
            <div> {currentInputText}</div>
            <Button onClick={() => { }} children={<SearchIcon />} />
        </div>
        <RepoTile item={"fwef"} onClick={() => { }} />
        <RepoTile item={"fwef"} onClick={() => { }} />
        <RepoTile item={"fwef"} onClick={() => { }} />
    </div>);
};

export default ReposSearchPage;

function useState(arg0: string): [any, any] {
    throw new Error("Function not implemented.");
}


function setValue(value: any) {
    throw new Error("Function not implemented.");
}
