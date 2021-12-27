import { styled } from '@mui/material/styles';

export const Container = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
}));
