import './App.css';
import FaceBookCard from './components/Card';
import Header from './layout/Header';

function App() {
  return (
    <>
     <Header />
     <div className='card'>
     <FaceBookCard />
     </div>
    </>
  );
}

export default App;
