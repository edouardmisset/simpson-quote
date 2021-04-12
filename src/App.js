import DisplayEmployee from './components/DisplayEmployee';
import { useState } from 'react';
import axios from 'axios';
import './App.css';

const sampleEmployee = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    city: 'Timaru',
    postcode: 76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  // * Using axios
  // const getEmployee = () =>
  //   axios
  //     .get('https://randomuser.me/api?nat=en')
  //     .then(resp => resp.data)
  //     .then(data => setEmployee(data.results[0]));

  // * Using default fetch method
  const getEmployee2 = () =>
    fetch('https://randomuser.me/api?nat=en')
      .then(res => res.json())
      .then(employeeList => setEmployee(employeeList.results[0]))
      .catch(err => console.log(err));

  return (
    <>
      <DisplayEmployee employee={employee} />
      <button type='button' onClick={getEmployee2}>
        Get employee
      </button>
    </>
  );
}

export default App;
