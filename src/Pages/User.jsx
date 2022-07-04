import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { useEffect, useContext } from 'react'
import GithubContext from '../context/github/GithubContext'
import { Link } from 'react-router-dom'
import Spinner from '../Components/Layout/Spinner'
import { useParams } from 'react-router-dom'
import RepoList from '../Components/Repo/RepoList'
import { getUserAndRepos } from '../context/github/GithubActions'

function User() {
    const { user, repos, dispatch } = useContext(GithubContext)
    const params = useParams()

    useEffect(() => {
        dispatch({ type: 'SET_LOADING' })
        const getUserdata = async () => {
            const userData = await getUserAndRepos(params.login)
            dispatch({ type: 'GET_USER_AND_REPOS', payload: userData })
        }
        getUserdata()
    }, [dispatch, params.login])

    if (Spinner) {
        <Spinner />
    }

    const {
        name,
        type,
        avatar_url,
        bio,
        login,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user
    return (
        <>
            <div className='mb-4'>
                <Link to="/"><div><strong>BACK TO SEARCH</strong></div></Link>
            </div>
            <div className="relative flex rounded-xl">
                <div className="mask mask-squircle">
                    <img src={avatar_url} className="w-52" alt="avatar" />
                </div>
                <div className='ml-8 '>
                    <p className='text-2xl font-bold'>{name}</p>
                    <p className='text-xl'>{login}</p>
                    <p className='pt-4'>{bio}</p>
                    <div className='mt-4'>
                        <div class="badge badge-primary badge-outline mr-2">{type}</div>
                        {hireable && <div class="badge badge-secondary badge-outline">{hireable}</div>}
                        <div class="badge badge-accent badge-outline">accent</div>
                    </div>
                </div>

            </div>


            <div className="stats shadow w-full shadow-black mt-4">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className='inline-block w-8 h-8 stroke-current' />
                    </div>
                    <div className="stat-title">Followes</div>
                    <div className="stat-value">{followers}</div>
                    <div className="stat-desc">↘︎ User</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUserFriends className='inline-block w-8 h-8 stroke-current' />
                    </div>
                    <div className="stat-title">Following</div>
                    <div className="stat-value">{following}</div>
                    <div className="stat-desc">↘︎ User</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaCodepen className='inline-block w-8 h-8 stroke-current' />
                    </div>
                    <div className="stat-title">Public Repos</div>
                    <div className="stat-value">{public_repos}</div>
                    <div className="stat-desc">↘︎ Repos</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaStore className='inline-block w-8 h-8 stroke-current' />
                    </div>
                    <div className="stat-title">Public Gists</div>
                    <div className="stat-value">{public_gists}</div>
                    <div className="stat-desc">↘︎ Gists</div>
                </div>
            </div>

            <div>
                <RepoList repos={repos} />
            </div>
        </>
    )
}

export default User