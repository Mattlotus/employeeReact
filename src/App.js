import { useContext } from 'react';
import './App.css';
import { AppContext } from './contexts/app_context';
import HomePage from './HomePage/components';
import EmployeePage from './EmployeePage/components';
import React from 'react';

function App() {

  let { showEmployee } = useContext(AppContext)

  
  return (
    <div className="App">
      
      <HomePage />
      {showEmployee && <EmployeePage /> }

    </div>
  );
}

export default App;