import './App.css';
import FaceBookCard from './components/Card';
import Header from './layout/Header';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
function App() {
  return (
    <ErrorBoundary>
      <Header />
      <FaceBookCard />
    </ErrorBoundary>
  );
}

export default App;
