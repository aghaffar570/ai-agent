'use client';

import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';

export default function DashboardView() {
  const trpc = useTRPC();
  const { data } = useQuery(
    trpc.hello.queryOptions({
      text: 'hellow friend!',
    })
  );

  return (
    <div className=''>
      <h1>{data?.greeting}</h1>
    </div>
  );
}
