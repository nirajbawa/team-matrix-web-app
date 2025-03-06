"use client";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import Image from "next/image";
import NoImage from "@/assets/images/banner.png";

function Notification() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 200);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className=" w-[85%] sm:left-2/4 sm:w-full dialog-bg">
        <DialogHeader>
          <DialogTitle className="leading-8 text-xl w-full sm:text-3xl">
            Join Us for RoboSphere
          </DialogTitle>
          <DialogDescription className="text-lg">
            Unlock the World of Robotics with Team Matix
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Image
            src={NoImage}
            alt="banner"
            width={500}
            height={500}
            className="w-full md:h-[30rem]"
          />
        </div>
        <DialogFooter className="flex justify-between">
          <Button
            onClick={() => {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdKJn2pI74pnRqZN4kaU3veC2doii3jDXb0m5KTRyO4TWXynw/viewform",
                "__blank"
              );
              setOpen(false);
            }}
            type="button"
            variant="default"
            className="bg-green-500"
          >
            Register Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Notification;
