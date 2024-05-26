"use client"
import { useEffect, useState } from "react";
import CardItem from "./cardItem";



export default function Cards({usersNumber}:{usersNumber:number}) {
   
    return(
        <div className=" row-span-3 grid grid-rows-3 gap-1 px-7">
            <div className="row-span-1   flex items-center"><p className="font-bold text-2xl text-gray-600 tracking-[4px]">Overview</p></div>
            <div className="row-span-2  grid grid-cols-3 gap-3">
                <CardItem title="total of users"  subtitle={usersNumber}/>
            </div>
        </div>
    );
}