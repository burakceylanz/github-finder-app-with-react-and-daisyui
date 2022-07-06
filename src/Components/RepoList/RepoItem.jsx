import PropTypes from 'prop-types'
import { FaEye, FaStar, FaInfo, FaUtensils, FaLink } from 'react-icons/fa'

function RepoItem({ repo }) {

    const {
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo

    return (
        <div className='card  bg-base-100 shadow-xl p-5 mb-4'>
            <FaLink/>
            <strong>{repo.name}</strong>
            <div className='flex gap-4 mt-2'>
                <div class="badge gap-2"><FaEye />{watchers_count}</div>
                <div class="badge badge-primary gap-2"><FaStar/>{stargazers_count}</div>
                <div class="badge badge-secondary gap-2"><FaInfo/>{open_issues}</div>
                <div class="badge badge-accent gap-2"><FaUtensils/>{forks}</div>
            </div>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object,
}

export default RepoItem