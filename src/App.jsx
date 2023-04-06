import './App.css'
import HomePage from './components/HomePage'
import { supabase } from './client';

function App() {

  return (
    <div className="App">
      <HomePage />
    </div>
  )
}

export default App