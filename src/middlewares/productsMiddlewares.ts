import { Request, Response, NextFunction } from 'express';
import errors from '../errors/errors';

const validateName = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;

    if (!name) return res.status(400).json(errors.NAMEREQUIREERROR);

    if (typeof name != 'string') return res.status(422).json(errors.NAMETYPEERROR);

    if (name.length < 2) return res.status(422).json(errors.NAMELENGHTERROR);

    next();
};

const validateAmount = (req: Request, res: Response, next: NextFunction) => {
    const { amount } = req.body;

    if (!amount) return res.status(400).json(errors.AMOUNTREQUIREERROR);

    if (typeof amount != 'string') return res.status(422).json(errors.AMOUNTTYPEERROR);

    if (amount.length < 2) return res.status(422).json(errors.AMOUNTLENGHTERROR);

    next();
}

export default { validateName, validateAmount };
