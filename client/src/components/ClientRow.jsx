import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENT_MUTATION } from "../mutations/mutations";
import { GET_CLIENTS } from "../queries/clientQuery";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT_MUTATION, {
    variables: {
      id: client.id,
    },
    refetchQueries: [{ query: GET_CLIENTS }], // one more way it to update the cache
  });
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
