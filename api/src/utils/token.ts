import jwt, { type SignOptions } from "jsonwebtoken";

interface TokenPayload {
  id: number;
  email: string;
  iat?: number;
  exp?: number;
}

export function generateToken(payload: TokenPayload): string {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  } as SignOptions);
}

export function verifyToken(token: string): TokenPayload {
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET,
  ) as TokenPayload;

  return decoded;
}