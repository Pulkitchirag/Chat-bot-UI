// ✅ File: src/App.jsx
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div id="app-container">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;