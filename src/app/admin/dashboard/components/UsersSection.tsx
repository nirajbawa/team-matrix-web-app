"use client"
import React, { useEffect, useMemo, useState } from 'react'
import UserImg from "@/assets/images/user.jpg";
import UsersCard from '@/components/cards/UsersCard'
import BottomPagination from './BottomPagination';
import axios, { AxiosError } from 'axios';
import { ApiResponse } from '@/types/ApiResponse';


function UsersSection() {

    const [page, setPage] = useState<number>(1);
    const limit = useMemo(()=>3, []);
    const [total, setTotal] = useState<number>(0);
    const [data, setData] = useState<any>([]);
 

    const fetchUserData = async() =>{
        try{
            const res = await axios.get<ApiResponse>(`/api/admin/user?page=${page}&limit=${limit}`);
            const data = res.data;
            setData(data.data.data);
            setTotal(data.data.totalPages);
        }   
        catch(error)
        {
            const axiosError = error as AxiosError<ApiResponse>;
        }
    }

    

    useEffect(()=>{
        fetchUserData();
    }, [page])

    return (
        <div className='w-[60%] h-[100vh] flex justify-center gap-5 items-center flex-col'>
            <div className='p-10 h-96 gap-10 items-center flex justify-between'>
                {
                    data.map((item:any, index:number)=>(
                        <UsersCard key={index} username={item?.username} email={item?.email} img={item?.profilePic ?? UserImg} mobile={item?.mobile} address={item?.address} /> 
                    ))
                }
            </div>
            <BottomPagination page={page} setPage={setPage} total={total} />
        </div>

    )
}

export default UsersSection