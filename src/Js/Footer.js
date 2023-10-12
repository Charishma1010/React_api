/**import React from 'react'

export const Footer =() => {
    return (
        <div><p align="center">If have an account <a href="Login.html">Sign up</a></p>
             <p align="center">Thankyou for choosing our website</p>
            
        </div>
    )
}
import React from 'react';
import { Pagination } from 'antd';
const Pages = () => <Pagination defaultCurrent={1} total={50} />;
export default Pages;
export default Footer**/
import React from 'react';
import { Pagination } from 'antd';
const Pages = () => <Pagination  align="Center" defaultCurrent={1} total={50} />;
export default Pages;