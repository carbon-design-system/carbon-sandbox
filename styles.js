const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(path.resolve(__dirname, 'node_modules/carbon-themes/themes'));

files.forEach(file => {
  const name = file.split('.')[0];

  fs.readFile(
    path.resolve(__dirname, `node_modules/carbon-themes/themes/${file}`),
    'utf-8',
    (err, data) => {
      let text = 'module.exports = {';
      data
        .toString()
        .split('\n')
        .filter(i => !i.includes('/'))
        .filter(i => i.length > 1)
        .map(i => {
          let key = i.split(':')[0].slice(1);
          let value = i.split(':')[1].slice(1, -1);
          text = text + `\n '${key}': '${value}',`;
        });

      fs.writeFile(
        path.resolve(__dirname, `client/src/assets/themes/${name}.js`),
        `${text} \n };`,
        err => {
          if (err) console.log(err); // eslint-disable-line
        }
      );
    }
  );
});
