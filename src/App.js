import React from 'react';

import AdminDashboard from './page/admindashboard'; // Make sure your file is named AdminDashboard.js with uppercase 'A' and 'D'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Disaster Relief Admin Dashboard</h1>
      </header>
      {/* Render the Admin Dashboard */}
      <AdminDashboard />
    </div>
  );
}

export default App;
