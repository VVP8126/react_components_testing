import axios from "axios";

export class UserService {
    static async loadUsers() {
        try {
            const result = await axios.get("https://jsonplaceholder.typicode.com/users");
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}
