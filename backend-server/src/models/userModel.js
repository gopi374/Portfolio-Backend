const db = require('../config/database');

class UserModel {
    static async createUser({ name, email, message }) {
        const query = 'INSERT INTO users (name, email, message) VALUES (?, ?, ?)';
        const [result] = await db.execute(query, [name, email, message]);
        return { id: result.insertId, name, email, message };
    }

    static async findUsers() {
        const query = 'SELECT * FROM users';
        const [rows] = await db.execute(query);
        return rows;
    }
}

module.exports = UserModel;