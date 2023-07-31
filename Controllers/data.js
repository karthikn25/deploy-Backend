import { ObjectId, client } from "../db.js";



export function Adddata(data){
    return client
    .db("guvi")
    .collection("data")
    .insertOne(data)
}

export function Getdata(req){
    return client
    .db("guvi")
    .collection("data")
    .find(req.params)
    .toArray()
}

export function GetDataById(id){
    return client
    .db("guvi")
    .collection("data")
    .findOne({_id:new ObjectId(id)})
}

export function EditData(id,updatedData){
    return client
    .db("guvi")
    .collection("data")
    .findOneAndUpdate({_id:new ObjectId(id)},{$set:updatedData});
}

export function DeleteData(id){
    return client
    .db("guvi")
    .collection("data")
    .findOneAndDelete({_id:new ObjectId(id)})
}