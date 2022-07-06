import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
    return (
        <div className="card flex justify-center">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-6xl">OOPS!</h2>
                <p className='text-xl'>404 not found.</p>
                <div className="card-actions justify-end">
                  <Link to="/">
                    <button className="btn btn-primary"><FaHome/> BACK TO HOME</button>
                  </Link>    
                </div>
            </div>
        </div>
    )
}

export default NotFound