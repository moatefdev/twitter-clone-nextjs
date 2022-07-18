import React from 'react'
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  MailIcon,
  BookmarkIcon,
  CollectionIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'
import { signIn, signOut, useSession } from 'next-auth/react'

function Sidebar() {
  const { data: session } = useSession()
  return (
    <div className="col-span-2 m-3 flex flex-col items-center px-4 md:items-start">
      <img
        className="h-10 w-10"
        src="https://img.icons8.com/color/344/twitter--v1.png"
        alt="Twitter"
      />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Trending" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow
        onClick={session ? signOut : signIn}
        Icon={UserIcon}
        title={session ? 'Sign Out' : 'Sign In'}
      />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default Sidebar
