import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';

//API
const baseURL = "http://localhost:3005/api"


function CreateCatagory() {

    //State declaration
    const [catagories, setCatagories]: any = useState([])

    const [newCatagory, setNewCatagory]: any = useState({
        catagory_name: "",
        catagoryParentID: 0,
        catagory_form: 1

    })

    const saveCatagory = (e: any) => {
        e.preventDefault();
        e.stopPropagation();

        console.log(newCatagory)

        const test_catagory_data = {
            catagory_name: "Cap",
            catagoryParentID: 0,
            catagory_form: 1
        }
        axios
            .post(`${baseURL}/catagories`, newCatagory)
            .then(res => setCatagories(res?.data?.catagories))
            .catch(err => console.log(err));
    }

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

    return (
        <>
            <div className='text-center py-2'>dashboard</div>
            <div className='flex justify-around my-5'>
                <p className='text-xl font-medium underline text-bubbleGum'><Link href="/dashboard">New Catagory</Link></p>
                <p className='text-xl font-medium underline text-bubbleGum'><Link href="/catagories/all">All Catagories</Link></p>
            </div>
            <div className='card shadow p-5 w-3/4 m-auto rounded-md bg-silver mt-5'>
                <form onSubmit={saveCatagory}>
                    <div className='my-2'>
                        <label>Catagory Name: </label>
                        <input placeholder='Catagory Name' onChange={(e) => setNewCatagory({ ...newCatagory, catagory_name: e.target.value })} />
                    </div>
                    <div className='my-2'>
                        <label>Select Parent : </label>
                        <select name="catagory" id="catagory" onChange={(e) => setNewCatagory({ ...newCatagory, catagoryParentID: e.target.value })}>
                            <option value="0">no parent</option>
                            {!!catagories.length && catagories.map((catagory: any) => {
                                return (
                                    <>
                                        <option value={catagory?._id}>{catagory?.catagory_name}</option>
                                    </>
                                )
                            })
                            }
                        </select>
                    </div>
                    <div className='my-2'>
                        <label>Select Form : </label>
                        <select name="cars" id="cars" onChange={(e) => setNewCatagory({ ...newCatagory, catagory_form: e.target.value })}>
                            <option value="Form_1">Form 1</option>
                            <option value="Form_2">Form 2</option>
                            <option value="From_3">Form 3</option>
                            <option value="Form_4">Form 4</option>
                        </select>
                    </div>
                    <div className='my-2'>
                        <button className='bg-purple text-white p-2 rounded-md' type='submit'>Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateCatagory