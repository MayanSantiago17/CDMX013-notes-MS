import './Login.css'
import logo from '../images/notes-logo.png';


export default function Login () {

    return (
        <div className="grid">
            <header className='login-header'>
                <img src={logo} className='logo-login' alt='logo'/>
            </header>
            <section className='body-login'>
                <form >
                    <div className='inputs-login-div'>
                        <input className='userId, inputs-login'
                        placeholder='Enter email'
                        type='text'
                        name='email'
                        autoComplete="off">
                        </input>
                        <input className='password, inputs-login'
                        placeholder='Enter password'
                        type='password'
                        name='password'>
                        </input>
                    </div>
                    <button className='btn-login' type='submit' >Login</button>
                </form>
            </section>
        </div>
 );
}