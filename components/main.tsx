"use client"
import { useEffect, useState } from "react";
import Cards from "./cards";
import SearchBar from "./searchBar";
import UsersTable from "./users";

export default function Main() {
  const [usersNumber , setUsersNumber] = useState(-1);
    
  useEffect( () => {
      const fetchUsersNumber = async () => {
          const response = await fetch("/api/users");
          const data = await response.json();
          setUsersNumber(data.length);
      };

      fetchUsersNumber();

  },[]);

    return (
      <div className="bg-white h-[150vh] col-span-4 grid grid-rows-12 rounded-lg gap-4 ">
        <SearchBar/>
        <Cards usersNumber={usersNumber}/>
        <UsersTable setUsersNumber={setUsersNumber} />
      </div>
    );
  }
  