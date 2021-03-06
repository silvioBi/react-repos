import * as React from "react";
import { ApolloError } from "@apollo/client/errors";
import { Spinner, Center } from "@chakra-ui/react";

interface QueryResultDisplayProps {
  loading?: boolean;
  hasData?: boolean;
  children?: React.ReactNode;
  error?: ApolloError;
}

/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
function QueryResultDisplay({
  loading = false,
  hasData = false,
  children = null,
  error = null,
}: QueryResultDisplayProps): JSX.Element {
  if (error != null) {
    // [sb] TODO display the error in a nicer way
    return <p>Error: {error.message}</p>;
  }
  if (loading) {
    return (
      <Center height="100vh">
        <Spinner />
      </Center>
    );
  }
  if (!hasData) {
    // [sb] TODO display something nicer
    return <p>Nothing to show...</p>;
  }
  return children as JSX.Element;
}

export default QueryResultDisplay;
