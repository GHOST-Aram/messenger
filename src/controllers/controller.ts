import { DataAccess } from "../data-access/data-access";
import { GenericController } from "../z-library/bases/generic-controller";
import { Response, Request, NextFunction } from "express";
export class Controller extends GenericController<DataAccess>{
    constructor(dataAccess: DataAccess){
        super(dataAccess)
    }

    public  getBySenderId = async(req: Request, res: Response, next: NextFunction) =>{
        const sender = req.params.id
        const pagination = this.paginate(req)

        try{
            const messages =  await this.dataAccess.findBySenderId(sender, pagination)

            this.respondWithFoundResource(messages, res)
        } catch (error) {
            next(error)
        }
    }
}