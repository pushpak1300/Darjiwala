import React from 'react';

import Admin from "../../Shared/Layouts/Admin";

import { Wizard, Steps, Step, Navigation } from "react-hooks-multi-step-wizard";
import "bulma";
const Index = () => {
    return (
        <div>
        <div className="relative bg-white overflow-hidden shadow rounded-lg md:max-w-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
      
          <div className=" md:max-w-lg">
              <div className="px-4 py-0 sm:p-6">
                <h1 className="text-black text-sm uppercase font-semibold mb-3">Measurements</h1>
                <Wizard>
                <Steps>
                  <Step>
                    <div className="field my-8">
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
                    <div className="field my-8">
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
                    <div className="field my-8">
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
                    <div className="field my-8">
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
                    <div className="field my-8">
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
                      <h2 className="text-black text-sm uppercase font-semibold mb-3">Measurement Summary</h2>
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <p>Length</p>
                          <p>Chest</p>
                          <p>Shoulder</p>
                          <p>Middle</p>
                          <p>Legs</p>
                        </div>

                        <div className="flex flex-col">
                          <p>19 cm</p>
                          <p>29 cm</p>
                          <p>12 cm</p>
                          <p>56 cm</p>
                          <p>19 cm</p>
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
    )
};

Index.layout = page => <Admin children={page} title="New Order" />;

export default Index;