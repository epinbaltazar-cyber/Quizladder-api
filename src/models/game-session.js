module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'GameSession',
    {
      session_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      set_id: { type: DataTypes.INTEGER, allowNull: false },
      host_id: { type: DataTypes.INTEGER, allowNull: false },
      join_pin: { type: DataTypes.STRING(6), allowNull: false, unique: true },
      status: { type: DataTypes.STRING(20), allowNull: false, defaultValue: 'LOBBY' },
      max_players: { type: DataTypes.INTEGER, defaultValue: 4 },
      started_at: { type: DataTypes.DATE },
      ended_at: { type: DataTypes.DATE },
    },
    { tableName: 'game_sessions', timestamps: true, createdAt: 'created_at', updatedAt: false }
  );