import models from '../models';

const getLoginPage = (_, res) => {
  res.render('views/auth_view', { name: 'Piscki Pratama', title: 'PMS Remake' });
};

const postLoginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    loginUserModel(email, (data, err) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      console.log(data, 'ini data di controller');
      if (data.length < 1 || data[0].password !== password) {
        return res.redirect('/login');
      }

      res.redirect('/dashboard');
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

export { postLoginUser, getLoginPage };
