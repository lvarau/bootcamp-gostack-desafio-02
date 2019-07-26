import User from '../models/User';

class UserController {
  /** Store users */
  async store(req, res) {
    /** veryfying email */
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }
    /** Get properties through Insomnia */
    const { id, name, email } = await User.create(req.body);

    /** Returning to Front-End */
    return res.json({
      id,
      name,
      email
    });
  }

  /** Update authenticated users */
  async update(req, res) {
    console.log(req.userId);
    return res.json({ ok: true });
  }
}

export default new UserController();
