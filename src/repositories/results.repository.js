'use strict';

async function findFinishedGamePlayers(since) {
  const db = global.db; // or your database query connection pool instance
  const sql = `
    SELECT 
      s.join_pin AS session_code, 
      s.started_at, 
      s.ended_at,
      u.school_id, 
      p.nickname, 
      p.score,
      (SELECT COUNT(*) FROM answers a WHERE a.player_id = p.player_id) 
        = (SELECT COUNT(*) FROM questions q WHERE q.set_id = s.set_id) AS completed
    FROM game_sessions s
    JOIN players p ON p.session_id = s.session_id
    JOIN users u ON u.user_id = p.user_id
    WHERE s.status = 'CLOSED'
      AND (CAST(:since AS timestamptz) IS NULL OR s.ended_at > CAST(:since AS timestamptz))
  `;
  
  // Execute your query using your project's database wrapper
  // const results = await db.query(sql, { replacements: { since } });
  // return results;
}

module.exports = {
  findFinishedGamePlayers,
};