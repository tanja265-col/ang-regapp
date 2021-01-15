import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Trainingslist() {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    getTrainings();
  });

  const getTrainings = () => {
    fetch('https://customerrest.herokuapp.com/gettrainings')
      .then((response) => response.json())
      .then((res) => setTrainings(res))
      .then((res) => console.log(trainings))
      .catch((err) => console.error(err));
  };

  const deleteTraining = (params) => {
    console.log(params.data.id);
    if (window.confirm('Are you sure?')) {
      fetch(
        'https://customerrest.herokuapp.com/api/trainings/' + params.data.id,
        {
          method: 'DELETE',
        }
      )
        .then((_) => getTrainings())
        .catch((err) => console.error(err));
    }
  };

  const columns2 = [
    { field: 'activity', sortable: true, filter: true },
    {
      field: 'date',
      sortable: true,
      filter: true,
    },
    { field: 'duration', sortable: true, filter: true },
    {
      width: '200',
      headerName: 'Customer´s lastname',
      field: 'customer.lastname',
    },
    {
      width: '200',
      headerName: 'Customer´s firstname',
      field: 'customer.firstname',
    },
    {
      headerName: '',
      field: 'links',
      width: 90,
      cellRendererFramework: (params) => (
        <button onClick={() => deleteTraining(params)}>Delete</button>
      ),
    },
  ];

  return (
    <div>
      Trainings
      <div
        className="ag-theme-material"
        style={{ height: 600, width: '90%', margin: 'auto' }}
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
