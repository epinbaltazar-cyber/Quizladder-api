module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'User',
    {
      user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      school_id: { type: DataTypes.STRING(20), allowNull: false, unique: true },
      full_name: { type: DataTypes.STRING(100), allowNull: false },
      email: { type: DataTypes.STRING(150), allowNull: false, unique: true },
      role: { type: DataTypes.STRING(20), allowNull: false, defaultValue: 'PLAYER' },
    },
    { tableName: 'users', timestamps: true, createdAt: 'created_at', updatedAt: false }
  );