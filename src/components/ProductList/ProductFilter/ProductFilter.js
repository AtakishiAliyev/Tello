import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import '../ProductFilter/ProductFilter.scss';
import plus_icon from '../../../images/plus.png';
import minus_icon from '../../../images/minus.png';
import { useSearchParams } from 'react-router-dom';

export default function ProductFilter() {
    const [expanded, setExpanded] = React.useState(false);
    const [query, setQuery] = useState([])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const filterData = [
        {
            value: 'Apple',
            query: 'iphone',
        },
        {
            value: 'Samsung',
            query: 'samsung',
        },
        {
            value: 'Xiaomi',
            query: 'xiaomi',
        },
        {
            value: 'Honor',
            query: 'honor',
        },
        {
            value: 'HTC',
            query: 'htc',
        },
    ]

    const [searchParams, setSearchParams] = useSearchParams({});

    useEffect(() => {
        if (query.length > 0) {
            searchParams.set("query", query)
            setSearchParams(searchParams)
        }

    }, [query, searchParams, setSearchParams, query.length])

    useEffect(() => {
        if (searchParams.get('query') !== null) {
            setQuery(searchParams.get('query').split(','))
        }
    }, [searchParams])

    const handleChangeUrl = ({ target: { checked, value } }) => {
        if (checked) {
            setQuery([...query, value])
        } else {
            setQuery(query.filter(e => e !== value))
            if (query.length === 1) {
                searchParams.delete("query")
                setSearchParams(searchParams)
            }
        }
    };

    return (
        <div className='filter-wrapper'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <div className='accordion-head'>
                        <h3>Brend</h3>
                        <img src={expanded === 'panel1' ? minus_icon : plus_icon} alt="plus" />
                    </div>
                </AccordionSummary>
                <AccordionDetails>

                    <ul>
                        {
                            filterData.map((item, index) => {

                                if (searchParams.get('query') !== null && searchParams.get('query').split(',').includes(item.query)) {
                                    return (
                                        <li key={index}>
                                            <input
                                                onClick={(e) => { handleChangeUrl(e) }}
                                                type="checkbox"
                                                value={item.query}
                                                defaultChecked="checked"
                                            />
                                            <label>{item.value}</label>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={index}>
                                            <input
                                                onClick={(e) => { handleChangeUrl(e) }}
                                                type="checkbox"
                                                value={item.query}
                                            />
                                            <label>{item.value}</label>
                                        </li>
                                    )
                                }

                            })
                        }
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div >
    );
}
