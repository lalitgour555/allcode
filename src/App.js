
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Login';
import Signup from './parts/Signup';
import Forgetpass from './parts/Forgetpass';
import Daynamiccomponent from './Daynamiccomponent';
import Home from './Home';
import Object11 from './Object11';
import Ueseeffect from './Ueseeffect';
import T1 from './T1';
import Windowwidthkivalue from './Windowwidthkivalue';
import Free from './parts/free';
import Shome from './parts/Spotify/Shome';
import Snameobj from './parts/Snameobj';
import Snamearray from './Snamearray';
import Livecamera11 from './parts/Livecamera.jsx/Livecamera11';
import Arraytoobectwithaddtion from './parts/Arraytoobectwithaddtion';
import Incomeandexpensive from './parts/Incomeandexpensive';
import Bujet from './parts/Budegt/Bujet';
import Quizapp from './parts/quiz/Quizapp';
function App() {
 
  return (
    <>

       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budget" element={<Bujet />} />
          <Route path="/quizapp" element={<Quizapp />} />
           <Route path="/incomeandexpensive" element={< Incomeandexpensive/>} />
          <Route path="/livecamera" element={<Livecamera11 />} />
          <Route path="/spotify" element={<Shome />} />
          <Route path="/t1" element={<T1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<Forgetpass />} />
          <Route path="heroes/:id" element={<Daynamiccomponent  />}/>
          <Route path="/obj" element={<Object11 />}/>
          <Route path="/useeffect" element={<Ueseeffect/>}/>
          <Route path="/windowwidth" element={<Windowwidthkivalue/>}/>
          <Route path="/free" element={<Free/>}/>
          <Route path="/samenameobj" element={<Snameobj/>}/>
          <Route path="/samenamearray" element={<Snamearray/>}/>
          <Route path="/arraytoobect" element={<Arraytoobectwithaddtion/>}/> 
       
         </Routes> 
       </Router>  
    </>
  );
}

export default App;
