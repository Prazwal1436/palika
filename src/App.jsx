

import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import Topnav from './components/Topnav';
import Login from './pages/Login';
import Bibaran from './subcomponents/Bibaran';
import Chalani from './subcomponents/Chalani';
import SettingFs from './subcomponents/SettingFs';

function App() {
  const role = useSelector((state)=>state.user.role)

  // show_spinner = true ;

  // useEffect[]
  // setTimeout == 



  return (
    <div className="App">
      {role!=="admin"?(<Login/>):(<> <Header />
      <div className="container-fluid content-body">
        <div className="row">
            <Sidenav />
            <div className="container-fluid" id="content_bar">
    
          <Topnav />
 
        <div className="container-fluid main-content-view">
          <Routes>
            <Route path="/" element={<></>}/>
            <Route path="/bibaran" element={<Bibaran/>}/>
            <Route path="/settingfile" element={<SettingFs/>}/>
            <Route path="/chalani" element={<Chalani/>}/>
          </Routes>

        </div>
        </div>

      </div>
      </div>
      <Footer/></>)}
     
    </div>

  );
}

export default App;
