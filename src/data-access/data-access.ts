import { GenericDataAccess } from "../z-library/bases/generic-data-access";
import { HydratedMessageDoc, Message, MessageModel } from "./model";
import { Paginator } from "../z-library/HTTP/http-response";

export class DataAccess extends GenericDataAccess<MessageModel, Message>{
    constructor(model: MessageModel){
        super(model)
    }

    public findBySenderId = async( senderId: string, paginator: Paginator 
        ): Promise<HydratedMessageDoc []> =>{
        return await this.model.find({ sender : senderId })
    }
}