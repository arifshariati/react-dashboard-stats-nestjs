import { forwardRef, Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';

@Module({
  imports:[
    forwardRef(()=>UserModule),
  ],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule {}
