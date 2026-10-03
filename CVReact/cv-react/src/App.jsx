
import './App.css'

import Header from './components/Header';
import About from './components/About';
import Experiences from './components/Experiences';
import Education from './components/Education';

function App() {
  return(
    <div>
      <Header />
      <div className='bg-light'>
        <About />
      </div>
      
      <section className='container my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <Experiences />
          </div>

          <div className='col-md-6'>
            <Education />
          </div>
        </div>
      </section> 
    </div>
  );
}

export default App;
