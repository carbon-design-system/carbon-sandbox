const fs = require('fs-extra');
const path = require('path');
const sass = require('node-sass');
const sassFunctions = require('./sass');

const updateSheet = (req, res) => {
  const data = req.body.data;
  const id = req.body.id;

  const dataString = sassFunctions.generateVariablesString(data);

  fs.writeFile(`public/tmp/export.scss`, dataString, err => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log('sass file created');
  });

  fs.readFile(path.resolve(__dirname, 'partial', 'style.scss'), 'utf-8', (err, data) => {
    if (err) throw err;

    // TEST TO SEE WHAT THE FILE LOOKS LIKE
    // fs.writeFile('test.scss', dataString + '\n' + data, err => {
    //   if (err) throw err;
    // });

    sass.render(
      {
        data: dataString + '\n' + data,
        includePaths: [path.resolve(__dirname, '../node_modules/carbon-components')],
      },
      (err, result) => {
        if (err) throw err;

        fs.writeFile(`public/tmp/${id}.css`, result.css, err => {
          if (err) {
            console.log(err);
            throw err;
          }
          console.log('new file');

          res.json({
            success: 'done',
            route: `/tmp/${id}.css`,
          });
        });
      }
    );
  });
};

module.exports = {
  updateSheet,
};
