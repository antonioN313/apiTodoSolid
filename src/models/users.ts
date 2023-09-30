export class User {
    public id : Number;

    public name : String;
    public email : String;
    public password : String;

    constructor(UserName : String, UserEmail : String, UserPassword : String) {
      this.name = UserName;
      this.email = UserEmail;
      this.password = UserPassword;     
    }
}