import { Router } from '@reach/router';
import Navbar from './nav/navbar';
import Summary from './main/summary';
import Footer from './footer/footer';
import './app.css';


function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "8rem", minHeight: '35rem' }}>
        <Router>
          <Summary path="/" />
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
