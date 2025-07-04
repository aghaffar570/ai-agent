'use client';

import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';
import { PanelLeftCloseIcon, PanelLeftIcon, SearchIcon } from 'lucide-react';
import DashboardCommand from './dashboard-command';
import { useEffect, useState } from 'react';

const DashboardNavbar = () => {
  const { isMobile, state, toggleSidebar } = useSidebar();
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCommandOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);

    return () => {
      document.removeEventListener('keydown', down);
    };
  }, []);

  return (
    <>
      <DashboardCommand open={isCommandOpen} setOpen={setIsCommandOpen} />

      <nav className='flex px-4 gap-x-2 items-center py-4 border-b bg-background'>
        <Button className='size-9' variant='outline' onClick={toggleSidebar}>
          {state === 'collapsed' || isMobile ? (
            <PanelLeftIcon className='size-4' />
          ) : (
            <PanelLeftCloseIcon className='size-4' />
          )}
        </Button>

        <Button
          className='h-9 w-[240px] justify-start font-normal text-muted-foreground items-center hover:text-muted-foreground'
          variant='outline'
          size='sm'
          onClick={() => setIsCommandOpen((open) => !open)}
        >
          <SearchIcon />
          Search
          <kbd className='ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[12px] font-medium text-muted-foreground'>
            <span className='text-sm'>&#8984;</span>K
          </kbd>
        </Button>
      </nav>
    </>
  );
};

export default DashboardNavbar;
