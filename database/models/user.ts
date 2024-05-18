/* eslint-disable no-unused-vars */
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const init_user = (sequelize, Types) => {
    class User extends Model {}
    User.init(
      {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        phone: DataTypes.STRING
      },
      {
        sequelize,
        modelName: "users",
      }
    );
  
    return User;
  };

export default init_user(connection, DataTypes);

