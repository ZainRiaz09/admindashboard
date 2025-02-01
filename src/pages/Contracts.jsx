import React from "react";
import Card from "../Componenets/Card";
import Button from "../Componenets/Button";
import Breadcrums from "../Componenets/Breadcrums";
const data1 = {
  heading: "Projects",
  subheading: "You have 8 active projects",
  image: "dashIcon1.png",
  color: "#ffee93",
  projects: [
    { projectName: "Project X", status: "Due in 3 days" },
    { projectName: "Project Y", status: "Due in 5 days" },
    { projectName: "Project Z", status: "Due in 8 days" },
  ],
};
const data2 = {
  heading: "Analysis",
  subheading: "You have 5 pending analyses",
  image: "dashIcon2.png",
  color: "rgba(181, 219, 255, 1)",
  projects: [
    { projectName: "Analysis A", status: "Pending" },
    { projectName: "Analysis B", status: "Pending" },
    { projectName: "Analysis C", status: "Pending" },
  ],
};
const data3 = {
  heading: "Alerts",
  subheading: "You have 3 new alerts",
  image: "dashIcon3.png",
  color: "rgba(255, 193, 193, 1)",
  projects: [
    { projectName: "Alert 1", status: "High Priority" },
    { projectName: "Alert 2", status: "Medium Priority" },
    { projectName: "Alert 3", status: "Low Priority" },
  ],
};
const Contracts = () => {
  return (
    <>
      <section className="section1 sec1-cards">
        <div className="container">
          <div className="ContractAnly">
            <div>
              <div className="CusThre">
                <Breadcrums name="Contract" />
              </div>
            </div>
          </div>
          <div className="ContractMain">
            <div>
              <div className="EstimateBody">
                <div className="EstimateMain">
                  <div>
                    <div className="EstSec-1">
                      <div className="SubEstHeading">
                        <h3 className="subheading-text">Upload Contracts </h3>
                      </div>
                      <div className="ContartEst">
                        <div className="UploadCon d-flex flex-wrap align-items-center justify-conetent-center">
                          <input type="search" className="UploadConSearch" />
                          <div className="ContractBTN d-flex align-items-center justify-content-center">
                            <Button
                              Onclick={() => {
                                alert("You have click a button");
                              }}
                              name="Upload"
                              color="rgba(59, 130, 246, 1)"
                            />{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="EstimateComp">
                        <div>
                          <div className="heading">
                            <h3 className="subheading-text">
                              Review Flagged section
                            </h3>
                          </div>
                          <div className="EstCompGraph d-flex flex-column">
                            <div>
                              <div className="EstGraph-mainrow contractGraph-mainrow">
                                <div>
                                  <ul className="d-flex justify-content-around align-items-around">
                                    <li>Section</li>
                                    <li>Issue Directed</li>
                                    <li>Details</li>
                                  </ul>
                                </div>
                              </div>

                              <div className="EstGraph-row ">
                                <div>
                                  <ul className="d-flex justify-content-around align-items-around">
                                    <li>Section 1.2</li>
                                    <li className="EstGrapDis2">
                                      Compliance Issue
                                    </li>

                                    <li>Missing required clause</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="EstGraph-row ">
                                <div>
                                  <ul className="d-flex justify-content-around align-items-around">
                                    <li>Section 3.4</li>

                                    <li className="EstGrapDis3">
                                      Missing Clause
                                    </li>
                                    <li>Clause 3.4.1 is required</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ContSec-last">
                      <div>
                        <div className="ContLastheading">
                          <h1 className="subheading-text">
                            Side-by-Side Comparison
                          </h1>
                        </div>
                        <div className="ConSecBox d-flex">
                          <div className="col-12 col-md-6">
                            <div className="ConSecB">
                              <div>
                                <div className="ConSecBhead">
                                  <h2>Upload Contract</h2>
                                </div>
                                <div className="ConSecBdes">
                                  <h3>
                                    [Uploaded contract content with highlighted
                                    issues]
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="ConSecB">
                              <div>
                                <div className="ConSecBhead">
                                  <h2>Reference Contract</h2>
                                </div>
                                <div className="ConSecBdes">
                                  <h3>
                                    [Reference contract content for comparison]
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contracts;
