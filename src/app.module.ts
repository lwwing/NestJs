import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module'
import { HelloModule } from './modules/hello/hello.module'

import { Module } from '@nestjs/common'
import { ExceptionController } from './modules/exception/exception.controller'

import { TypeOrmModule } from '@nestjs/typeorm'
import { DyModule } from './modules/dy/dy.module'

@Module({
  imports: [
    HelloModule,
    UserModule,
    AuthModule,
    DyModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '120.92.107.79',
      port: 3306,
      username: 'root',
      password: '@sunway2020',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
      charset: 'utf8mb4'

    })
  ],
  controllers: [ExceptionController]
})
export class AppModule {
  // constructor(private readonly connection: Connection) {}
}
