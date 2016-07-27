
import { h } from 'preact';
import Router from 'preact-router';
import Header from 'components/Header';
import Home from 'containers/Home';
import About from 'containers/About';

export default ({ url }) => (
  <div>
    <Header />
    <Router url={url}>
      <Home path='/' />
      <About path='/about' />
    </Router>
  </div>
);
