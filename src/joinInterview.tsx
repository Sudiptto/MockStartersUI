import { FluentProvider, webLightTheme, Input, Button } from '@fluentui/react-components';
import { useState } from 'react';
import './App.css';
import RoadRageText from './components/roadRageText';
import RandomTips from './components/tips';

/**
 * JoinInterview component renders a form that allows users to join an interview by entering their first name and a code.
 * It includes input fields for the user's name and interview code, and a button to submit the form.
 * If either the name or code is not provided, a modal warning is displayed.
 * 
 * @component
 * @example
 * return (
 *   <JoinInterview />
 * )
 */
function JoinInterview() {


  const [firstName, setFirstName] = useState('');
  const [code, setCode] = useState('');

/**
 * Handles the click event when the user tries to join an interview.
 * If the first name or code is not provided, a modal warning is displayed.
 */
  const handleJoinClick = () => {
    if (!firstName || !code) {
      alert('First name and code required');
    } else {
      console.log('Join Interview clicked');
    }
  };

  return (
    <FluentProvider theme={webLightTheme}>
      <div className="app-container">
        <div className="content-wrapper">
          <RoadRageText color="#FFFFFF" titleText='Mockstarters' />
          <br />
          <br />
          <RoadRageText color="#FFFFFF" titleText="ENTER INTERVIEW CODE" min='2.5rem' middle='3vw' max='3rem' style={{ marginBottom: '5rem' }} />
          
          {/* Input fields for first name and code */}
          <Input 
            placeholder="Enter First & Last Name" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ 
              width: '90vw',
              maxWidth: '40rem',
              marginBottom: '2vh',
              fontSize: '1.8rem',
              fontFamily: 'Road Rage, serif',
              padding: '0.8rem'
            }}
          />
          <Input 
            placeholder="Enter code here" 
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{ 
              width: '90vw',
              maxWidth: '40rem',
              marginBottom: '2vh',
              fontSize: '1.8rem',
              fontFamily: 'Road Rage, serif',
              padding: '0.8rem'
            }}
          />
          
          <Button 
            appearance="primary" 
            disabled={!firstName || !code}
            style={{ 
              width: '90vw',
              maxWidth: '40rem',
              padding: '1rem',
              fontSize: '2.2rem',
              fontFamily: 'Road Rage, serif',
              backgroundColor: !firstName || !code ? 'grey' : '#0078D4'
            }}
            onClick={handleJoinClick}
          >
            Join Interview
          </Button>
          
          <br />
          <br />
          
          <RandomTips />
        </div>

        
        <div className="footer">
          <RoadRageText color="#FFFFFF" titleText='HGS.AI PRODUCT' />
        </div>

      </div>
    </FluentProvider>
  );
}

export default JoinInterview;