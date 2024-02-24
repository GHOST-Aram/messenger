import { DataAccess } from "./data-access";
import { HydratedMessageDoc, Message, MessageModel } from "./model";

export class MockDataAccess extends DataAccess{
    constructor(model: MessageModel){
        super(model)
    }
    public createNew = jest.fn(async(data: Message
        ): Promise<HydratedMessageDoc>=>{
        return new Message(data)
    }) 
}