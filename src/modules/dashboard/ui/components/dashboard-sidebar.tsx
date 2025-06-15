'use client';

import GenerateAvatar from '@/components/generated-avatar';
import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useUser, UserButton } from '@clerk/nextjs';
import { BotIcon, StarIcon, VideoIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const firstSection = [
  {
    icon: VideoIcon,
    label: 'Meetings',
    href: '/meetings',
  },
  {
    icon: BotIcon,
    label: 'Agents',
    href: '/agents',
  },
];

const secondSection = [
  {
    icon: StarIcon,
    label: 'Upgrade',
    href: '/upgrade',
  },
];

const DashboardSidebar = () => {
  const pathName = usePathname();
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(isSignedIn, user, isLoaded);
  return (
    <Sidebar className=''>
      <SidebarHeader className='text-sidebar-accent-foreground'>
        <Link href='/' className='flex items-center gap-2 px-2 pt-2'>
          {/* <Image src={} height={36} width={36} alt='ai-agent' /> */}
          <p>AI Agent</p>
        </Link>
      </SidebarHeader>
      <div className='px-4 py-2'>
        <Separator className='opacity-10 text-gray-500' />
      </div>
      <SidebarContent className=''>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {firstSection.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    className={`h-10 hover:bg-linear-to-r border border-transparent hover:border-gray-950/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50 ${
                      pathName === item.href
                        ? 'bg-linear-to-r border-gray-950/10'
                        : ''
                    }`}
                    isActive={pathName === item.href}
                  >
                    <Link
                      href={item.href}
                      // className='flex gap-x-3 items-center'
                    >
                      <item.icon />
                      <span className='text-sm font-medium tracking-tight'>
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className='px-4 py-2'>
          <Separator className='opacity-10 text-gray-500' />
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondSection.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    className={`h-10 hover:bg-linear-to-r border border-transparent hover:border-gray-950/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50 ${
                      pathName === item.href
                        ? 'bg-linear-to-r border-gray-950/10'
                        : ''
                    }`}
                    isActive={pathName === item.href}
                  >
                    <Link
                      href={item.href}
                      // className='flex gap-x-3 items-center'
                    >
                      <item.icon />
                      <span className='text-sm font-medium tracking-tight'>
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className=''>
        <div className='rounded-lg border border-border p-3 w-full flex items-center gap-x-4 overflow-hidden'>
          {isSignedIn ? (
            <UserButton />
          ) : (
            <GenerateAvatar
              // seed={data?.user?.name || 'Abdul'}
              seed={'Abdul'}
              variant='initials'
              className='size-9'
            />
          )}
          <div className='flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0 text-xs'>
            <p className='truncate'>{user?.fullName}</p>
            <p className='truncate'>
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
