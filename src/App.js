import './App.css';
import 'materialize-css'
import Routing from './routes';
import {BrowserRouter} from 'react-router-dom'
import AuthContext from './context/authContext';
import { useAuth } from './Hooks/auth.hooks';
import Navigation from './components/Navigation';
import Loader from './components/Loader';

function App() {
  const {login, logOut, token, userId, ready} = useAuth()

  const isAuth = !!token

  if(!ready){
    return <Loader />
  }

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
