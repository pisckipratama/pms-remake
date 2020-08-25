import { getAllUsersModel } from './users_model';

const getAllUsers = async (_, res) => {
  try {
    getAllUsersModel(async (data, err) => {
      if (err) {
        return res.status(500).json(err);
      }

      return res.render('users/users_view', {
        nama: data[0].firstname,
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

export { getAllUsers };
