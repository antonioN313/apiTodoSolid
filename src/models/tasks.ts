export class Tasks {
    public id : Number;
    public task : String;
    public description : String;
    public taskDate : Date;
    public status : boolean;

    constructor(task:String,taskDescription:String,taskDate:Date,taskStatus:boolean) {
        this.task = task;
        this.description = taskDescription;
        this.taskDate = taskDate;
        this.status = taskStatus;
    }
}