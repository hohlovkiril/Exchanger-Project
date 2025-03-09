import * as bcrypt from 'bcrypt';

export async function hashPassword(plainText: string, salt?: number): Promise<string> {
  return await bcrypt.hash(plainText, salt ? salt : 10)
}