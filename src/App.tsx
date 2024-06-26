import React from 'react';
import RegistrationForm from './components/Form';
import UsersTable from "./components/UsersTable";

const App: React.FC = () => {
  return (
    <div>
      <h1>My application</h1>
      <RegistrationForm />
      <UsersTable />
    </div>
  );
};

export default App;