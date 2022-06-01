import userService from 'api';
import Modals from '../../components/common/modals';
import { useEffect, useState } from 'react';
const User = () => {
    const [showModal,setShowModal] = useState(false);
    async function edit() {
        console.warn();
        setShowModal(true);
    }
    async function deleteUser (id:String){
        try {
            await userService.delete(`users/${id}`)
            window.location.reload()
        } catch (error) {
            
        }
    }
    const [users, setUsers] = useState([]);
    async function fetchUser() {
        try {
            const response = await userService.get('/users')
            setUsers(response.data.content)
        } catch (error) {
            console.warn(error)
        }
    }

    useEffect(() => { fetchUser() }, [])

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 w-9/12 mx-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                NO
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user: any, index: number) =>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <><th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {++index}
                                    </th>
                                        <td className="px-6 py-4">
                                            {user.username}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4 text-center flex">
                                            
                                            <p onClick={edit} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Edit </p>
                                             | <p onClick={() => deleteUser(user.id) } className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Delete</p>
                                        </td></>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {showModal?<Modals />: ''}
            </div>
        </>
    )
}
export default User
