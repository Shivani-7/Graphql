const { gql } = require("apollo-server");

const typeDefs = gql`
  type Employee {
    id: ID!
    name: String!
    username: String!
    age: Int!
    entity: Entity!
    teamMember: [Employee]
    strategies: [Strategy]
  }

  type Strategy {
    id: ID!
    name: String!
    year: Int!
    isActive: Boolean!
  }

  type Query {
    employees: [Employee!]!
    employee(id: ID!): Employee!
    strategies: [Strategy!]!
    strategy(name: String!): Strategy!
  }

  input CreateEmployeeInput {
    name: String!
    username: String!
    age: Int!
    entity: Entity= BRAZIL
  }

  input UpdateEmployeenameInput {
    id: ID!
    newEmployeename: String!
  }

  type Mutation {
    createEmployee(input: CreateEmployeeInput!): Employee
    updateEmployeename(input: UpdateEmployeenameInput!): Employee
    deleteEmployee(id: ID!): Employee
  }

  enum Entity {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
    UKRAINE
  }
`;

module.exports = { typeDefs };