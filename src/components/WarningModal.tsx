import { Dialog,DialogSurface, DialogBody, DialogTitle, DialogContent, DialogActions, Button } from '@fluentui/react-components';

interface WarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

/**
     * WarningModal component displays a modal dialog with a warning message.
     * 
     * @param {object} props - The properties object.
     * @param {boolean} props.isOpen - Determines if the modal is open.
     * @param {function} props.onClose - Function to call when the modal is closed.
     * 
     * @returns {JSX.Element} The rendered WarningModal component.
 */
const WarningModal = ({ isOpen, onClose, content }: WarningModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Warning</DialogTitle>
          <DialogContent>{content}</DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Close</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default WarningModal;