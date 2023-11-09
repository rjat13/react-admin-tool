import { Link } from "react-router-dom"


const Users = () => {
  return (<>
    <div>Users</div>
    <button><Link to={'add-user'}>Add User</Link></button>
    </>)
}

export default Users