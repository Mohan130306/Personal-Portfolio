import { useQuery } from "@tanstack/react-query";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  fork: boolean;
}

const fetchGitHubRepos = async (username: string): Promise<GitHubRepo[]> => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=50`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const repos: GitHubRepo[] = await response.json();
  
  // Filter out forked repos and sort by stars
  return repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count);
};

export const useGitHubRepos = (username: string = "Mohan130306") => {
  return useQuery({
    queryKey: ["github-repos", username],
    queryFn: () => fetchGitHubRepos(username),
    staleTime: 1000 * 60 * 10, // 10 minutes
    retry: 2,
  });
};
