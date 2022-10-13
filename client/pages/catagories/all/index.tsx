import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';

//API
const baseURL = "http://localhost:3004/api"

function index() {

    //State declaration
    const [catagories, setCatagories]: any = useState([])

    useEffect(() => {
        const controller = new AbortController();

        const getCatagories = async () => {
            axios
                .get(`${baseURL}/catagories`)
                .then(res => { console.log(res?.data?.catagories); setCatagories(res?.data?.catagories) })
                .catch(err => console.log(err));
        }

        getCatagories()

        return () => controller.abort();
    }, [])

    const data = [
        {
            id: 1,
            name: "A",
            catagoryParentID: 0,
            sub: [
                {
                    id: 4,
                    name: "D",
                    catagoryParentID: 0,
                    sub: []
                }
            ]
        },
        {
            id: 2,
            name: "B",
            catagoryParentID: 0,
            sub: []
        },
        {
            id: 3,
            name: "C",
            catagoryParentID: 0,
            sub: []
        }
    ]

    return (
        <>
            <div className='text-center py-2'>dashboard</div>
            <div className='flex justify-around my-5'>
                <p className='text-xl font-medium underline text-bubbleGum'><Link href="/dashboard">New Catagory</Link></p>
                <p className='text-xl font-medium underline text-bubbleGum'><Link href="/catagories/all">All Catagories</Link></p>
            </div>
            <div className='card shadow p-5 w-3/4 m-auto rounded-md bg-silver mt-5'>
                <>
                    <ul className='p-3'>
                        {!!catagories && catagories.map((catagorory: any, index: number) => {
                            if (!catagorory?.catagoryParentID) {
                                return (
                                    <div key={index}>
                                        <li >{catagorory?.catagory_name}</li>
                                    </div>
                                )
                            }
                        })}
                    </ul>
                </>
            </div>
        </>
    )
}

export default index