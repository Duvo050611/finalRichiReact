// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LoginForm';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import EditUser from './components/pages/EditUser';  

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/register" element={<UserForm />} />
          <Route path="/edit/:id" element={<EditUser />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
