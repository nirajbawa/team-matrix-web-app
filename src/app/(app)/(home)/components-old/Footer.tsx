"use client"
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { User } from "next-auth";


function Footer() {
    const { data: session } = useSession();

    const token = useMemo(() => session?.user as User, [session]);

    return (
        <footer className="flex w-full bg-[#3a0808] flex-wrap items-center flex-col md:flex-row md:px-28 justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.35)), linear-gradient(142deg, rgba(55, 27, 35, 0.59) 0%, rgb(62 24 29 / 31%) 12%, rgb(12 6 5 / 25%) 80%)`
            }}
        >
            <Typography className="font-normal text-white">
                &copy; 2025 Team Matrix
            </Typography>
            <ul className="flex text-white flex-wrap items-center gap-y-2 gap-x-8">
                <Link href="#about">
                    <li>
                        <Typography
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            About Us
                        </Typography>
                    </li>
                </Link>
                {
                    token ? (<Link href={token.role==="User"?"/dashboard":"/admin/dashboard"}>
                        <li>
                            <Typography
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Dashboard
                            </Typography>
                        </li>
                    </Link>) : ""
                }

            </ul>
        </footer>
    );
}

export default Footer;