"use client";

import {  Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import Alert from "./alert";

interface NewUserFormPropsType {
  isOpen: boolean;
  onClose: () => void;
  fetchUsers:()=>void;
}

export function NewUserForm({ isOpen, onClose , fetchUsers }: NewUserFormPropsType) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const clearForm = () => {
    setEmail('');
    setUsername('');
    setPhone('');
    setPassword('');
  }

  const createUser = async (event) => {
    event.preventDefault();


    // Add your user creation logic here
    const newUser = {
      email,
      name:username,
      phone,
      password
    };

    // Example: Making a POST request to your API
    try {
      const response = await fetch('/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        // Handle successful user creation
        clearForm();
        setAlertMessage('User created successfully');
        setShowAlert(true);
        onClose();
        fetchUsers();

      } else {
        // Handle errors
        setAlertMessage('Failed to create user');
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
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">create new user</h3>
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
          <div>
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
          </div>
          {/* Password */}
          <div>
            <div className="mb-1 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              id="password"
              placeholder="Enter password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
       
          <div className="flex justify-end text-sm font-medium text-gray-500 dark:text-gray-300">
            <button
              type="submit"
              className="text-cyan-700 hover:underline dark:text-cyan-500 cursor-pointer"
            >
              Create user
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
    </>
  );
}
