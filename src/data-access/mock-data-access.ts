import { DataAccess } from "./data-access";
import { HydratedMessageDoc, Message, MessageModel } from "./model";
import { postData } from "../test/data/data";

export class MockDataAccess extends DataAccess{
    constructor(model: MessageModel){
        super(model)
    }
    public createNew = jest.fn(async(data: Message
        ): Promise<HydratedMessageDoc>=>{
        return new Message(data)
    }) 

    public findByReferenceId =  jest.fn(async(refId: string
        ): Promise<HydratedMessageDoc| null> =>{
        if(refId === '64c9e4f2df7cc072af2ac9e0')
            return new Message(postData)

        return null
    })
}