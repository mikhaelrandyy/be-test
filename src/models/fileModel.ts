import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL!);

const File = sequelize.define('File', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  filePath: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default File;
