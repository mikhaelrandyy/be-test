import jwt from 'jsonwebtoken';

export function generateJWT(userId: string): string {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '1h' });
}

export function verifyJWT(token: string): any {
  return jwt.verify(token, process.env.JWT_SECRET!);
}
