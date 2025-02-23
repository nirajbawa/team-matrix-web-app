"use client";
import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import useThemeStore from "@/store/useTheme";

export function AdminDashboardNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const theme = useThemeStore((state) => state.theme);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex font-medium flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal dark:text-gray-100"
      >
        <Link href="/admin/dashboard" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal dark:text-gray-100"
      >
        <Link href="/admin/dashboard/add-user" className="flex items-center">
          Add User
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-norma dark:text-gray-100"
      >
        <Link
          href="/admin/dashboard/settings/members"
          className="flex items-center"
        >
          Settings
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="/"
          target="__blank"
          className="flex items-center dark:text-gray-100"
        >
          App
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 dark:bg-black border-none">
      <div className="flex items-center font-bold justify-between text-blue-gray-900 dark:text-gray-100">
        <Link href="/admin/dashboard">ADMIN DASHBOARD</Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block ">{navList}</div>
          <div className="flex items-center gap-x-3">
            <Button
              variant={theme == "dark" ? "filled" : "gradient"}
              size="sm"
              className="hidden lg:inline-block py-3 px-4 dark:bg-blue-400"
              onClick={() => signOut()}
            >
              <span>logout</span>
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1 dark:bg-blue-400">
          <Button
            onClick={() => signOut()}
            fullWidth
            variant="gradient"
            size="sm"
            className="dark:bg-blue-400"
          >
            <span>Logout</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default AdminDashboardNavbar;
