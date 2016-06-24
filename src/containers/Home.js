
import { h, Component } from 'preact';
import debounce from 'debounce-promise';
import SearchBar from 'components/SearchBar';
import List from 'components/List';
import { fetchEmojis } from 'services/datalayer';

export default class extends Component {
  constructor(props) {
    super(props);

    this.fetchEmojis = debounce(fetchEmojis, 200);
    this.state = {
      items: [],
      search: ''
    };
  }

  renderItem(item) {
    return (
      <div style={styles.item}>
        <span>{item.text}</span>
        <span style={styles.score}>{parseInt(item.score * 100, 10)}%</span>
      </div>
    );
  }

  onInput(evt) {
    const search = evt.target.value;
    this.setState({ search });

    this.fetchEmojis(search)
    .then((items=[]) => this.setState({ items }));
  }

  render({}, { search, items }) {
    return (
      <div>
        <SearchBar search={search} onInput={this.onInput.bind(this)} />
        <List items={items} renderItem={this.renderItem} />
      </div>
    );
  }

}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
    borderBottom: '1px solid #ccc',
    alignItems: 'center'
  },
  score: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 999
  }
};
