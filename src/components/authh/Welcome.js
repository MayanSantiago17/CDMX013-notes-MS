import { useAuth } from '../context/authContext';


export default function Welcome() {

    // const authContext = useAuth()
    const {user} = useAuth();
    
    //const authContext = useContext(context); esto era importando context y authContext 
   // console.log(authContext)

    return (
        <div> 
            <h1>Welcome {user.email}</h1>
        </div>
    );
}