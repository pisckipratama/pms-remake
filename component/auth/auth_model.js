import connection from '../../lib/config/connection';

const tableUsers = 'td_users';

const loginUserModel = async (email, result) => {
  const queryText = `SELECT email, password FROM ${tableUsers} WHERE email=$1`;
  const values = [email];

  try {
    const { rows } = await connection.query(queryText, values);
    console.log(rows);
    result(rows, null);
  } catch (error) {
    console.error(error);
    result(null, error);
  }
};

export { loginUserModel };
