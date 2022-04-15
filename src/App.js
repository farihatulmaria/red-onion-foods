import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Shared/Banner/Banner';
import Header from './Shared/Header/Header';

function App() {

  return (
    <>
      <Header/>
      <main style={{marginTop:'85px'}}>
        <Banner/>
      </main>
    </>
  );
}

export default App;
