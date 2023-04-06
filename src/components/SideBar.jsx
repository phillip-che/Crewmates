import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className="sidebar">
            <Link className="link" to="/">
                <div className="sidebar-item">Home</div>
            </Link>

            <Link className="link" to="/create">
            <div className="sidebar-item">Create Crewmate</div>
            </Link>

            <Link className="link" to="/gallery">
            <div className="sidebar-item">Crewmate Gallery</div>
            </Link>
        </div>
    )
}

export default SideBar