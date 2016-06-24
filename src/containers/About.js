
import { h } from 'preact';

export default () => (
  <div style={styles.container}>
    <p>This sample app shows you how can you represent a phrase with emojis.</p>
    <p>It uses <a href='http://emoji.getdango.com/api/emoji?q=Hola'>getdango.com</a> API
    and it showcase how to start an app using <a href='https://preactjs.com'>PreactJS</a></p>
  </div>
);

const styles = {
  container: {
    paddingLeft: 50
  }
};
