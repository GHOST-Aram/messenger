import { GenericDataAccess } from "../z-library/bases/generic-data-access";
import { Message, MessageModel } from "./model";

export class DataAccess extends GenericDataAccess<MessageModel, Message>{
    constructor(model: MessageModel){
        super(model)
    }
}