const UserList = [
    {
      id: 1,
      name: "John",
      username: "john",
      age: 20,
      entity: "DESCO",
      teamMember: [
        {
          id: 2,
          name: "Pedro",
          username: "PedroTech",
          age: 20,
          entity: "DESCOLLC",
        },
        {
          id: 5,
          name: "Kelly",
          username: "kelly2019",
          age: 5,
          entity: "DESCO",
        },
      ],
    },
    {
      id: 2,
      name: "Pedro",
      username: "PedroTech",
      age: 20,
      entity: "DESCOLLC",
    },
    {
      id: 3,
      name: "Sarah",
      username: "cameron",
      age: 25,
      entity: "DESCOLLP",
      teamMember: [
        {
          id: 2,
          name: "Pedro",
          username: "PedroTech",
          age: 20,
          entity: "DESCOLLC",
        },
      ],
    },
    {
      id: 4,
      name: "Rafe",
      username: "rafe123",
      age: 60,
      entity: "DESCOLLC",
    },
    {
      id: 5,
      name: "Kelly",
      username: "kelly2019",
      age: 5,
      entity: "Arcesiun",
    },
  ];
  
  const StrategyList = [
    {
      id: 1,
      name: "Test",
      year: 2019,
      isActive: true,
    },
    {
      id: 2,
      name: "ABC",
      year: 2007,
      isActive: true,
    },
    {
      id: 3,
      name: "Sync",
      year: 2009,
      isActive: true,
    },
  ];
  
  module.exports = { UserList, StrategyList };