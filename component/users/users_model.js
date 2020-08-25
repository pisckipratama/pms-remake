import connection from '../../lib/config/connection';

const tableUser = 'td_users';

const getAllUsersModel = async (result) => {
  const queryUsers = `SELECT * FROM ${tableUser}`;
  try {
    const { rows } = await connection.query(queryUsers);
    const dbResponse = rows;
    result(dbResponse, null);
  } catch (error) {
    console.error(error);
    result(null, error);
  }
};

export { getAllUsersModel };
