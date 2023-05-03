import {useNavigate} from "react-router-dom"
export default function Menu() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
    }
    return (
        <div> 
            <h1> Menu</h1>
            <button onClick = {handleClick}>
            Logout
            </button>
        </div>
    )
}