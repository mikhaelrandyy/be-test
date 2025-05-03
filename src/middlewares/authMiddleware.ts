import { Request, Response, NextFunction } from 'express';
import { verifyJWT } from '../utils/auth.utils';

export function authenticateJWT(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).send('Token is required');
  
  try {
    req.user = verifyJWT(token);
    next();
  } catch (err) {
    return res.status(401).send('Invalid or expired token');
  }
}
