// import { Header } from './AppBar.styled';
import { Navigation } from 'components/Navigation/Navigation';
// import { Container } from 'components/Container/Container';
import { Box } from 'components/Box/Box';
import { Container } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Box
      as="header"
      py={[3, 3, 4, 4]}
      px={[2, 2, 4, 6]}
      bg="accentBackgroundColor"
    >
      <Container>
        <Navigation />
      </Container>
    </Box>
  );
};
