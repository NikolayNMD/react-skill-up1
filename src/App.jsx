import Task from './components/Task'
import './App.css'


function App() {
  return (
    <div className="flex flex-row space-x-4">
      <Task title="Main task" description="Піти в зал" isCompleted={true} />
      <Task title="Demo task" description="Поїсти вареники" isCompleted={false} />
      <Task title="Demo task" description="Попрати речі" isCompleted={false} />
    </div>
  )
}

export default App
