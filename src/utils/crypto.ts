import * as crypto from 'crypto'

/**
 * Encrypt password
 * @param password 密码
 * @param salt 密码盐，UserId
 */
export function encryptoPassword(password: string, salt: string): string {
  if (!password || !salt) {
    return ''
  }
  const tempSalt = Buffer.from(salt, 'base64')
  return (
    // 10000 代表迭代次数 16代表长度
    crypto.pbkdf2Sync(password, tempSalt, 10000, 16, 'sha1').toString('base64')
  )
}
