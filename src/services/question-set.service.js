'use strict';

const questionSetRepo = require('../repositories/question-set.repository');
const { notFound, forbidden, badRequest } = require('../errors/app-error');
/**
 * Question Set Service
 */
const getAllQuestionSets = async (userId) => {
  return await questionSetRepo.findAllByUser(userId);
};

const getQuestionSetById = async (setId, userId) => {
  const set = await questionSetRepo.findById(setId);
  if (!set) {
    throw notFound('Question set not found');
  }
  if (set.ownerId !== userId) {
    throw forbidden('You do not have access to this question set');
  }
  return set;
};

const createQuestionSet = async (data, userId) => {
  if (!data.title || !data.questions || data.questions.length === 0) {
    throw badRequest('Title and at least one question are required');
  }
  return await questionSetRepo.create({ ...data, ownerId: userId });
};

const updateQuestionSet = async (setId, data, userId) => {
  const set = await getQuestionSetById(setId, userId);
  return await questionSetRepo.update(set.id, data);
};

const deleteQuestionSet = async (setId, userId) => {
  const set = await getQuestionSetById(setId, userId);
  return await questionSetRepo.delete(set.id);
};

module.exports = {
  getAllQuestionSets,
  getQuestionSetById,
  createQuestionSet,
  updateQuestionSet,
  deleteQuestionSet,
};