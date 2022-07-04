import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
    return (
        <div class="card flex justify-center">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-6xl">OOPS!</h2>
                <p className='text-xl'>404 not found.</p>
                <div class="card-actions justify-end">
                  <Link to="/">
                    <button class="btn btn-primary"><FaHome/> BACK TO HOME</button>
                  </Link>    
                </div>
            </div>
        </div>
    )
}

export default NotFound