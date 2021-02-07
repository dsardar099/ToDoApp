const Show = ({ task, setTask, history, setHistory }) => {
  let data = history[history.length - 1][0];

  //delete method
  const handleDelete = (toDoIndex) => {
    let prevData = history[history.length - 1][0];

    let newHistData = prevData.filter((ind) => ind !== toDoIndex);
    let undo = history.length - 1;
    let redo = null;
    let newHist = [newHistData, undo, redo];
    let Hist = [...history, newHist];
    //set history
    setHistory(Hist);
  };

  return (
    <div className="px-3 pt-2 pt-md-0">
      <div className="row justify-content-center bg-light pb-2 border border-secondary border-3 rounded shadow">
        <div className="col-12 text-center h3 bg-info text-light mb-2 p-2">
          ToDo List
        </div>
        {
          data.length==0 && (
            <div className="col-10 rounded text-center bg-complete h4 p-4">Either you have finished all the tasks or You have not added any task</div>
          )
        }
        {task != undefined && (
          <>
            {data.map((d) => (
              <div className="col-12 text-left list py-2 mt-1" key={d}>
                <button
                  className="btn btn-danger"
                  onClick={(e) => handleDelete(d)}
                >
                  Delete
                </button>
                <span className="pl-5 list-content">{task[d]}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Show;
