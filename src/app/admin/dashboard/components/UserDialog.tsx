import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import Image from "next/image";

interface UserDialogProps {
    open: boolean;
    handleOpen: () => void;
    username: string;
    email: string;
    mobile: string;
    address: string;
    img: any;
}

export function UserDialog({ open, handleOpen, username, email, mobile, address, img }: UserDialogProps) {


    return (
        <>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Member's Details</DialogHeader>
                <DialogBody className="flex">
                    <div className="w-[50%] p-5">
                    <Image src={img} className='w-full h-52' alt="img" width={400} height={300} />
                    </div>
                    <div className="p-5 flex-col gap-8">
                        <p className="capitalize"><span className="font-bold">Full Name : </span>{username}</p>
                        <p><span className="font-bold">Email : </span>{email}</p>
                        <p><span className="font-bold">Mobile No : </span>{mobile}</p>
                        <p className="capitalize"><span className="font-bold">Address : </span>{address}</p>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}