import { useState, useContext } from 'react'
import GithubContext from '../../../context/github/GithubContext'
import AlertContext from '../../../context/alert/AlertContext'
import { searchUsers } from '../../../context/github/GithubActions'

function UserSearch() {
    const [text, setText] = useState('')

    const { users, dispatch } = useContext(GithubContext)
    const { setAlert } = useContext(AlertContext)

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (text === "") {
            setAlert("Please, enter something.", "error")
        }
        else {
            dispatch({ type: 'SET_LOADING' })
            const users = await searchUsers(text)
            dispatch({ type: 'GET_USERS', payload: users })
            setText('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="input-group">
                    <input type="text"
                        placeholder="Search…"
                        className="w-full pr-40 bg-gray-200 input input-lg text-black"
                        value={text}
                        onChange={handleChange}
                    />
                    <button className="btn btn-square h-auto w-9" type='submit'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
                {
                    users?.length > 0 && (
                        <div className="clear mt-2"><button className='font-bold' onClick={()=>dispatch({type:'CLEAR_USERS', payload:users})}>CLEAR</button></div>
                    )
                }

                {
                    users?.length <= 0 && (
                        <div className="tooltip tooltip-open tooltip-primary mt-32" data-tip="This is">
                            <div className="btn btn-primary">EMPTY</div>
                        </div>
                    )
                }
            </div>
        </form>
    )
}

export default UserSearch