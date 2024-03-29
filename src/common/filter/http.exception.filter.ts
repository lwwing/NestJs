import {
  Catch,
  ArgumentsHost,
  ExceptionFilter,
  HttpException
} from '@nestjs/common'
import { Request, Response } from 'express'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const res = ctx.getResponse<Response>()
    const req = ctx.getRequest<Request>()
    const status = exception.getStatus()
    const data = exception.getResponse()

    console.log('HttpException过滤器')
    console.log(exception)
    res.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: req.url,
      data
    })
  }
}
