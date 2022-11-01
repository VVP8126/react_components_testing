import { useParams } from "react-router-dom";

const UserDetailedPage = () => {
    
    let {id} = useParams();

    return (<div data-testid="userPageBlock">PASSED: {id}</div>);
}
export default UserDetailedPage;
