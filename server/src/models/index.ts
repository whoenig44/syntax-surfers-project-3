import sequelize from '../config/connection.js'
import { UserFactory, User as UserModel } from './user.js';
import { NoteFactory, Note as NoteModel } from './note.js';



const User = UserFactory(sequelize);
const Note = NoteFactory(sequelize);

UserModel.associate();
NoteModel.associate();

export { User, Note };
