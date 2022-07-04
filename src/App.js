import './Input.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './Components/Layout/Alert';
import User from './Pages/User';
import UserHeroSection from './Components/Layout/Users/UserHeroSection';

function App() {

  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col h-screen justify-between'>
            <Navbar />
            <UserHeroSection/>
            <main className='container mx-auto px-8 pb-12'>
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
