import { Container, Title } from './styles';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <Container>
      <Title>Hamchance.com</Title>
      <div>登山とジョギング、子育てと株取引とお酒で忙しいWebエンジニアのアウトプット記録</div>
      <footer>
        <Button variant="contained" size="large" href="#profile">
          PROFILE
        </Button>
        <Button variant="contained" size="large" color="success" href="#products">
          PRODUCTS
        </Button>
      </footer>
    </Container>
  );
}
