import React from 'react'
import Card from '../Componenets/Card';
import Button from '../Componenets/Button';
import Breadcrums from '../Componenets/Breadcrums';
const Estimate = () => {
  return (
    <>
      <section className="section1 sec1-cards">
        <div className="container">
        <div style={{paddingBottom:`8px`}}>
     <div className="CusThre">
               <Breadcrums name = "Estimate"/>
              </div>
              </div> 
          <div className="EstimateAly">
            <div>
              
              <div className="EstimateBody">
                <div className="EstimateMain">
                  <div>
                    <div className="EstSec-1">
                      <div className="SubEstHeading">
                        <h3 className='subheading-text'>Upload Contractor Estimates</h3>

                      </div>
                      <div className="ContartEst">
                        <div className="UploadCon d-flex flex-wrap align-items-center">
                          <input type="search"  />
                          <div>
                          <Button name = "Upload" color="rgba(59, 130, 246, 1) " Onclick={()=>{alert("You have click a button")}}/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="EstimateComp">
                        <div>

                          <div className="subheading-text">
                            <h3 className='subheading-text'>Estimate Comparisons</h3>
                          </div>
                          <div className="EstCompGraph d-flex flex-column">
                            <div>
                              <div className="EstGraph-mainrow ">
                                <div>
                                  <ul className="d-flex justify-content-around align-items-around">
                                  <li>Contractor</li>
                                  <li>Estimate</li>
                                  <li>Market Value</li>
                                  <li>Discrepancy</li>
                                  </ul>
                                </div>
                                
                              </div>
                              
                              <div className="EstGraph-row ">
                                <div>
                                  <ul className="d-flex justify-content-around">
                                  <li>Contractor A</li>
                                  <li>$10,000</li>
                                  <li>$10,000</li>
                                  <li className='EstGrapDis1'>No Discrepancy</li>
                                  </ul>
                                </div>
                                
                              </div>
                              <div className="EstGraph-row ">
                                <div>
                                  <ul className="d-flex justify-content-around align-items-around">
                                  <li>Contractor B</li>
                                  <li>$12,000</li>
                                  <li>$11,500</li>
                                  <li className='EstGrapDis2'>Minor Discrepancy</li>
                                  </ul>
                                </div>
                                
                              </div>
                              <div className="EstGraph-row ">
                                <div>
                                  <ul className="d-flex justify-content-around align-items-around">
                                  <li>Contractor C</li>
                                  <li>$1,5000</li>
                                  <li>$10,000</li>
                                  <li className='EstGrapDis3'>Major Discrepancy</li>
                                  </ul>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="EstSec-last">
                      <div>
                        <div className="EctAction">
                          <div>
                            <div className="EctActionHead">
                              <h1 className='subheading-text'>
                                Actions
                              </h1>
                            </div>
                            <div className="ActionList d-flex justify-content-between flex-wrap">
                              {/* <ul className=''>
                               <div> <input className='AL1' type="button" value="Notify Team" /></div>
                               <div> <input className='AL2' type="button" value="Download Report" /></div>
                               <div> <input className='AL3' type="button" value="Flag for review" /></div>
                              </ul> */}
                            <Button name="Notify Team" color="rgba(34, 197, 94, 1)" Onclick={()=>{alert("You have click a button")}}/>
                            <Button name="Download Report" color="rgba(59, 130, 246, 1)" Onclick={()=>{alert("You have click a button")}}/>
                            <Button name="Flag for review" color="rgba(239, 68, 68, 1)" Onclick={()=>{alert("You have click a button")}}/>

                            </div>
                          </div>
                        </div>
                        {/* <div className="EctAction">
                          <div>
                            <div className="EctActionHead">
                              <h1>
                                Actions
                              </h1>
                            </div>
                            <div className="ActionList">
                              <ul>
                               <div> <li className="AL1 "><h3>Notify Team</h3></li></div>
                               <div>  <li className="AL2"><h3>Download Report</h3></li></div>
                               <div> <li className="AL3"><h3>Flag for review</h3></li></div>
                              </ul>
                            </div>
                          </div>
                        </div> */}
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
  )
}
export default Estimate;