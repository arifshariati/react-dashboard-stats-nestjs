import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import {Request} from "express";

@Injectable()
export class StatsService {

    constructor(
        private readonly userService: UserService
    ){}

    async getAllStats(req:Request) {

        let options = this.generateUserQuery(req);
        let total = await this.userService.count({});
        let count = await this.userService.count(options);
        let per = Number(((count/total) * 100).toFixed(2));
        return {
            total,
            count,
            per
        }
    }

    private generateUserQuery = (req: Request) => {

        let options = {};
        let and = [];
        let or = [];
    
        if(req.query.gender){
            and.push({gender:req.query.gender});
        };
    
        if(or.length >0 && and.length > 0){
            options = {
                $or: or,
                $and: and
            };
        }else{
    
            if(or.length > 0){
                options = {
                    $or: or
                };
            }
            
            if(and.length > 0){
                options = {
                    $and: and
                };
            }
        }
        
        return options;
    };
}
