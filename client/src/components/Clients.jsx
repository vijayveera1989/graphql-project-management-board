import React from "react";
import { gql, useQuery } from "@apollo/client";
import ClientRow from "./ClientRow.jsx";
import { GET_CLIENTS } from "../queries/clientQuery.jsx";
import Spinner from "./spinner.jsx";

function Clients() {
  const { loading, data, error } = useQuery(GET_CLIENTS);
  if (loading) return <Spinner />;
  if (error) return <div>Error....</div>;

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => {
              return <ClientRow key={client.id} client={client} />;
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Clients;
