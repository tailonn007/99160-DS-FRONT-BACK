import { Route, Routes } from 'react-router-dom';
import './app.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import SobreNos from './pages/SobreNos'; /* Importado sem chaves conforme arrumamos na página */
import { FaleConosco } from './pages/FaleConosco';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;