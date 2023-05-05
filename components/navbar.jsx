import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const manuItems = <React.Fragment>

        <li className='hover:bg-red-500 font-bold rounded-lg'>
            <Link href='home'>Home</Link></li>

        <li className='hover:bg-red-500 font-bold rounded-lg'>
            <Link href='about'>About</Link></li>

        {/* <li className='hover:bg-red-500 font-bold rounded-lg'>
            <Link href='skills'>My Skills</Link></li> */}

        <li className='hover:bg-red-500 font-bold rounded-lg'>
            <Link href='services'>Services</Link></li>
        <li className='hover:bg-red-500 font-bold rounded-lg'>
            <Link href='blog'>Blogs</Link></li>

        <li className='hover:bg-red-500 font-bold rounded-lg'>
            <Link href='contact'>Contact</Link></li>
        <li className='hover:bg-red-500 font-bold rounded-lg'>
            <Link href='register'>Register</Link></li>
        <li className='hover:bg-red-500 font-bold rounded-lg'>
            <Link href='login'>Login</Link></li>

        <div className="form-control mt-2">
            <label className="label cursor-pointer">
            </label>
        </div>
    </React.Fragment>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">

                    <Link href="/">
                        <button className="text-2xl font-sans p-5">NEXT</button>
                    </Link>

                </div>
                <div className="flex-none">
                    <ul className=" navbar-center hidden lg:flex menu menu-horizontal p-0">
                        {manuItems}
                    </ul>

                    <div className="dropdown dropdown-end btn-ghost lg:hidden">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                        <ul tabIndex={0} className=" bg-base-100 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            {manuItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;