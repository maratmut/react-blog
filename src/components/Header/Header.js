import { NavLink } from 'react-router-dom'
import './Header.css'
import LogoutIcon from '@mui/icons-material/Logout';

export const Header = ({ isLoggedIn, setIsLoggedIn, userName }) => {

 const handleLogOut = () => {
   localStorage.setItem('isLoggedIn', false)
   setIsLoggedIn(false)
 }
    return (
        <header>
         
        
          {
            isLoggedIn ?
            <nav>
            Добро пожаловать <strong>{userName}</strong>
            <NavLink onClick={handleLogOut} to="/login"><LogoutIcon />Выход</NavLink>
            </nav>
            : 'Добро пожаловать незнакомец'
          }
          
          
        
      </header>
    )
}