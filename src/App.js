import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './styles/App.scss';
import './styles/Header.scss';
import './styles/home.scss';
import './styles/footer.scss';
import './styles/contact.scss';
import './styles/mediaquery.scss';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
