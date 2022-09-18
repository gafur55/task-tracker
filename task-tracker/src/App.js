import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: "task 1", 
        day: 'Feb 5th at 1:30 pm',
        reminder: true,
    },
    {
        id: 2, 
        text: "task 2", 
        day: 'Feb 6th at 1:30 pm',
        reminder: true,
    },
    {
        id: 3, 
        text: "task 3", 
        day: 'Feb 7th at 1:30 pm',
        reminder: false,
    },
])
  return (
    <div>
      <Header /> 
      <Tasks tasks={tasks}/>
    </div>
  );
}
 
export default App;
