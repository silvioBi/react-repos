import * as React from "react";
import { Button, Center, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useReposQuery } from "../../codegen/generated";
import QueryResultDisplay from "../../components/queryresultdisplay/QueryResultDisplay";
import RepoCard from "../../components/repocard/RepoCard";

/**
 * Repos Page is the home page.
 * We display a list of repos fetched with useQuery with the REPOS query
 */
function Repos(): JSX.Element {
  const [isLoadingMore, setIsloadingMore] = useState(false);
  // [sb] TODO to implement search add query:whatever to {options: query}
  const { error, loading, data, fetchMore } = useReposQuery();

  const repos = (data?.search?.edges ?? [])
    .map((edge) =>
      edge?.node?.__typename === "Repository" ? edge?.node : null
    )
    .filter(Boolean);

  return (
    <QueryResultDisplay error={error} loading={loading} hasData={data != null}>
      <Center>
        <Stack spacing="3" m="10" maxWidth="700">
          <Heading mb="8">✨ Cool React Repos</Heading>
          {repos.map((repo) => (
            <RepoCard
              key={repo.id}
              name={repo.name}
              stargazerCount={repo.stargazerCount}
              forkCount={repo.forkCount}
              description={repo.description}
              url={repo.url}
            />
          ))}
          <Button
            isLoading={isLoadingMore}
            loadingText="Loading..."
            colorScheme="teal"
            variant="outline"
            onClick={async () => {
              setIsloadingMore(true);
              await fetchMore({
                variables: { after: data?.search?.pageInfo?.endCursor },
              });
              setIsloadingMore(false);
            }}
            disabled={!data?.search?.pageInfo?.hasNextPage}
          >
            Load more
          </Button>
        </Stack>
      </Center>
    </QueryResultDisplay>
  );
}

export default Repos;
