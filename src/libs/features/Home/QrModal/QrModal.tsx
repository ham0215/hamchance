import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from 'next/image';

type Props = {
  open: boolean;
  onClose?: () => void;
};

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 340,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
};

export function QrModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="X QR code">
      <Box sx={style}>
        <Image src="/static/images/x-qr.png" alt="QR" width="280" height="280" />
      </Box>
    </Modal>
  );
}
