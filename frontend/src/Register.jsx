export default function Register(){
    return(
        <>
            <form action="http://localhost:3000/createUser" method="post">
                <div>
                    <label>Create Username</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label> Create Password</label>
                    <input type="password" name="password" />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}