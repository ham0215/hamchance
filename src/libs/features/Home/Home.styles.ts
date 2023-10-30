import CardBase from '@mui/material/Card';
import { styled } from '@mui/material/styles';

export const Container = styled('div')({
  background: '#151515 url("/static/images/yarigadake.jpg") no-repeat fixed center bottom',
  backgroundSize: 'cover',
  color: '#fff',
  textAlign: 'center',
  padding: '6rem 2rem 15rem',
});

export const Title = styled('h1')({
  marginTop: '2rem',
  fontSize: '5rem',
  wordWrap: 'break-word',

  '@media(max-width: 768px)': {
    fontSize: '2rem',
  },
});

export const SubTitle = styled('div')({
  fontSize: '1.2rem',
});

export const Profile = styled('div')({
  textAlign: 'left',
  margin: '8rem auto',
});

export const Card = styled(CardBase)({
  margin: 'auto',
  maxWidth: '31rem',
});
