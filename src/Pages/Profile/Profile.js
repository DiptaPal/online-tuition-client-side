import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthProvider';

const Profile = () => {
    const { user, setLoader, updateUserProfile } = useContext(AuthContext)

    const [userName, setUserName] = useState(user?.displayName);
    const [userURL, setUserURL] = useState(user?.photoURL);

    const handleName = event => {
        setUserName(event.target.value);
    }
    const handleURL = event => {
        setUserURL(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        updateUserProfile({ displayName: userName, photoURL: userURL })
            .then(() => {
                setLoader(false)
                toast.success("Profile update successful !", {autoClose: 1000})
            })
            .catch(error => {
                toast.error(error.message);
            })

    }

    return (
        <div className='flex justify-center items-center my-28'>
            <div className="w-full max-w-lg p-8 space-y-3 rounded-xl bg-white text-black">
                <div className='flex justify-center items-center gap-4'>
                    <img src={userURL} className="rounded-sm w-40 h-40 bg-cover object-cover" alt="profile" />
                </div>
                <p className='text-2xl font-bold inline-block pb-6'>{user?.displayName}</p>
                <form onSubmit={handleSubmit} className="mt-6 border p-2 rounded-md space-y-8 ng-untouched ng-pristine ng-valid">
                    {
                        user?.email ? <div className="space-y-2">
                        <label htmlFor="email" className="block text-2xl text-gray-600">Email</label>
                        <input type="email" name="email" readOnly id="email" placeholder="Email" className="w-full px-4 py-3 text-xl border border-navActive outline-none rounded-md bg-gray-300 text-gray-600" value={user?.email} />
                    </div> : <></>
                    }
                    <div className="space-y-2">
                        <label htmlFor="username" className="block text-2xl text-gray-600">Full Name</label>
                        <input onChange={handleName} type="text" name="name" id="username" value={userName} placeholder="Full Name" className="w-full px-4 py-3 text-xl border focus:border-navActive outline-none rounded-md border-gray-300 bg-gray-50 text-black font-semibold" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="url" className="block text-2xl text-gray-600">Photo URL</label>
                        <input onChange={handleURL} type="text" name="url" id="url" placeholder="URL" className="w-full px-4 py-3 text-lg border focus:border-navActive outline-none rounded-md border-gray-300 bg-gray-50 font-semibold text-black" value={user?.photoURL} />
                    </div>
                    <div>
                        <button type='submit' className="block disabled:bg-black disabled:text-white w-full p-3 text-2xl font-semibold rounded-md text-center text-white shadow bg-navActive hover:text-navActive hover:bg-gray-300 transition-all duration-300 border-2 border-transparent hover:border-2">Update Profile</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;