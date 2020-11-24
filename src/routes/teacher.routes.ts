import { Router } from 'express';
import { getRepository } from 'typeorm';
import { validate } from 'class-validator';
import Teacher from '../models/Teacher';

const teacherRouter = Router();

teacherRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Teacher);
    const { key, name, phone, email } = request.body;

    const teacher = repo.create({
      key,
      name,
      phone,
      email,
    });

    const errors = await validate(teacher);

    if (errors.length === 0) {
      const res = await repo.save(teacher);
      return response.status(201).json(res);
    }
    return response.status(400).json(errors);
  } catch (err) {
    console.log('err.message : >> ', err.message);
    return response.status(400).send();
  }
});

export default teacherRouter;
