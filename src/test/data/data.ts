import { mongo } from "mongoose";

export const postData = {
    sender: new mongo.ObjectId(),
    recipient: new mongo.ObjectId(),
    content: 'Lorem ipsum'
}

export const invalidData = {
    sender: new mongo.ObjectId(),
    content: ''
}

export const patchData = {
    status: 'deleted-by-sender'
}