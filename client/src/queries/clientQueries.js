import { gql } from "@apollo/client";
export const GET_CLIENTS = gql`
  {
    clients {
      id
      name
      email
      phone
    }
  }
`;
