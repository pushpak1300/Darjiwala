import React from "react";

import Admin from "../../Shared/layouts/Admin";

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
