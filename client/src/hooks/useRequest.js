import { useQuery } from "@apollo/react-hooks";

const useRequest = (gqlQuery, id)  => {
  const { data, loading, error } = useQuery(gqlQuery, {
    variables: { id },
  });

  return { data, loading, error };
}

export default useRequest;