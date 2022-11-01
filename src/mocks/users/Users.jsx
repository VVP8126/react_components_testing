import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { UserService } from "../../service/UserService";

const Users = () => {

    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        try { // UserService.loadUsers();
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { loadUsers() }, []);

    return (
        <div>
            { users.map(
                user => 
                <Link className="lnk" to={`/about/${user.id}`} key={user.id} data-testid="userLinkItem">{user.id}. {user.username}</Link>
            )}
        </div>
    );
}
export default Users;
