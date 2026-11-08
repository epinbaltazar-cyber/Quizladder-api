const { matchedData } = require('express-validator');
const questionSetService = require('../services/question-set.service');

function toJson(questionSet) {
  return {
    id: questionSet.set_id,
    title: questionSet.title,
    subject: questionSet.subject,
    is_public: questionSet.is_public,
    host_id: questionSet.host_id,
    created_at: questionSet.created_at,
  };
}

async function list(req, res, next) {
  try {
    const questionSets = await questionSetService.getAllQuestionSets(req.user.id);
    res.status(200).json(questionSets.map(toJson));
  } catch (err) {
    next(err);
  }
}

async function get(req, res, next) {
  try {
    const { id } = matchedData(req);
    const questionSet = await questionSetService.getQuestionSetById(id, req.user.id);
    res.status(200).json(toJson(questionSet));
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const data = matchedData(req, { locations: ['body'] });
    const questionSet = await questionSetService.createQuestionSet(data, req.user.id);
    res.status(201).json(toJson(questionSet));
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const { id } = matchedData(req, { locations: ['params'] });
    const changes = matchedData(req, { locations: ['body'] });
    const questionSet = await questionSetService.updateQuestionSet(id, changes, req.user.id);
    res.status(200).json(toJson(questionSet));
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const { id } = matchedData(req);
    await questionSetService.deleteQuestionSet(id, req.user.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}

module.exports = { list, get, create, update, remove };