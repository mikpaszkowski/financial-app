import axios from "axios";

class DBApiService {
  baseURL;
  resource;
  action;

  constructor(resource, baseURL, action) {
    if (!resource) throw new Error("Resource is not provided.");
    this.resource = resource;
    this.baseURL = baseURL;
    this.action = action;
  }

  getUrl(id = "") {
    return `${this.baseURL}/${this.resource}/${this.action}/${id}`;
  }

  handleErrors(err) {
    console.log({ msg: err });
  }
}

class USERSApiService extends DBApiService {
  constructor() {
    super("users", process.env.VUE_APP_DB_API_URL, "login");
  }

  async logIn(data) {
    if (JSON.stringify(data) === "{}") throw Error("Data object not provided.");
    console.log(
      `this.baseURL: ${this.baseURL}, this.resource: ${this.resource}`
    );
    console.log(data);
    try {
      const user = await axios.post(this.getUrl(), {
        email: data.email,
        password: data.password
      });
      if (!user) {
        this.handleErrors("User not found.");
      }
      return user;
    } catch (err) {
      this.handleErrors(err);
    }
  }
}

export const $dbApi = {
  users: new USERSApiService()
};
