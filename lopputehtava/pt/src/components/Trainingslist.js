import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Trainingslist() {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    getTrainings();
  }, []);

  const getTrainings = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
      .then((response) => response.json())
      .then((data) => setTrainings(data.content))
      .catch((err) => console.error(err));
  };

  const columns2 = [
    { field: 'activity', sortable: true, filter: true },
    { field: 'date', sortable: true, filter: true },
    { field: 'duration', sortable: true, filter: true },
  ];

  return (
    <div>
      Trainings
      <div
        className="ag-theme-material"
        style={{ height: 600, width: '80%', margin: 'auto' }}
      >
        <AgGridReact
          rowData={trainings}
          columnDefs={columns2}
          pagination="true"
          paginationPageSize="10"
        ></AgGridReact>
      </div>
    </div>
  );
}

export default Trainingslist;
