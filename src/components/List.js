
import { h } from 'preact';

export default ({ items, renderItem }) => (
  <ul style={styles.container}>
    {items.map(item => <li> {renderItem(item)} </li> )}
  </ul>
);

const styles = {
  container: {
    padding: 0,
    listStyle: 'none'
  }
};
