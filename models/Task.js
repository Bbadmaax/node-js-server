import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title : {type : String, required : true},
    description : String,
    status : {
        type : String,
        enum : ['pending', 'in progress', 'complated'],
        default : 'pending'
    },
    dueDate : Date,
    createdBy : {
        type : mongoose.Schema.Types.ObjectId, // nooca ID-ga userka 
        ref : 'User' , // xiriir la leh model-ka user
        required : true // waa in uu jira cid abuurtay 
    }, 
}, {timestamps : true});

export default mongoose.model('task', TaskSchema)


// Hadii aadan samesan cretedby : ku darin schema waxa luminaysa xiriirka u dhexeeyey
//  task model iyo user model 
// taas macnaheeda waa in aadan si sax ah u heli karin task uu abuuray user gaar ah 