"use client";
import { User, fakeUsers } from "../types/types";
import { Button } from "flowbite-react";
import UserTable from "./table";
import { useState, useEffect } from "react";
import { Card, Spinner } from "flowbite-react";
import { ConfirmPopUp } from "./confirmPopUp";
import { NewUserForm } from "./newUserForm";
import { EditUserForm } from "./editUserForm";

interface UsersTableProps{
  setUsersNumber : any
}
export default function UsersTable({setUsersNumber}:UsersTableProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({color:"white",content:""});
  const [users, setUsers] = useState<User[]>();
  const [userIdToDelete , setUserIdToDelete] = useState(null);
  const [openConfirmPopUp , setOpenConfirmPopUp] = useState(false);
  const [openNewUserForm ,setOpenNewUserForm] = useState(false);
  const [openUpdateUserForm ,setOpenUpdateUserForm] = useState(false);
  const [userToUpdate , setUserToUpdate] = useState(null);

  const OpenUpdateUserForm = (user:User)=>{
    setUserToUpdate(user);
    setOpenUpdateUserForm(true);
  }

  const openConfirmationPopup = (user_id:number) => {
    setUserIdToDelete(user_id);
    setOpenConfirmPopUp(true);
  };

  const closeConfirmationPopup = () => {
    setOpenConfirmPopUp(false);
    setUserIdToDelete(null);
  };

  const CloseNewUserForm = () => {
    setOpenNewUserForm(false);
  };

  const CloseUpdateUserForm = () => {
    setOpenUpdateUserForm(false);
    setUserToUpdate(null);
  };

  const fetchUsers = async () => {
    setOpenConfirmPopUp(false);
    setLoading(true);
    try {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsersNumber(data.length);
      setUsers(data);
    } catch (error) {
      setMessage({color:"red" , content:"Failed to fetch users."});
    } finally {
      setLoading(false);
      setUserIdToDelete(null);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async () => {
    if(!userIdToDelete) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/users/delete/${userIdToDelete}`, { method: "DELETE" });
      if (response.status !== 200) {
        setMessage({color:"red",content:"Can't delete user!"});
      } else {
        fetchUsers();
        //update total of users
      }
    } catch (error) {
      setMessage({color:"red",content:"An error occurred while deleting the user."});
    } finally {
      setLoading(false);
    }
  };


  const editUser = async (userId: any) => {
    console.log(userId);
  };



  return (
    <div className="row-span-8 grid grid-rows-8 gap-4 px-7 overflow-y-auto">
      <div className="row-span-1 flex items-center">
        <p className="font-bold text-2xl text-gray-600 tracking-[4px]">List of users</p>
      </div>
      <div className="row-span-1 bg-[#0e7490] rounded-lg flex items-center justify-between px-4">
        {loading ? (
          <Spinner aria-label="Loading spinner" />
        ) : (
          <p className={`text-[${message.color}]`}>{message.content}</p>
        )}
        <Button  onClick={()=>setOpenNewUserForm(true)} color="gray" pill className="outline-none">
          New user
        </Button>
      </div>
      <div className="row-span-6">
        <UserTable users={users} openConfirmationPopup={openConfirmationPopup}  editUser={OpenUpdateUserForm} />
      </div>
      <ConfirmPopUp isOpen={openConfirmPopUp} onClose={closeConfirmationPopup} onConfirm={deleteUser}/>
      <NewUserForm isOpen={openNewUserForm} onClose={CloseNewUserForm} fetchUsers={fetchUsers} />
      {userToUpdate!=null?(
      <EditUserForm user={userToUpdate} isOpen={openUpdateUserForm} onClose={CloseUpdateUserForm} fetchUsers={fetchUsers} />
      ):(<></>)}
          
    </div>
  );
}
