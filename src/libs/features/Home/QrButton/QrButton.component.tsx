import QrCode2Icon from '@mui/icons-material/QrCode2';

type Props = {
  onClick: () => void;
};

export function QrButton({ onClick }: Props) {
  return (
    <div onClick={onClick}>
      <QrCode2Icon fontSize="medium" />
    </div>
  );
}
