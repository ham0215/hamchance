import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from 'next/image';

type Props = {
  open: boolean;
  src: string;
  alt?: string;
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

export function QrModal({ open, src, alt = 'QR Code', onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="QR code modal">
      <Box sx={style}>
        <Image src={src} alt={alt} width="280" height="280" />
      </Box>
    </Modal>
  );
}
