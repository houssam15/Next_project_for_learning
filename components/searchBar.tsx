import { Avatar } from "flowbite-react";
export default function SearchBar() {
    return(
        <div className=" row-span-1 border-b-4 border-[#0e7490] grid grid-cols-4   px-7 ">
            <div className="col-span-3   my-1  text-xl  ">
                <input type="text" placeholder="Search for user " className="placeholder:font-semibold placeholder:text-gray-300  w-full h-full  outline-none"/>
            </div>
            <div className="col-span-1  mx-4 my-1 grid grid-cols-3 ">
                <div className="col-span-1  flex items-center justify-center">
                <Avatar img="/images/avatar.png" alt="logo" rounded  />
                </div>
                <div className="col-span-2 flex items-center justify-center">
                       <p className="font-semibold">Houssam Elatmani</p>
                </div>
            </div>
        </div>
    );
}