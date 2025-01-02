import { Button } from '@fluentui/react-components';
import RoadRageText from './roadRageText';

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
}

/**
     * ActionButton component renders a styled button with primary appearance.
     *
     * @param {Object} props - The properties object.
     * @param {string} props.text - The text to display on the button.
     * @param {function} props.onClick - The function to call when the button is clicked.
     *
     * @returns {JSX.Element} The rendered button component.
 */
const ActionButton = ({ text, onClick }: ActionButtonProps) => {
  return (
    <Button
      appearance="primary"
      size="large"
      onClick={onClick}
      style={{
        backgroundColor: '#0078D4',
        borderRadius: '4px',
        padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',

      }}
    >
      <RoadRageText titleText={text} color="#FFFFFF"  min='2.5rem' middle='3vw' max='3rem'/>

    </Button>
  );
};

export default ActionButton;