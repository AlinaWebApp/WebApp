import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

export const getHash = async (password: string, saltRounds: number) => {
  return bcrypt.hash(password, await bcrypt.genSalt(saltRounds));
};

export const areHashesEqual = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => bcrypt.compare(password, hashedPassword);

export const getUsernameHash = (username: string): string => {
  return crypto.createHash('sha256').update(username).digest('hex');
};
