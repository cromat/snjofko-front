export class SignupCommand {

  constructor(
    public username: string,
    public password: string,
    public confirmedPassword: string,
    public fullName: string,
    public email: string
  ) {
  }


}
