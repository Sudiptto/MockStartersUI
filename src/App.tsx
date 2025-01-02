import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './App.css';
import RoadRageText from './components/roadRageText';
import ActionButton from './components/ActionButton';
import RandomTips from './components/tips';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>

    <div className="app-container">
      <div className="content-wrapper">
        <RoadRageText color="#FFFFFF" titleText='Mockstarters' />

        <br />
        <br />

        
          
          {/* FluentUI text component */}
          
           <RoadRageText color="#FFFFFF" titleText="ARE YOU" min='2.5rem' middle='3vw' max='3rem' style={{marginBottom:'5rem'}}  />

           <br />

          {/* FluentUI button component */}
            <div className="button-container">
              <ActionButton 
              text="Interviewee" 
              onClick={() => window.location.href = '/joinInterview'}
              />
              <RoadRageText color="#FFFFFF" titleText="OR" min='2.5rem' middle='3vw' max='3rem' style={{marginBottom:'5rem'}}  />

              <ActionButton 
              text="Interviewer" 
              onClick={() => window.location.href = '/joinInterview'}
              />
            </div>
          
          <br />
          <br/>
          {/* Random tips for interviewing */}
          <RandomTips />

        </div>

        <div className="footer">
          <RoadRageText color="#FFFFFF" titleText='HGS.AI PRODUCT' />
        </div>
        
      </div>
    </FluentProvider>
  );
}

export default App;