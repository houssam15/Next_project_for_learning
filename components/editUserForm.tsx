"use client";

import {  Button, Label, Modal, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import Alert from "./alert";
import { User } from "../types/types";

interface NewUserFormPropsType {
  isOpen: boolean;
  onClose: () => void;
  fetchUsers:()=>void;
  user : User;
}

export function EditUserForm({ isOpen, onClose , fetchUsers ,user}: NewUserFormPropsType) {
  const [id, setId]=useState(0);
  
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  // const [phone, setPhone] = useState("");
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const addToForm = ( email="" , username="" , phone="") => {
    setEmail(email);
    setUsername(username);
    // setPhone(phone);
  }

  useEffect(function(){
        setId(user.id);
        addToForm(user.email,user.username,user.phone);
  },[])

  const createUser = async (event) => {
    event.preventDefault();
    // Add your user creation logic here
    const newUser = {
      id,
      email,
      username,
    };
    

    // Example: Making a POST request to your API
    try {
      const response = await fetch('/api/users/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        // Handle successful user creation
        addToForm();
        setAlertMessage('User updated successfully');
        setShowAlert(true);
        onClose();
        fetchUsers();

      } else {
        // Handle errors
        setAlertMessage('Failed to update user');
        setShowAlert(true);
      }
    } catch (error) {
      // Handle network errors
      setAlertMessage('An error occurred: ' + error.message);
      setShowAlert(true);
    }
  };

  return (
    <>
     <Alert message={alertMessage} show={showAlert} />
    <Modal show={isOpen} size="md" onClose={onClose} popup>
      <Modal.Header />
      <Modal.Body>
        <form onSubmit={createUser} className="space-y-3">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">update user</h3>
          {/* Email */}
          <div>
            <div className="mb-1 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          {/* Username */}
          <div>
            <div className="mb-1 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          {/* Phone */}
          {/* <div>
            <div className="mb-1 block">
              <Label htmlFor="phone" value="Phone" />
            </div>
            <TextInput
              id="phone"
              placeholder="Enter phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div> */}
          
          
          <div className="flex justify-end text-sm font-medium text-gray-500 dark:text-gray-300">
            <button
              type="submit"
              className="text-cyan-700 hover:underline dark:text-cyan-500 cursor-pointer"
            >
              update user
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
    </>
  );
}
