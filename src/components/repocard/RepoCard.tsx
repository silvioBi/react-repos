import * as React from "react";
import { Badge, Box, Link } from "@chakra-ui/react";

interface RepoCardProps {
  name: string;
  stargazerCount: number;
  forkCount: number;
  description: string;
  url: string;
}

/**
 * Displays a repository showing its name, stars and forks number.
 */
function RepoCard({
  name,
  stargazerCount,
  forkCount,
  description,
  url,
}: RepoCardProps): JSX.Element {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal" mr="1">
            {formatter.format(stargazerCount)} ⭐️ STARS
          </Badge>
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {formatter.format(forkCount)} 🍴 FORKS
          </Badge>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          <Link href={url}>{name}</Link>
        </Box>
        <Box as="span" color="gray.600" fontSize="sm">
          {description}
        </Box>
      </Box>
    </Box>
  );
}

export default RepoCard;
