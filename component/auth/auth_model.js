import connection from '../../lib/config/connection';

const tableUsers = 'td_users';

const loginUserModel = async (email, password, result) => {
  const queryText = `SELECT email FROM ${tableUsers} WHERE email=$1`;
  const values = [email];

  try {
    const { rows } = await connection.query(queryText, values);
    console.log(rows);
    result('ok', null);
  } catch (error) {
    console.error(error);
    result(null, error);
  }
};

export { loginUserModel };
