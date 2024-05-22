import {createUser,findAllUsers, findUserById , deleteUserById , updateUserById}  from  "./user_services";

const UserService={
    createUser,
    findAllUsers,
    findUserById,
    deleteUserById,
    updateUserById
}

export {
    UserService
};

