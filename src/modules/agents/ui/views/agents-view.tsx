'use client';

import ErrorState from '@/components/error-state';
import LoadingState from '@/components/loading-state';
import { useTRPC } from '@/trpc/client';
import { useSuspenseQuery } from '@tanstack/react-query';

const AgentsView = () => {
  const trpc = useTRPC();
  // acts as a fetch on the client side. now useSuspenseQuery knows the result data format
  // so handling isError and isLoading can be removed, and handled separately
  // const { data, isLoading, isError } = useQuery(trpc.agents.getMany.queryOptions());

  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  console.log(data);
  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default AgentsView;

export const AgentsViewLoading = () => {
  return (
    <LoadingState
      title='Loading Agents'
      description='This may take a few seconds'
    />
  );
};

export const AgentsViewError = () => {
  return (
    <ErrorState
      title='Failed to load Agents'
      description='Please try again later'
    />
  );
};
