import React, { useState } from "react";
import ToggleCheckBox from "../Componenets/ToggleCheckBox";
import Button from "../Componenets/Button";
import Breadcrums from "../Componenets/Breadcrums";
import useAuth from '../hooks/useAuth';

const Settings = () => {
  const { user } = useAuth();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (formData.newPassword.length < 6) {
      setMessage({ type: 'error', text: 'New password must be at least 6 characters long' });
      return false;
    }
    if (formData.newPassword !== formData.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to change password');
      }

      setMessage({ type: 'success', text: 'Password changed successfully' });
      setFormData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setIsLoading(false);
    }
  };

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
    name="currentPassword"
    value={formData.currentPassword}
    onChange={handleChange}
    required
    disabled={isLoading}
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
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
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
                <div className="Pass">
                 
                  <div className="password-input  d-flex align-items-center">
                  
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                    />
                  </div>
                
                </div>
              </div>
            </div>
            <div className="ChangePassbtn d-flex align-items-end justify-content-start">
              <div>
                <Button Onclick={handleSubmit} name = "Save" color="rgba(59, 130, 246, 1)"/>
              </div>
            </div>
            {message.text && (
              <div className={`alert ${message.type === 'error' ? 'alert-danger' : 'alert-success'}`}>
                {message.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
    </main>
  );
};

export default Settings;
