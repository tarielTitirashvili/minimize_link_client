import './App.css';
import 'materialize-css'
import Routing from './routes';
import {BrowserRouter} from 'react-router-dom'
import AuthContext from './context/authContext';
import { useAuth } from './Hooks/auth.hooks';
import Navigation from './components/Navigation';

function App() {
  const {login, logOut, token, userId} = useAuth()
  const isAuth = !!token

  return (
    <AuthContext.Provider value={{
      login, logOut, token, userId, isAuth
    }} >
      <BrowserRouter>
        {isAuth? <Navigation/>: ''}
        <Routing isAuth={isAuth}/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
