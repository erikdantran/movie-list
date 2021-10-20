var pool = require('./connection.js')

module.exports.get = () => {
  return new Promise((resolve, reject) => {
    const q = 'SELECT * FROM movies;'
    pool.query(q, (err, results) => {
      if (err) { reject(err) }
      else { resolve(results) }
    });
  });
};

module.exports.post = (data) => {
  const { title } = data;
  return new Promise((resolve, reject) => {
    const q = `INSERT INTO movies (title) VALUE ('${title}');`;
    pool.query(q, (err, results) => {
      if (err) { reject(err) }
      else { resolve(results) }
    });
  });
};