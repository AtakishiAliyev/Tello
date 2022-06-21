import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import '../ProductFilter/ProductFilter.scss';
import plus_icon from '../../../images/plus.png';
import minus_icon from '../../../images/minus.png';

export default function ProductFilter() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
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
                        <li>
                            <input type="checkbox" />
                            <label>Apple</label>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <label>Samsung</label>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <label>Xiaomi</label>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <label>Honor</label>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <div className='accordion-head'>
                        <h3>Rəng</h3>
                        <img src={expanded === 'panel2' ? minus_icon : plus_icon} alt="plus" />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>
                            <input type="checkbox" />
                            <label>Ağ</label>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <label>Qara</label>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <label>Qırmızı</label>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <label>Mavi</label>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <div className='accordion-head'>
                        <h3>Yaddaş</h3>
                        <img src={expanded === 'panel3' ? minus_icon : plus_icon} alt="plus" />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>
                            <input type="checkbox" />
                            <label>64</label>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <label>128</label>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <label>256</label>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
