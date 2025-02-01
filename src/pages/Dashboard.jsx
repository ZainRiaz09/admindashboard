import React from "react";
 
import Card from "../Componenets/Card";
import CircleChart from "../Componenets/CircleChart";
import RecentActivity from "../Componenets/RecentActivity";
import BarChart from "../Componenets/BarChart";
const data1 = {
  heading: 'Projects',
  subheading: 'You have 8 active projects',
  image: 'dashIcon1.png',
  color:'#ffee93',
  projects: [
    { projectName: 'Project X', status: 'Due in 3 days' },
    { projectName: 'Project Y', status: 'Due in 5 days' },
    { projectName: 'Project Z', status: 'Due in 8 days' },
  ],
};
const data2 = {
  heading: 'Analysis',
  subheading: 'You have 5 pending analyses',
  image: 'dashIcon2.png',
  color:'rgba(181, 219, 255, 1)',
  projects: [
    { projectName: 'Analysis A', status: 'Pending' },
    { projectName: 'Analysis B', status: 'Pending' },
    { projectName: 'Analysis C', status: 'Pending' },
  ],
};
const data3 = {
  heading: 'Alerts',
  subheading: 'You have 3 new alerts',
  image: 'dashIcon3.png',
  color:'rgba(255, 193, 193, 1)',
  projects: [
    { projectName: 'Alert 1', status: 'High Priority' },
    { projectName: 'Alert 2', status: 'Medium Priority' },
    { projectName: 'Alert 3', status: 'Low Priority' },
  ],
};
const recentAct = {
  recentActDes:[{head: 'Project X',des: 'Updated 2 hour ago'},
    {head: 'Project Y',des: 'Completed 5 days ago'},
    {head: 'Project Z',des: 'Updated 10 days ago'}
  ]
}
const costs = {
  Circle1:{ name: 'Cost 1', value: 2900, color: '#fb67ca' , percentage:25 },
  Circle2:{ name: 'Cost 2', value: 1521.13, color: '#ffa84a',percentage:50 },
  Circle3:{ name: 'Cost 3', value: 1321.31, color: '#04bfda',percentage:75 },
};

const aspectsData = [
  { name: 'Aspect 1', height: 40, color: '#9aa0f2' },
  { name: 'Aspect 2', height: 100, color: '#b2e3b3' },
  { name: 'Aspect 3', height: 80, color: '#333' },
  { name: 'Aspect 4', height: 120, color: '#b3e3ff' },
  { name: 'Aspect 5', height: 50, color: '#a3b9d3' },
  { name: 'Aspect 6', height: 90, color: '#aee3d0' },
   
];
const Dashboard = () => {
  return (
    <>
      <section className="section1 sec1-cards">
        <div className="container">
          <div className="row justify-content-center card-outer">
            <div className="col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4">
              
                <Card data = {data1}/>
           
            </div>
            <div className="col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4">
            
              <Card data = {data2}/>
            
            </div>
            <div className="col-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4">
              <Card data = {data3}/>
              </div>
          </div>
        </div>
      </section>

      <section className="Dashsection2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-xl-8">
              <div className="row flex-column justify-content-center align-items-center">
                <div className="col">
                  <BarChart props = {aspectsData}/>




                </div>
                <div className="col">
                  <div className="recent-activites">
                    <div className="recent-act">
                  
                  <div className="recentActDes">
                 
                      <div className="act-des">
                          <RecentActivity recentAct={recentAct} />

                      
                      </div>

                  </div>
                  </div>
                  </div></div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-xl-4">
              <div className="row flex-column justify-content-center align-items-center">
                <div className="col">
                  <CircleChart data = {costs} />
                </div>
                <div className="col">
                  <div className="Compare">
                    <div className="ConvMar">
                      <div className="ConvMarmain ">
                          <div className = "d-flex  flex-column align-items-center">
                            <div><div className="ConvMar-heading ">
                              <h3 >Contractor Estimate vs Market Value</h3>
                            </div></div>
                            <div> 
                            <div className="dotConvMar d-flex ">
                              <div>
                              <div className="conEs">
                            <span class="dot dot"></span> Contractor Estimates 
                            </div>
                            </div>
                            <div> <div className="marVal">
                            <span class="dot dot-2"></span> Market Value 
                            </div>
                            </div>
  
                            </div></div>
                            <div><div class="ConvMarImg d-flex align-items-center justify-content-center">
                              <img src="/img/Chart-image.png" alt="" />
                            </div>
                          </div></div>

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
export default Dashboard;
