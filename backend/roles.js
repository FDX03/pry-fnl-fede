// roles.js
const roles = {
  admin: {
    can: ["read:any", "write:any", "delete:any"],
  },
  user: {
    can: ["read:own", "write:own"],
  },
};

module.exports = roles;
