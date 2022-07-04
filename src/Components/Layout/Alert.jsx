import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {
    const { alert } = useContext(AlertContext)
    return alert !== null && (

        <div class="alert alert-error shadow-lg absolute left-0 bottom-0 md:w-4/12 ">
            <div>
              <strong>{alert.type}</strong> : {alert.msg}
            </div>
        </div>
    )
}

export default Alert