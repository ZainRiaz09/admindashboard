import React from 'react'
import InputFile from '../Componenets/InputFile'
import Breadcrums from '../Componenets/Breadcrums'

const Blueprint = () => {
  return (
    <main className="BluePrintMain">
<div>
    <div className="BluePrintTitle">
        <div>
            <Breadcrums name="Blueprint" />
        </div>
    </div>
    
</div>
<div className="BluePrintSec-2">
        <div>
             <div className="BluePrintForm">
                <div>
                    <div className="BluePrintBoxHeading">
                        <h2 className='subheading-text'>BluePrint Url
                        </h2>
                    </div>
                    <div className="BluePrintBoxInput">
                       <input type="text"  />
                    </div>
                </div>
                <div>
                    <div className="BluePrintBoxHeading">
                        <h2 className='subheading-text'>Project No
                        </h2>
                    </div>
                    <div className="BluePrintBoxInput">
                       <input type="text"  />
                    </div>
                </div>
                <div>
                    <div className="BluePrintBoxHeading">
                        <h2 className='subheading-text'>Name
                        </h2>
                    </div>
                    <div className="BluePrintBoxInput">
                       <input type="text"  />
                    </div>
                </div>
                <div>
                    <div className="BluePrintBoxHeading">
                        <h2 className='subheading-text'>Image Link
                        </h2>
                    </div>
                    <div className="BluePrintBoxInput">
                       <input type="text"  />
                    </div>
                </div>
             </div>
        </div>
    </div>
<div className="BluePrintFileUpload">
    <div>
        <InputFile/>
        
    </div>
</div>
<div className="VisualOverlay">
    <div>
        <div className="VisualOverlayMain">
            <div className="VOhead">
                <h1>Visual Overlay Tools</h1>
            </div>
            <div className="VO-des">
                <div>
                <div className="VO-des1"><h3><b>on</b> Highligh Anomalies</h3></div>
                <div className="VO-des2"><h3><b>on</b> Highligh Discrepancies</h3></div>
            </div></div>
        </div>

    </div>
</div>
    </main>
  )
}

export default Blueprint