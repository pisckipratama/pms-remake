import { loginUserModel } from './auth_model';

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    loginUserModel(email, password, async (result, err) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      return res.status(200).json(result);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

export { loginUser };
