import React from "react";

import Admin from "../../Shared/Layouts/Admin";
// components

import CardLineChart from "../../Shared/Cards/CardLineChart";
import CardBarChart from "../../Shared/Cards/CardBarChart.js";
import CardPageVisits from "../../Shared/Cards/CardPageVisits.js";
import CardSocialTraffic from "../../Shared/Cards/CardSocialTraffic.js";

function Dashboard() {
  return (
    <>
      <div className="relative flex flex-wrap ml-5 mr-5">
          <h1 className="text-white text-sm uppercase hidden lg:inline-block font-semibold">Dashboard</h1>
      </div>
    </>
  );
}

Dashboard.layout = page => <Admin children={page} title="Dashboard" />;

export default Dashboard;
