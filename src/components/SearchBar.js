
import { h } from 'preact';

export default ({ search, onInput }) => (
  <input placeholder='Search...' value={search}
    onInput={onInput}
    style={styles.search}/>
);

const styles = {
  search: {
    width: '100%',
    height: 60,
    fontSize: 30,
    padding: 10
  }
};
