

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import Topnav from './components/Topnav';

function App() {

  // show_spinner = true ;

  // useEffect[]
  // setTimeout == 



  return (
    <div className="App">
      <Header />
      <div className="container-fluid content-body">
        <div className="row">
            <Sidenav />
            <div className="container-fluid" id="content_bar">
    
          <Topnav />
 
        <div className="container-fluid main-content-view">
          <h1>This is sample for file system</h1>

        </div>
        </div>

      </div>
      </div>
      <Footer/>
    </div>

  );
}

export default App;
