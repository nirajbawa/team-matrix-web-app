"use client"
import React, { useEffect, useMemo, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from 'axios';
import { ApiResponse } from '@/types/ApiResponse';

ChartJS.register(ArcElement, Tooltip);

function ChartSection() {
    const [data, setData] = useState<Array<any>>([]);
    const [totalUsers, setTotalUsers] = useState<number>(0);
    const [totalCount, setTotalCount] = useState<number>(0);

    const options: any = {
        plugins: {
            responsive: true,
            legend: {
                position: "top" as const,
            },
            tooltip: {
                // Custom tooltip position
                position: "nearest",
            },
        },
        cutout: data.map((item: any) => item.cutout),
    };

    const finalData = {
        labels: data.map((item) => item.label),
        datasets: [
            {
                data: data.map((item) => Math.round(item.value)),
                backgroundColor: data.map((item) => item.color),
                borderColor: data.map((item) => item.color),
                borderWidth: 1,
                dataVisibility: new Array(data.length).fill(true),
            },
        ],
    };


    useMemo(() => {
        setData([
            {
                label: "Total Visitors Count",
                value: totalCount,
                color: "rgb(255, 205, 86)",
                cutout: "50%",
            },
            {
                label: "Total Users",
                value: totalUsers,
                color: "rgb(54, 162, 235)",
                cutout: "50%",
            }
        ]);
    }, [totalUsers, totalCount]);


    useEffect(() => {
        (async () => {
            try {
                const res1 = await axios.get<ApiResponse>("/api/visitors");
                const data1 = res1.data;
                setTotalCount(data1.data.count);
                const res2 = await axios.get<ApiResponse>(`/api/admin/user?page=${1}&limit=${3}`);
                const data2 = res2.data;
                setTotalUsers(data2.data.totalRecords);
            }
            catch (error) {

            }
        })();
    }, []);


    return (
        <div className='w-[30%] h-[100vh]  pl-14 flex flex-col gap-5 justify-center items-center'>
            <Doughnut data={finalData} options={options} />
            <p className="text-lg font-bold text-center">Site Stats</p>
        </div>
    )
}

export default ChartSection