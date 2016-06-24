
export const fetchEmojis = text =>
fetch(`http://emoji.getdango.com/api/emoji?q=${text}`)
.then(res => res.json())
.then(({ results }) => results);
