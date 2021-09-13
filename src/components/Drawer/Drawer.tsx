import './Drawer.css';

import { useParams } from 'react-router';

const Drawer: React.FC<any> = () => {
    const { name } = useParams<{ name: string }>();
    return <div>
        Пользователи с {name}
    </div>
}

export default Drawer;
