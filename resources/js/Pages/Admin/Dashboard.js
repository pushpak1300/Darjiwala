import React from "react";

import Admin from "../../Shared/Layouts/Admin";

import { Wizard, Steps, Step, Navigation } from "react-hooks-multi-step-wizard";
import "bulma";
// components

import CardLineChart from "../../Shared/Cards/CardLineChart";
import CardBarChart from "../../Shared/Cards/CardBarChart.js";
import CardPageVisits from "../../Shared/Cards/CardPageVisits.js";
import CardSocialTraffic from "../../Shared/Cards/CardSocialTraffic.js";

function Dashboard() {

  return (
    <>
      <div className="relative flex flex-wrap ml-5 mr-5">

          <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8">
      
          <div className="mx-auto">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h1 className="text-black text-sm uppercase font-semibold">Measurements</h1>
                <Wizard className="shadow rounded-lg bg-red">
                <Steps>
                  <Step>
                    <div className="field">
                      <label className="label">Length</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="in cm"
                          name="name"
                        />
                      </div>
                    </div>
                    <Navigation pos='first' className="mt-2"/>
                  </Step>
                  <Step>
                    <div className="field">
                      <label className="label">Chest</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="in cm"
                          name="Chest"
                        />
                      </div>
                    </div>
                    <Navigation pos='middle' className="mt-2"/>
                  </Step>
                  <Step>
                    <div className="field">
                      <label className="label">Shoulder</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="in cm"
                          name="shoulder"
                        />
                      </div>
                    </div>
                    <Navigation pos='middle' className="mt-2"/>
                  </Step>
                  <Step>
                    <div className="field">
                      <label className="label">Middle</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="in cm"
                          name="middle"
                        />
                      </div>
                    </div>
                    <Navigation pos='middle'  className="mt-2"/>
                  </Step>
                  <Step>
                    <div className="field">
                      <label className="label">Lower</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="in cm"
                          name="lower"
                        />
                      </div>
                    </div>
                    <Navigation pos='middle' className="mt-2"/>
                  </Step>
                  <Step>
                    <div className="my-2">
                      <h2>Measurement Summary</h2>
                      <div className="flex">
                        <div className="flex flex-col">
                          <p>Length</p>
                          <p>Chest</p>
                          <p>Shoulder</p>
                          <p>Middle</p>
                          <p>Legs</p>
                        </div>

                        <div className="flex flex-col ml-1">
                          <p>19</p>
                          <p>29</p>
                          <p>12</p>
                          <p>56</p>
                          <p>19</p>
                        </div>
                      </div>
                    </div>
                    <Navigation pos='last' className="mt-2"/>
                  </Step>
                </Steps>
              </Wizard>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

Dashboard.layout = page => <Admin children={page} title="Dashboard" />;

export default Dashboard;
