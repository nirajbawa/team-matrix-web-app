"use client"
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  UserGroupIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

function SettingsSidebar() {
  return (
    <Card className="h-full w-full max-w-[20rem] p-4">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Settings
        </Typography>
      </div>
      <List>
        <Link href="/admin/dashboard/settings/members">
          <ListItem>
            <ListItemPrefix>
              <UserGroupIcon className="h-5 w-5" />
            </ListItemPrefix>
            Members
          </ListItem>
        </Link>
        <Link href="/admin/dashboard/settings/sponsors">
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Sponsors
          </ListItem>
        </Link>
        <Link href="/admin/dashboard/settings/projects">
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Projects
        </ListItem>
        </Link>
        <Link href="/admin/dashboard/settings/about">
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
            About
        </ListItem>
        </Link>
      </List>
    </Card>
  );
}

export default SettingsSidebar;