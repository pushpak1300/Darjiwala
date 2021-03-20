import React from "react";

import Admin from "../../Shared/Layouts/Admin";

// components

function Dashboard() {

  return (
    <>
      <div className="relative flex">

         <h1>Dashboard</h1>
        </div>
      </>
  );
}

Dashboard.layout = page => <Admin children={page} title="Dashboard" />;

export default Dashboard;
