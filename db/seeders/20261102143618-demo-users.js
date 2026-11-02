module.exports = {
  async up(queryInterface) {
    const db = queryInterface.sequelize;

    // 1. Find the parents created by an earlier seeder
    const [[host]] = await db.query("SELECT user_id FROM users WHERE school_id = '2099-0001'");
    const [[set]] = await db.query(
      "SELECT set_id FROM question_sets WHERE title = 'Library Orientation Basics'"
    );

    // 2. Insert a game that has ENDED
    await queryInterface.bulkInsert('game_sessions', [{
      set_id: set.set_id, 
      host_id: host.user_id, 
      join_pin: '418263', 
      status: 'CLOSED',
      started_at: new Date('2026-10-09T01:00:00Z'), 
      ended_at: new Date('2026-10-09T01:12:00Z'),
    }]);
    
    // 3. Then insert its players, and whatever your game stores for each of them[cite: 12]
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('game_sessions', { join_pin: '418263' }, {});
  }
};