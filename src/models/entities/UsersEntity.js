const EntitySchema = require("typeorm").EntitySchema;

const { role_user } = require("../../consts");

module.exports = new EntitySchema({
  name: "Users",
  tableName: "users",
  columns: {
    // Meta : Selector

    id: {
      type: "int",
      primary: true,
      generated: true,
    },

    // ---------------------------------------- //
    // Meta : Timeline

    create_date: {
      type: "timestamp",
      default: () => {
        return "now()";
      },
    },

    // ---------------------------------------- //
    //-> Main Content

    // Basic
    name: {
      type: "varchar",
      length: 50,
    },
    // foto: {
    //   type: "text",
    //   nullable: true,
    // },

    // Authorization
    email: {
      type: "varchar",
      length: 30,
      unique: true,
    },
    password: {
      type: "varchar",
    },

    // Auth
    role: {
      type: "enum",
      enum: role_user,
      default: role_user.reverse()[0],
    },

    // Change
    // is_alumni: {
    //   type: "boolean",
    //   default: false,
    // },
  },
});
