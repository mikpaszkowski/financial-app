import axios from "axios";

class DBApiService {
  baseURL;
  resource;

  constructor(resource, baseURL) {
    if (!resource) throw new Error("Resource is not provided.");
    this.resource = resource;
    this.baseURL = baseURL;
  }

  getUrl(action, id = "") {
    console.log(this.resource);
    return `${this.baseURL}/${this.resource}/${action}/${id}`;
  }

  handleErrors(err) {
    console.log({ msg: err });
  }

  checkIntDataType(intNum) {
    if (!Number.isInteger(intNum))
      throw new Error("Integer data type is not provided.");
  }

  checkObjDataType(objectData) {
    if (JSON.stringify(objectData) === "{}")
      throw new Error("Provided object should not be empty.");
    if (!typeof objectData && !(objectData instanceof Object)) {
      throw new Error("Provided data should be object data type");
    }
  }
}

class USERSApiService extends DBApiService {
  constructor() {
    super("users", process.env.VUE_APP_DB_API_URL);
  }

  async logIn(data) {
    this.checkObjDataType(data);
    try {
      const user = await axios.post(this.getUrl("login", ""), data);
      if (!user) {
        this.handleErrors("User not found.");
      }
      return user;
    } catch (err) {
      this.handleErrors(err);
    }
  }

  async signUp(data) {
    this.checkObjDataType(data);
    try {
      const user = await axios.post(this.getUrl("signup", ""), {
        email: data.email,
        password: data.password
      });
      if (!user) {
        this.handleErrors("User sign up failure.");
      }
      return user;
    } catch (err) {
      this.handleErrors(err);
    }
  }
  async find(id) {
    this.checkIntDataType(id);
    try {
      const user = await axios.get(this.getUrl("findUser", id));
      if (!user) {
        this.handleErrors("User not found.");
      }
      return user;
    } catch (err) {
      this.handleErrors(err);
    }
  }

  async update(id) {
    this.checkIntDataType(id);
    try {
      const user = await axios.get(this.getUrl("update", id));
      if (!user) {
        this.handleErrors("User not found.");
      }
      return user;
    } catch (err) {
      this.handleErrors(err);
    }
  }

  async delete(id) {
    this.checkIntDataType(id);
    try {
      const user = await axios.delete(this.getUrl("delete", id));
      if (!user) {
        this.handleErrors("User not found.");
      }
      return user;
    } catch (err) {
      this.handleErrors(err);
    }
  }
}

class TRANSACTIONSApiService extends DBApiService {
  constructor() {
    super("transactions", process.env.VUE_APP_DB_API_URL);
  }

  async findAllByUserId(id) {
    this.checkIntDataType(id);
    try {
      const transactions = await axios.get(this.getUrl("findAll", id));
      if (!transactions) {
        this.handleErrors("Transactions not found.");
      }
      return transactions;
    } catch (err) {
      this.handleErrors({ msg: err });
    }
  }
  async findOneById(id) {
    this.checkIntDataType(id);
    try {
      const transaction = await axios.get(this.getUrl("findOne", id));
      if (!transaction) {
        this.handleErrors("Transaction not found.");
      }
      return transaction;
    } catch (err) {
      this.handleErrors({ msg: err });
    }
  }

  async createTransaction(data) {
    this.checkObjDataType(data);
    try {
      const transaction = await axios.post(this.getUrl("create"), {
        amount: parseInt(data.amount),
        transactionType: data.transactionType,
        description: data.description,
        status: data.status,
        userId: data.userId
      });
      if (!transaction) {
        this.handleErrors("Transaction send/request failure.");
      }
      return transaction;
    } catch (err) {
      this.handleErrors({ msg: err });
    }
  }

  async updateTransaction(data, id) {
    this.checkIntDataType(id);
    this.checkObjDataType(data);
    try {
      const transaction = await axios.post(this.getUrl("edit", id), {
        amount: data.amount,
        transactionType: data.transactionType,
        description: data.description,
        status: data.status,
        userId: data.userId
      });
      if (!transaction) {
        this.handleErrors("Transaction send/request failure.");
      }
      return transaction;
    } catch (err) {
      this.handleErrors({ msg: err });
    }
  }
}

export const $dbApi = {
  users: new USERSApiService(),
  transactions: new TRANSACTIONSApiService()
};
