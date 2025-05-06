
import './App.css'

import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Body from './Components/Body'
import Login from './Components/Login'
import Profile from './Components/Profile'
import { Provider } from 'react-redux';
import  appStore  from './utils/appStore'
import Feed from './Components/Feed'
function App() {
  return (
    <>
 
    <Provider store={appStore}>
    <BrowserRouter basename="/">
<Routes>

    <Route path="/" element={<Body/>}>
    <Route path="/Feed" element={<Feed/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/profile" element={<Profile/>}/>

    
    </Route>
 
</Routes>
    
    </BrowserRouter>
    
</Provider>
  
    </>
  );
  

  
}

export default App;
