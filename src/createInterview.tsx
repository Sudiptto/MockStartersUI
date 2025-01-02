import { FluentProvider, webLightTheme, Input, Button, Text } from '@fluentui/react-components';
import { useState } from 'react';
import './App.css';
import RoadRageText from './components/roadRageText';
import WarningModal from './components/WarningModal';

function CreateInterview() {
    // State to store the interviewer's name
    const [interviewerName, setInterviewerName] = useState('');
    // State to store the generated interview link
    const [interviewLink, setInterviewLink] = useState('');
    // State to control the visibility of the warning modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    // State to control the visibility of the join button
    const [showJoinButton, setShowJoinButton] = useState(false);

    // Function to handle the click event of the "Create Interview" button
    const handleCreateClick = () => {
        if (!interviewerName) {
            // Show the warning modal if the interviewer's name is not provided
            setIsModalOpen(true);
        } else {
            // Generate the interview link and update the state (FOR FUTURE CALL THE API HERE TO GENERATE THE LINK)
            const generatedLink = `https://mockstarters.com/joinInterview?interviewer=${encodeURIComponent(interviewerName)}`;
            setInterviewLink(generatedLink);
            setShowJoinButton(true);
        }
    };

    return (
        <FluentProvider theme={webLightTheme}>
            <div className="app-container">
                <div className="content-wrapper">
                    <RoadRageText color="#FFFFFF" titleText='Mockstarters' />
                    <br />
                    <br />
                    <RoadRageText color="#FFFFFF" titleText="CREATE INTERVIEW" min='2.5rem' middle='3vw' max='3rem' style={{ marginBottom: '5rem' }} />
                    
                    <Input 
                        placeholder="Enter Interviewer's Name" 
                        value={interviewerName}
                        onChange={(e) => setInterviewerName(e.target.value)}
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
                            backgroundColor: '#0078D4'
                        }}
                        onClick={handleCreateClick}
                    >
                        Create Interview
                    </Button>

                    {interviewLink && (
                        <>
                            <br />
                            <Text 
                                style={{ 
                                    width: '90vw',
                                    maxWidth: '40rem',
                                    marginBottom: '2vh',
                                    fontSize: '1.8rem',
                                    fontFamily: 'Road Rage, serif',
                                    color: '#FFFFFF'
                                }}
                            >
                                {interviewLink}
                            </Text>
                            <br />
                            <Button 
                                appearance="primary" 
                                style={{ 
                                    width: '90vw',
                                    maxWidth: '40rem',
                                    padding: '1rem',
                                    fontSize: '2.2rem',
                                    fontFamily: 'Road Rage, serif',
                                    backgroundColor: '#0078D4'
                                }}
                                onClick={() => navigator.clipboard.writeText(interviewLink)}
                            >
                                Copy Link
                            </Button>
                        </>
                    )}

                    {showJoinButton && (
                        <>
                            <br />
                            <Button 
                                appearance="primary" 
                                style={{ 
                                    width: '90vw',
                                    maxWidth: '40rem',
                                    padding: '1rem',
                                    fontSize: '2.2rem',
                                    fontFamily: 'Road Rage, serif',
                                    backgroundColor: '#0078D4'
                                }}
                                onClick={() => window.location.href = interviewLink}
                            >
                                Join Interview
                            </Button>
                        </>
                    )}
                </div>

                <div className="footer">
                    <RoadRageText color="#FFFFFF" titleText='HGS.AI PRODUCT' />
                </div>
            </div>
            <WarningModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content = "Put your interviewing name down!" />
        </FluentProvider>
    );
}

export default CreateInterview;