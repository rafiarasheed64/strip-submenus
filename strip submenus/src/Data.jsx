// import React from "react";
import { BiBook, BiBriefcase, BiCreditCard } from 'react-icons/bi'
const Linkdata = [
    {
        page: 'Products',
        link: [
            {
                label: 'payment',
                icn: <BiCreditCard/>,
            },
            {
                label: 'terminal',
                icn: <BiCreditCard/>,
            },
            {
                label: 'connect',
                icn: <BiCreditCard/>,
            }

        ]
    },
    {
        page: 'Developers',
        link: [
            {
                label: 'plugins',
                icn: <BiBook/>,
            },
            {
                label: 'libraries',
                icn: <BiBook/>,
            },
            {
                label: 'help',
                icn: <BiBook/>,
            },
            {
                label: 'billing',
                icn: <BiBook/>,
            }

        ]
    },
    {
        page: 'Company',
        link: [
            {
                label: 'about',
                icn: <BiBriefcase/>,
            },
            {
                label: 'customers',
                icn: <BiBriefcase/>,
            }
        ]
    }
]
export default Linkdata