
import React from 'react';
import { Pagination } from 'antd';
import { useState } from 'react';


const MyPagination = () => {
    const [current, setCurrent] = useState(3);

    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };
    return (
        <div style={{ textAlign: 'center' }}>
            <Pagination current={current} onChange={onChange} total={500} />
        </div>

    )
}

export default MyPagination