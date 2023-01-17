
export class Credenciales{
    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    get getUsername() {return this.username;}
    get getEmail() {return this.email;}

    set setUsername(username) {this.username = username;}
    set setEmail(email) {this.email = email;}
}