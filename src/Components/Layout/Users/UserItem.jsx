import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function UserItem({ user: { login, avatar_url } }) {
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={avatar_url} alt="profile avatar" />
                    </div>
                </div>
                <h2 className="card-title">{login}</h2>
               <Link className='text-base-content text-opacity-40' to={`/user/${login}`} > Visit Profile</Link>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem