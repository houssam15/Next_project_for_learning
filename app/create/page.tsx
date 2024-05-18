"use client"
import { useRouter } from "next/navigation";
import React , { useState } from "react";

const Page = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        setIsLoading(true)

        // Because this is a client side (because we use 'use client on top'), so we don't have to add http in the api
        await fetch('/api/create', {
            method: 'POST', // Method put is to create
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email,phone , password
            })
        }).then(async (res)  => {
            if(res.status!=200){
                alert((await res.json()).error);
                return;
            }
            router.push('/')
        }).catch((e) => {
            console.log(e)
        })
        setIsLoading(false)
    }

    return (
        <div>
        <div className="text-center mt-10 pt-10">
            <h1 className="text-3xl">New user</h1>
        </div>
        <form className='w-[500px] mx-auto pt-20 flex flex-col gap-2' onSubmit={handleSubmit}>
        <input type="text" placeholder='Input your name' value={name} onChange={(e) => setName(e.target.value)} className='w-full border p-2 rounded-md' />
        <input type="text" placeholder='Input your email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full border p-2 rounded-md' />
        <input type="phone" placeholder='Input your phone' value={phone} onChange={(e) => setPhone(e.target.value)} className='w-full border p-2 rounded-md' />
        <input type="password" placeholder='Input your password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full border p-2 rounded-md' />

        <button disabled={isLoading}>{isLoading ? 'Loading ...' : 'Submit'}</button>
        </form>
        </div>
      
    );
}

export default Page;