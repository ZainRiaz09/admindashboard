import React, { useState } from "react";
import ToggleCheckBox from "../Componenets/ToggleCheckBox";
import Button from "../Componenets/Button";
import Breadcrums from "../Componenets/Breadcrums";
const Settings = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  return (
    <main>  <div style={{paddingBottom:`8px`}}>
    <div className="CusThre">
              <Breadcrums name = "Setting"/>
             </div>
             </div>  
    <main className="setting">
           
      <div>
     
        <div className="settingHead ">
          <div className="d-flex ">
            <h4 className='heading-text'>Security</h4>

          </div>
        </div>
        <div className="settingMain">
          <div>
            <div className="twoFac">
              <div className="TWhead">
                <h4 className='subheading-text'>Two-factor Authentication</h4>
              </div>
            </div>
            <div className="twoFacSec-2">
              <div>
                <div className="TwoFaToggle d-flex align-items-center flex-wrap">
                  <ToggleCheckBox />
                  <div className="TwoFaHead">
                    <h4>Enable or disable two factor authentication</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="Change_pass">
              <div>
                <div className="ChanPassHead">
                  <h4 className='subheading-text'>Change Password</h4>
                </div>
                <div className="Pass">
                  
                  <div className="password-input d-flex align-items-center">
  <input
    type={showCurrentPassword ? "text" : "password"}
    placeholder="Old Password"
  />
  <span
    className="toggle-password d-flex align-items-center"
    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
  >
    <i
      className={showCurrentPassword ? "fas fa-eye-slash" : "fas fa-eye"}
    ></i>
  </span>
</div>

                </div>
                <div className="Pass">
                 
                  <div className="password-input  d-flex align-items-center">
                  
                    <input
                      type={showNewPassword ? "text" : "password"}
                      placeholder="New Password"
                    />
                    <span
                      className="toggle-password d-flex align-items-center"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      <i
                        className={
                          showNewPassword ? "fas fa-eye-slash" : "fas fa-eye"
                        }
                      ></i>
                    </span>
                  </div>
                
                </div>
              </div>
            </div>
            <div className="ChangePassbtn d-flex align-items-end justify-content-start">
              <div>
                <Button Onclick={()=>{alert("You have click a button")}} name = "Save" color="rgba(59, 130, 246, 1)"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </main>
  );
};

export default Settings;
