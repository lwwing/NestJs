export class ResModel {
  constructor(code:0 | 1, data:object, msg:string) {
    this.code = code
    this.data = data
    this.msg = msg
  }

    readonly code: 0 | 1
    readonly data: object
    readonly msg: string
}

export class JwtPayload {
  constructor(id:string, username:string) {
    this.id = id
    this.username = username
  }

    readonly id:string
    readonly username: string
}
