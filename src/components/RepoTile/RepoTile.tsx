import React from "react";

import { RepoItem } from "src/shared/store/ApiStore/types";


import Avatar from "../Avatar";
import StarIcon from "../StarIcon";

import "./RepoTile.css";



type RepoTileProps = {
    item: RepoItem,
    onClick: (e: React.MouseEvent) => void
}




const RepoTile: React.FC<RepoTileProps> = ({ item, onClick }) => {
    return <div className="git-repo-tile">
        <Avatar alt={"repositoryImage"} letter={Symbol('a')} imageSrc={""} />
        <div className="git-repo-tile_inner">
            <div className="git-repo-tile_inner_name">{item.name}</div>
            <a className="git-repo-tile__org-link"> {item.url}</a>
            <br />
            <div className="git-repo-tile__footer">
                <div className="git-repo-tile_stars">
                    <StarIcon />
                    <div className="git-repo-tile_inner-star">{item.id}</div>
                </div>
                <div className="git-repo-tile_inner-star">Updated 21 July</div>
            </div>
        </div>
    </div>
}


export default RepoTile;