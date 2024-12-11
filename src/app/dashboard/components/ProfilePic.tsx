"use client"
import React, { use, useEffect, useRef, useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import useUserStore from '@/store/useUserStore';
import UserImage from "@/assets/images/user.jpg";
import axios from 'axios';
import { Loader2 } from "lucide-react";
import LottiefilePlayer from '@/components/players/LottiefilePlayer';
import LoadingAnimation from "@/assets/lotties/gray-loading.json";

function ProfilePic({ data }: any) {

    const fileInputRef = useRef<HTMLInputElement>(null);
    const setUserData = useUserStore((state: any) => state.setData);
    const userData = useUserStore((state: any) => state.data);
    const [upload, setUpload] = useState<boolean>(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const lottieProps = {
        loop: true,
        autoplay: true,
        animationData: LoadingAnimation,
        height: "5rem",
        width: "5rem",
    };

    const handleFile = (e: React.MouseEvent<any>) => {
        fileInputRef.current?.click();
    }

    const uploadFile = async (file: any) => {
        setUpload(true);
        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await axios.post("/api/dashboard/uploads", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setUserData({ profilePic: response.data.data.imgUrl });

        } catch (error: any) {
          
        }
        setUpload(false);
    }


    const handleFileData = (e: React.ChangeEvent<any>) => {

        const imageUrl = URL.createObjectURL(e.target.files[0]);
        setPreviewUrl(imageUrl);
        uploadFile(e.target.files[0]);

    }

    useEffect(() => {
        if (data?.profilePic) {
            setUserData({
                profilePic: data?.profilePic
            });
            setPreviewUrl(data?.profilePic)
        }
    }, []);

    return (
        <Card className="w-96">
            <div className='w-10 h-10 absolute top-9 text-5xl right-[44px] md:right-[59px] z-10'>
                {
                    upload ? (
                        <LottiefilePlayer
                        loop={lottieProps.loop}
                        autoplay={lottieProps.autoplay}
                        animationData={lottieProps.animationData}
                        height={lottieProps.height}
                        width={lottieProps.width}
                    />
                    ) : (<AddIcon onClick={handleFile} className='text-5xl cursor-pointer text-blue-gray-800' />)
                }
            </div>
            <CardHeader floated={false} className="h-[18rem] md:h-[22rem] rounded-full">
                <div className='w-full h-full bg-[#00000024] absolute'></div>
                <Image src={previewUrl || UserImage} className='w-full h-full' alt="profile-picture" width={500} height={500} />
                <input className='w-full h-full hidden' ref={fileInputRef} type='file' onChange={handleFileData} accept='.jpeg,.jpg,.png,.svg,.webp' />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" color="blue-gray" className="mb-2 capitalize">
                    {data.email}
                </Typography>
            </CardBody>
        </Card>
    );
}

export default ProfilePic