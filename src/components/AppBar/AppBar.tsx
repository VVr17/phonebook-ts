import { Container, Header } from './AppBar.styled';
// import { Navigation } from 'components/Navigation/Navigation';

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <ul>
          <li>home</li>
          <li>contacts</li>
          <li>add contacts</li>
        </ul>
        {/* <Navigation /> */}
      </Container>
    </Header>
  );
};
