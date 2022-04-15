import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Shared/Banner/Banner';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {

  return (
    <>
      <Header/>
      <main style={{marginTop:'85px'}}>
        <Banner/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
