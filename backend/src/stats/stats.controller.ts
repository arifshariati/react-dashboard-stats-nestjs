import { Controller, Get, Req } from '@nestjs/common';
import {Request} from "express";
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
    constructor(
        private readonly statsService: StatsService,
        
        ){}

    // Get All Stats
    // **************************************************** //
    @Get('all')
    async getAllStats(@Req() req: Request) {

        return await this.statsService.getAllStats(req);

    }
}
