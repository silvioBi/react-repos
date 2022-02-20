import * as React from "react";
import { useReposQuery } from "../../codegen/generated";
import QueryResultDisplay from "../../components/queryresultdisplay/QueryResultDisplay";
import RepoCard from "../../components/repocard/RepoCard";

/**
 * Repos Page is the home page.
 * We display a list of repos fetched with useQuery with the REPOS query
 */
function Repos(): JSX.Element {
  const { error, loading, data } = useReposQuery({
    variables: {
      // [sb] TODO this variable will be used for pagination
      after: null,
      // [sb] TODO once implemented search add query:whatever to the query text
      query: "query:react topic:react sort:stars-desc",
    },
  });

  const repos = (data?.search?.edges ?? [])
    .map((edge) =>
      edge?.node?.__typename === "Repository" ? edge?.node : null
    )
    .filter(Boolean);

  return (
    <QueryResultDisplay error={error} loading={loading} hasData={data != null}>
      {repos.map((repo) => (
        <RepoCard
          key={repo.id}
          name={repo.name}
          stargazerCount={repo.stargazerCount}
          forkCount={repo.forkCount}
        />
      ))}
    </QueryResultDisplay>
  );
}

export default Repos;
