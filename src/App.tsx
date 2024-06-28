import React from 'react'
import Tasklist from './components/Tasklist'
import CompletedTask from './components/CompletedTask'

const App: React.FC = () => {
  return (
    <>
      <div className="todo_app_section">

        <div className="todo_app_container">

          <div className="Tasklist">
            <h2>Task List</h2>
            <div>

              <Tasklist/>
            </div>
          </div>
          <div className="CompletedTask">
            <h2>Completed Task</h2>
            <div>
              <CompletedTask/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App