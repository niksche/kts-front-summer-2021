import { RepoItem } from "src/shared/store/ApiStore/types";

import StarIcon from "../StarIcon";

import "./RepoTile.css";

type RepoTileProps = {
    item: RepoItem,
    onClick: () => void
}

const RepoTile: React.FC<RepoTileProps> = ({ item, onClick }) => {
    return <div className="git-repo-tile">
        <div className="git-repo-tile_pic">K</div>
        <div className="git-repo-tile_inner">
            <div className="git-repo-tile_inner_name">{item}</div>
            <a className="git-repo-tile__org-link"> {item}</a>
            <br />
            <div className="git-repo-tile__footer">
                <div className="git-repo-tile_stars">
                    <StarIcon />
                    {/* <img className="git-repo-tile_inner_img" src="../img/icons8-star-24.png" alt="star" /> */}
                    <div className="git-repo-tile_inner-star">123</div>
                </div>
                <div className="git-repo-tile_inner-star">Updated 21 July</div>
            </div>
        </div>
    </div>
}


export default RepoTile;