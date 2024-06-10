
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Inicio } from './Pages/Home';
import { Servicos } from './Pages/Servicos';
import { Portfolio } from './Pages/Portfolio';
import { Precos } from './Pages/Precos';
import { Contato } from './Pages/Contato';



function App() {
  
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />}  />
        <Route path="/servicos" element={<Servicos />}  />
        <Route path="/portfolio" element={<Portfolio />}  />
        <Route path="/precos" element={<Precos />}  />
        <Route path="/contato" element={<Contato />}  />
      </Routes>
    </Router>
  )
}

export default App;
