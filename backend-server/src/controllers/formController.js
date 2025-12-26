const UserModel = require('../models/userModel');

class FormController {
    async submitForm(req, res) {
        const { name, email, message } = req.body;
        try {
            const user = await UserModel.createUser({ name, email, message });
            res.status(201).json({ message: 'User created successfully', user });
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    }

    async getFormData(req, res) {
        try {
            const users = await UserModel.findUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving users', error });
        }
    }
}

module.exports = FormController;