import React, { useState } from "react";
import { initialColumns } from "./taskData";

const App = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [draggedTaskId, setDraggedTaskId] = useState(null);
  const [sourceColumnId, setSourceColumnId] = useState(null);

  const onDragStart = (event, columnId, taskId) => {
    setDraggedTaskId(taskId);
    setSourceColumnId(columnId);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event, destColumnId) => {
    if (!draggedTaskId || !sourceColumnId) return;

    const sourceColumn = columns[sourceColumnId];
    const destColumn = columns[destColumnId];

    const taskToMove = sourceColumn.tasks.find(
      (task) => task.id === draggedTaskId
    );
    const updatedSourceTasks = sourceColumn.tasks.filter(
      (task) => task.id !== draggedTaskId
    );

    const updatedDestTasks = [...destColumn.tasks, taskToMove];

    setColumns({
      ...columns,
      [sourceColumnId]: {
        ...sourceColumn,
        tasks: updatedSourceTasks,
      },
      [destColumnId]: {
        ...destColumn,
        tasks: updatedDestTasks,
      },
    });
    setDraggedTaskId(null);
    setSourceColumnId(null);
  };

  return (
    <div className="drag-drop-container">
      <div className="d-flex justify-content-around">
        {Object.entries(columns).map(([columnId, column]) => (
          <div
            key={columnId}
            style={{
              margin: "8px",
              padding: "16px",
              backgroundColor: "#e9ecef",
              width: "250px",
              minHeight: "500px"
            }}
            onDragOver={(event) => onDragOver(event)}
            onDrop={(event) => onDrop(event, columnId)}
          >
            <h3 style={{ textAlign: "center" }}>
              {column.name}
            </h3>
            {column.tasks.map((task, index) => (
              <button
              className="btn btn-primary m-2 p-2 w-100"
                key={task.id}
                draggable
                onDragStart={(event) => onDragStart(event, columnId, task.id)}
                
                
              >
                {task.content}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
