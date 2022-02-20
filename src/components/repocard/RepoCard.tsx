import * as React from "react";

interface RepoCardProps {
  name: string;
  stargazerCount: number;
  forkCount: number;
}

/**
 * Displays a repository showing its name, stars and forks number.
 */
function RepoCard({
  name,
  stargazerCount,
  forkCount,
}: RepoCardProps): JSX.Element {
  // [sb] TODO display something nicer
  return (
    <div>
      <b>name:</b>
      {name}&nbsp;
      <b>stargazerCount:</b>
      {stargazerCount}&nbsp;
      <b>forkCount:</b>
      {forkCount}&nbsp;&nbsp;
    </div>
  );
}

export default RepoCard;
