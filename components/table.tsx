"use client";
import { Table } from "flowbite-react";
import { User } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
interface UserTableProps {
  openConfirmationPopup: (user_id: any) => void;
    editUser: (user: User) => void;
    users : User[];
}

export default function UserTable({openConfirmationPopup , editUser , users}:UserTableProps) {


  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Username</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell className="text-center">Action</Table.HeadCell>

          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users?.map((user) => (
            <Table.Row key={user.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {user.id}
              </Table.Cell>
              <Table.Cell>{user.username}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.phone}</Table.Cell>
              <Table.Cell className="grid grid-cols-2 gap-4">
                <div onClick={()=>editUser(user)}  className="col-span-1 bg-[#0e7490] text-white text-center px-2 py-1 font-semibold rounded-md cursor-pointer  ">edit</div>
                <div onClick={()=>openConfirmationPopup(user.id)}  className="col-span-1 bg-red-500 text-white text-center px-2 py-1 font-semibold rounded-md cursor-pointer  ">delete</div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
