import "./Avatar.css";

type AvatarProps = {
    alt: string,
    letter: symbol,
    imageSrc: string
};

const Avatar: React.FC<AvatarProps> = ({ alt, letter, imageSrc }) => {
    return (<img className="git-repo-tile_pic" alt={alt} src={imageSrc}></img>);
};

export default Avatar;