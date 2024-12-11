import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useMemo } from "react";


interface BottomPaginationProps {
    page: number;
    total: number
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

function BottomPagination({ page, setPage, total }: BottomPaginationProps) {
    const pages = useMemo(() => Array.from({ length: total }, (_, i) => (i+1)), [page, total]);
    return (
        <Pagination className="w-full cursor-pointer">
            <PaginationContent>
                <PaginationItem className={`${page-1<=0?"text-gray-600":""}`}>
                    <PaginationPrevious 
                        onClick={()=>{
                            setPage((page)=>page-1<=0?1:page-1);
                        }}
                    />
                </PaginationItem>
                {
                    pages.map((item: number, index: number) => (
                      
                            <PaginationItem key={index}>
                                <PaginationLink onClick={()=> {
                                    setPage(item)
                                    }}>{item}</PaginationLink>
                            </PaginationItem>
                     
                    ))
                }
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem className={`${page+1>total?"text-gray-600":""}`}>
                    <PaginationNext onClick={()=>{
                          setPage((page)=>page+1>total?total:page+1);
                    }} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default BottomPagination;