import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';

//API
const baseURL = "http://localhost:3005/api"

function index() {

    //State declaration
    const [catagories, setCatagories]: any = useState([])

    useEffect(() => {
        const controller = new AbortController();

        const getCatagories = async () => {
            axios
                .get(`${baseURL}/catagories`)
                .then(res => setCatagories(res?.data?.catagories))
                .catch(err => console.log(err));
        }

        getCatagories()

        return () => controller.abort();
    }, [])

    // const arr: any[] = [1, 2, 3, ["a", "b"], 4, 5, ["c", "d", [1, 2, "a", "b", [0, 0]], 6]];

    // const printElementsOfArr = (arr: any) => {
    //     if (!!arr.length) {
    //         if (!!!arr[0].length) {
    //             console.log(arr[0]);
    //         }
    //         else {
    //             if (!!arr[0].length) {
    //                 console.log(arr[0][0]);
    //             }
    //             printElementsOfArr(arr[0].slice(1))
    //         }
    //         printElementsOfArr(arr.slice(1))
    //     }
    // }
    // printElementsOfArr(arr)

    return (
        <>
            <div className='text-center py-2'>dashboard</div>
            <div className='flex justify-around my-5'>
                <p className='text-xl font-medium'><Link href="/dashboard">New Catagory</Link></p>
                <p className='text-xl font-medium'><Link href="/catagories/all">All Catagories</Link></p>
            </div>
            <div className='card shadow p-5 w-3/4 m-auto rounded-md bg-silver mt-5'>
                <>
                    <ul className='p-3'>
                        {!!catagories && catagories.map((catagorory: any) => {
                            if (!catagorory?.catagoryParentID) {
                                return (
                                    <>
                                        <li>{catagorory?.catagory_name}</li>
                                        {<ul>Ladies Bag</ul>}
                                    </>

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