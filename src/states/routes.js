import React from 'react';
import {HomePage} from '@containers'
const routes = [
    {
        path: '/',
        exact: true,
        name: 'Trang chủ',
        main: () => <HomePage />,
        scrollTo: 'trang-chu'
    },
    {
        path: '/',
        exact: true,
        name: 'Bảng xếp hạng',
        main: () => <HomePage />,
        scrollTo: 'bang-xep-hang'
    },
    {
        path: '/sâs',
        exact: false,
        name: 'Tin tức',
        main: () => <HomePage />,
        childs: [
            {
                path: 'bai-thi-1',
                name: 'bài thi 1',
                main: ()=><HomePage/>
            },
            {
                path: 'bai-thi-2',
                name: 'bài thi 2',
                main: ()=><HomePage/>
            },
            {
                path: 'bai-thi-3',
                name: 'bài thi 3',
                main: ()=><HomePage/>
            }
        ]
    },
    {
        path: '/',
        exact: true,
        name: 'Thư viện',
        main: () => <HomePage />,
        scrollTo: 'thu-vien-tem-xe'
    },
    {
        path: '/',
        exact: true,
        name: 'Liên hệ',
        main: () => <HomePage />,
        scrollTo: ''
    }
];
export default routes;