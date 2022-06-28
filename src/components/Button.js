import { Link } from 'react-router-dom'


function Button({ id }) {

    return (
        <nav className="detail-btn">
            <Link to={`/details/user/${id}`}>MORE DETAILS</Link>
        </nav>
    )
}

export default Button