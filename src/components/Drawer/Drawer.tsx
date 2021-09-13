import './Drawer.css';

import React from 'react';

import { useParams } from 'react-router';
import { RepoInfo } from 'src/shared/store/ApiStore/types';

import GitHubStore from '../../store/GitHubStore';

const Drawer: React.FC<any> = () => {

    const { name } = useParams<{ name: string }>();



    const gitHubStore = new GitHubStore();

    const EXAMPLE_ORGANIZATION = "ktsstudio";
    const EXAMPLE_REPO = { name };



    const dataRep = gitHubStore
        .getOrganizationRepoByName({
            organizationName: EXAMPLE_ORGANIZATION,
            repoName: EXAMPLE_REPO.name,
        })
        .then((result) => {
            if (result.success) {
                return result.data
            }

        });

    const [repo, setRepo] = React.useState({ id: 0, url: "", name: "", description: "", stargazers_count: 0 });

    React.useEffect(() => {

        const fetchRepos = async () => {
            let response = await dataRep;
            if (response) {
                const al: RepoInfo = response;
                setRepo(al);
            }
        };
        fetchRepos();
    }, []);

    return <div>
        {repo.description}
    </div>
}

export default Drawer;
