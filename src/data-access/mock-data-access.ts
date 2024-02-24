import { DataAccess } from "./data-access";
import { MessageModel } from "./model";

export class MockDataAccess extends DataAccess{
    constructor(model: MessageModel){
        super(model)
    }
}