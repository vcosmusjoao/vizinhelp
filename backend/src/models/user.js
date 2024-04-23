class User {
  constructor(userData) {
    this.name= userData.name;
    this.username = userData.preferred_username;
    this.givenName = userData.given_name;
    this.familyName= userData.family_name;
    this.email= userData.email;

  }
}

exports.User = User;