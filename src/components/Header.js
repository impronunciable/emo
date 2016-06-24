
import { h } from 'preact';
import { Link } from 'preact-router';

export default () => (
  <header style={styles.container}>
    <Title />
    <NavBar />
  </header>
);

const Title = () => (
  <h1><Link href='/' style={styles.navItem}>Emo</Link></h1>
);

const NavBar = () => (
  <nav>
    <Link style={styles.navItem} href='/'>Home</Link>
    <Link style={styles.navItem} href='/about'>About</Link>
  </nav>
);

const styles = {
  container: {
    backgroundColor: 'blue',
    color: '#fff',
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navItem: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: 20
  }
};
