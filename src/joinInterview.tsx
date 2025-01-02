import { FluentProvider, webLightTheme, Input, Button } from '@fluentui/react-components';
import './App.css';
import RoadRageText from './components/roadRageText';
import ActionButton from './components/ActionButton';
import RandomTips from './components/tips';

function joinInterview() {

    return (
        <FluentProvider theme={webLightTheme}>
            <div className="app-container">
                <div className="content-wrapper">
                    <RoadRageText color="#FFFFFF" titleText='Mockstarters' />
                    <br />
                    <br />
                    <RoadRageText color="#FFFFFF" titleText="ENTER INTERVIEW CODE" min='2.5rem' middle='3vw' max='3rem' style={{ marginBottom: '5rem' }} />
                    
                    {/* FluentUI input component */}
                    <Input 
                        placeholder="Enter code here" 
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
                        style={{ 
                            width: '90vw',
                            maxWidth: '40rem',
                            padding: '1rem',
                            fontSize: '2.2rem',
                            fontFamily: 'Road Rage, serif',
                        }}
                        onClick={() => console.log('Join Interview clicked')}
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

export default joinInterview;