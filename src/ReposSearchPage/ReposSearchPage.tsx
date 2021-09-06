import React from "react";

import { RepoItem } from "src/shared/store/ApiStore/types";

import Button from "../components/Button";
import Input from "../components/Input";
import RepoTile from "../components/RepoTile";
import SearchIcon from "../components/SearchIcon";
import GitHubStore from "../store/GitHubStore";



import "./ReposSearchPage.css";

const ReposSearchPage = () => {



    const gitHubStore = new GitHubStore();

    const EXAMPLE_ORGANIZATION = "ktsstudio";

    const dataRep = gitHubStore
        .getOrganizationReposList({
            organizationName: EXAMPLE_ORGANIZATION,
        })
        .then((result) => {
            if (result.success) {
                { /* eslint-disable-next-line no-console */ }
                return result.data;
            }
            const infD = result
        });

    const [repo, setRepo] = React.useState([{ id: 0, url: "", name: "" }, { id: 0, url: "", name: "" }]);
    React.useEffect(() => {
        const fetchRepos = async () => {
            let response = await dataRep;
            if (response) {
                const al: RepoItem[] = response;
                setRepo(al);
            }
        };
        fetchRepos();
    }, []);


    return (<div className="repo-list">
        <div className="search-element">
            <Input placeholder="find the organization name" onChange={() => { }}></Input>
            <div> { }</div>
            <Button onClick={() => { }} children={<SearchIcon />} isDisabled={true} />
        </div>
        {repo.map((el) => {
            return <RepoTile item={el} onClick={() => { }} />
        })}

    </div>);
};

export default ReposSearchPage;