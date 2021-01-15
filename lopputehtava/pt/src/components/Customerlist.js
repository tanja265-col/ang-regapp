import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import AddTraining from './AddTraining';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import Trainingslist from './Trainingslist';

function Customerlist() {
  const [customers, setCustomers] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [value, setValue] = useState('');

  const handleChange = (event, value) => {
    setValue(value);
  };

  useEffect(() => {
    getTrainings();
  }, []);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
      .then((response) => response.json())
      .then((data) => setCustomers(data.content))
      .catch((err) => console.error(err));
  };

  const getTrainings = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
      .then((response) => response.json())
      .then((data) => setTrainings(data.content))
      .catch((err) => console.error(err));
  };

  const deleteCustomer = (params) => {
    if (window.confirm('Are you sure?')) {
      fetch(params.value, {
        method: 'DELETE',
      })
        .then((_) => getCustomers())
        .catch((err) => console.error(err));
    }
  };

  const addCustomer = (newCustomer) => {
    fetch('https://customerrest.herokuapp.com/api/customers', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newCustomer),
    })
      .then((response) => getCustomers())
      .catch((err) => console.error(err));
  };

  const updateCustomer = (link, customer) => {
    fetch(link, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(customer),
    })
      .then((response) => getCustomers())
      .catch((err) => console.error(err));
  };

  const addTraining = (newTraining) => {
    fetch('https://customerrest.herokuapp.com/api/trainings', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newTraining),
    })
      .then((response) => getTrainings())
      .catch((err) => console.error(err));
  };

  const columns = [
    { field: 'firstname', sortable: true, filter: true, width: '140' },
    { field: 'lastname', sortable: true, filter: true },
    { field: 'streetaddress', sortable: true, filter: true },
    { field: 'postcode', sortable: true, filter: true, width: '120' },
    { field: 'city', sortable: true, filter: true },
    { field: 'email', sortable: true, filter: true },
    { field: 'phone', sortable: true, filter: true, width: '130' },
    {
      headerName: '',
      width: 90,
      field: 'links.1.href',
      cellRendererFramework: (params) => (
        <EditCustomer updateCustomer={updateCustomer} params={params} />
      ),
    },
    {
      headerName: '',
      field: 'links.1.href',
      width: 90,
      cellRendererFramework: (params) => (
        <IconButton onClick={() => deleteCustomer(params)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
    {
      headerName: '',
      field: 'links.0.href',
      width: 200,
      cellRendererFramework: (params) => (
        <AddTraining addTraining={addTraining} params={params} />
      ),
    },
  ];

  return (
    <div>
      <div className="App">
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab value="one" label="Customers" />
            <Tab value="two" label="Trainings" />
          </Tabs>
        </AppBar>
      </div>
      {value === 'one' && <div></div>}
      {value === 'two' && (
        <div title="Show Trainings">
          <Trainingslist />
        </div>
      )}
      {value === 'three' && <div></div>}
      <AddCustomer addCustomer={addCustomer} />
      Customers
      <div
        className="ag-theme-material"
        style={{ height: 600, width: '90%', margin: 'auto' }}
      >
        <AgGridReact
          rowData={customers}
          columnDefs={columns}
          pagination="true"
          paginationPageSize="10"
        ></AgGridReact>
      </div>
    </div>
  );
}

export default Customerlist;
