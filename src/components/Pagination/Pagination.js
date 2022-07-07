import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSearchParams } from 'react-router-dom';

export default function BasicPagination({ data }) {
    const [searchParams, setSearchParams] = useSearchParams({});
    const [pageNum, setPageNum] = useState(searchParams.get('page') || 1)

    function pageChangeHandler(event, pageNumber = 1) {
        setPageNum(pageNumber)
        searchParams.set("page", pageNumber)
        setSearchParams(searchParams)
    }

    useEffect(() => {
        setPageNum(searchParams.get("page"))
    }, [searchParams])

    return (
        <Stack spacing={2}>
            <Pagination onChange={(event, pageNumber) => pageChangeHandler(event, pageNumber)} count={data?.pagination.total_pages} page={+pageNum} />
        </Stack>
    );
}