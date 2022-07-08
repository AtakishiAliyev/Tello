import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSearchParams } from 'react-router-dom';

export default function BasicPagination({ data }) {
    const [searchParams, setSearchParams] = useSearchParams({});
    const [pageNum, setPageNum] = useState(searchParams.get('page') || 1)
    const query = searchParams.get('query');
    const page = searchParams.get('page');
    const sort = searchParams.get('sortBy');

    const handleChange = (event, value) => {
        setPageNum(value)
        searchParams.set("page", value)
        setSearchParams(searchParams)
    }

    useEffect(() => {
        if (query || sort) {
            setPageNum(1)
            searchParams.set("page", 1)
            setSearchParams(searchParams)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query?.length, sort?.length])

    useEffect(() => {
        if (page !== null) {
            setPageNum(page)
            searchParams.set("page", page)
            setSearchParams(searchParams)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Stack spacing={2}>
            <Pagination size="medium" siblingCount={0} boundaryCount={2} onChange={handleChange} count={data?.pagination.total_pages} page={+pageNum} />
        </Stack>
    );
}