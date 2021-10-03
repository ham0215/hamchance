import { styled } from '@mui/material/styles';

export const Container = styled('div')({
  background: '#151515 url("/images/yarigadake.jpg") no-repeat fixed center bottom',
  backgroundSize: 'cover',
  color: '#fff',
  textAlign: 'center',
  padding: '6rem 2rem 15rem',

  'div': {
    fontSize: '1.2rem',
  },

  'footer': {
    marginTop: '2rem',
    '& > *': {
      margin: '1rem'
    }
  }
});

export const Title = styled('h1')({
  marginTop: '2rem',
  fontSize: '5rem',
  wordWrap: 'break-word',

  '@media(max - width: 768px)': {
    fontSize: '2rem'
  }
});
