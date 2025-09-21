"use client";
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
import NoImage from "@/assets/images/banner.jpg";
import { useRouter } from "next/navigation";

function Notification() {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 200);
  }, []);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className=" w-[85%] sm:left-2/4 sm:w-full dialog-bg">
          <DialogHeader>
            <DialogTitle className="leading-8 text-lg w-full sm:text-lg">
              🚀 Join Team Matrix - Build the Future of Robotics!
            </DialogTitle>
            <DialogDescription className="text-sm">
              From concept to competition - let's build it together.
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
                router.replace("/recruitment");
                setOpen(false);
              }}
              type="button"
              variant="default"
              className="bg-green-500 w-full"
            >
              Apply Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Notification;
