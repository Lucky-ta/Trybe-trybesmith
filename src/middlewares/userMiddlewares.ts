import { Request, Response, NextFunction } from 'express';
import errors from '../errors/userErrors';

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;

  if (!username) return res.status(400).json(errors.USERNAMEREQUIREERROR);

  if (typeof username !== 'string') return res.status(422).json(errors.USERNAMETYPEERROR);

  if (username.length <= 2) return res.status(422).json(errors.USERNAMELENGHTERROR);

  next();
};

const validateClass = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;

  if (!classe) return res.status(400).json(errors.CLASSREQUIREDERROR);

  if (typeof classe !== 'string') return res.status(422).json(errors.CLASSTYPEERROR);

  if (classe.length <= 2) return res.status(422).json(errors.CLASSLENGTHERROR);

  next();
};

const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;

  if (level < 1) return res.status(422).json(errors.LEVELLENGTHERROR);
    
  if (!level) return res.status(400).json(errors.LEVELREQUIREDERROR);

  if (typeof level !== 'number') return res.status(422).json(errors.LEVELTYPEERROR);

  next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) return res.status(400).json(errors.PASSWORDREQUIREDERROR);

  if (typeof password !== 'string') return res.status(422).json(errors.PASSWORDTYPEERROR);

  if (password.length < 8) return res.status(422).json(errors.PASSWORDLENGHTERROR);

  next();
};

export default {
  validateUsername,
  validateClass,
  validateLevel,
  validatePassword,
};