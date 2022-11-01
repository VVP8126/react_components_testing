import Users from "../mocks/users/Users";

const About = () => {
    return (
        <div className="container" data-testid="about-page">
            <h1>USERS</h1>
            <h3>List:</h3>
            <Users />
        </div>
    );
}

export default About;
