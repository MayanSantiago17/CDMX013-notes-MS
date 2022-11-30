import { useAuth } from '../context/authContext';


export default function Welcome() {

    const authContext = useAuth()
    
    //const authContext = useContext(context); esto era importando context y authContext 
    console.log(authContext)

    return (
        <div>  Welcome 1-2-3 probando 1-2-3 </div>
    );
}