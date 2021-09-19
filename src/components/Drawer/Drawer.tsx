import './Drawer.css';

import React from 'react';

import axios from 'axios';
import { formatWithCursor } from 'prettier';
import { stringify } from 'qs';
import { useParams } from 'react-router';
import { RepoInfo } from 'src/shared/store/ApiStore/types';

import GitHubStore from '../../store/GitHubStore';


export type RepoItem = {
    id: number;
    url: string;
    name: string;
    description: string;
    stargazers_count: number;

};


const Drawer: React.FC<any> = () => {

    const { name } = useParams<{ name: string }>();



    const gitHubStore = new GitHubStore();

    const EXAMPLE_ORGANIZATION = "ktsstudio";
    const EXAMPLE_REPO = { name };

    const [repo, setRepo] = React.useState({ id: 0, url: "", name: "", description: "", stargazers_count: 0 });



    React.useEffect(() => {
        const fetch = async (repoName: string) => {
            const repoInfo = await axios({
                method: 'get',
                url: `https://api.github.com/repos/ktsstudio/${repoName}`,
            })
            // eslint-disable-next-line no-console
            console.log("res: ", repoInfo.data)
            setRepo(repoInfo.data)
        };
        fetch(EXAMPLE_REPO.name)
    }, [])

    return <div>
        {repo.description}
    </div>
}

export default Drawer;
