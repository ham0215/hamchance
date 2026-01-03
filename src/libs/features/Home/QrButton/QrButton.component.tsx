import QrCode2Icon from '@mui/icons-material/QrCode2';
import IconButton from '@mui/material/IconButton';

type Props = {
  onClick: () => void;
};

export function QrButton({ onClick }: Props) {
  return (
    <IconButton onClick={onClick} aria-label="Show QR code">
      <QrCode2Icon fontSize="medium" />
    </IconButton>
  );
}
