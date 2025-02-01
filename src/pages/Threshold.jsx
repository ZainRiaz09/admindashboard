import React from 'react'
import Button from '../Componenets/Button';
import Breadcrums from '../Componenets/Breadcrums';

const Threshold = () => {
  return (
    <>

      <div className="ThresMain">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="col">
                <div className="ThresBody">
                  <div>
                    <div className="CusThre">
                      <Breadcrums name = "Customer Threshold"/>
                    </div>
                  </div>

                  <div className="DefinThres">
                    <div>
                      <div className="DefinHead">
                        <h2 className='heading-text'>Define Your Own Thresholds</h2>
                      </div>
                      <div className="ThresOption">
                        <div>
                          <div className="ThOp">
                            <div className="Op1">
                              <div>
                                <div className="Op">
                                  <div>
                                  <h3  className='subheading-text' >Analysis ThressHold</h3>
                                  </div><div>
                                  <input  class = "search"type="text" placeholder="Enter threshold value" />
                                </div>
                                </div>

                              </div>
                            </div>
                            <div className="Op2">

                              <div> <div className="Op">
                                  <div>
                                  <h3 className='subheading-text'>Alert ThressHold</h3>
                                  </div><div>
                                  <input  class = "search"type="text" placeholder="Enter threshold value" />
                                </div>
                                </div></div>
                            </div>
                            <div className="Op3">
                              <div> <div className="Op">
                                  <div>
                                  <h3 className='subheading-text'>Project ThressHold</h3>
                                  </div><div>
                                  <input  class = "search"type="text" placeholder="Enter threshold value" />
                                </div>
                                </div></div>

                            </div>
                            <div className="THresBtn">
                    <div>
                     
                        <Button Onclick={()=>{alert("You have click a button")}} name = "Analyze" color="rgba(59, 130, 246, 1)"/>
                     
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
    </>
  )
}
export default Threshold;
