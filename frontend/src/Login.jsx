import { NavLink } from 'react-router-dom'
export default function Login(){
    return(
        <>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" id="password" />
                </div>
                <NavLink to="/">Don't have an account? Register here</NavLink>
                <button type='submit'>Sign In</button>
            </form>
        </>
    )
}