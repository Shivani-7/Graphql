const { UserList, StrategyList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    // USER RESOLVERS
    employees: () => {
      return UserList;
    },
    employee: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },

    // MOVIE RESOLVERS
    strategies: () => {
      return StrategyList;
    },
    strategy: (parent, args) => {
      const name = args.name;
      const strategy = _.find(StrategyList, { name });
      return strategy;
    },
  },
  Employee: {
    strategies: () => {
      return _.filter(
        StrategyList,
        (strategy) =>
          strategy.year >= 2000 && movie.yearOfPublication <= 2010
      );
    },
  },

  Mutation: {
    createEmployee: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },

    updateEmployeename: (parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });

      return userUpdated;
    },

    deleteEmployee: (parent, args) => {
      const id = args.id;
      _.remove(UserList, (user) => user.id === Number(id));
      return null;
    },
  },
};

module.exports = { resolvers };