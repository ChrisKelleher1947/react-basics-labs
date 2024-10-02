import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Scrub the plates"/>
      <Task title="Laundry" deadline="Tomorrow" description="Fold and hang up"/>
      <Task title="Tidy" deadline="Today" description="Sweep and hoover" />
    </div>
  );
}

export default App;