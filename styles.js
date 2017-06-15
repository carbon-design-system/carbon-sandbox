const fs = require('fs');
const path = require('path');

fs.readFile(
  path.resolve(__dirname, 'node_modules/carbon-themes/themes/watson.scss'),
  'utf-8',
  (err, data) => {
    let text = 'module.exports = {';
    data
      .toString()
      .split('\n')
      .filter(i => !i.includes('/'))
      .filter(i => i.length > 1)
      .map(i => {
        console.log(i.split(':'));
        let key = i.split(':')[0].slice(1);
        let value = i.split(':')[1].slice(1, -1);
        text = text + `\n '${key}': '${value}',`;
      });

    fs.writeFile('./tmp/test.js', `${text} \n };`, err => {
      if (err) console.log(err);
    });
  }
);
