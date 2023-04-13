import Link from "next/link";


function navbar() {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">

                    <Link href="/" className="btn btn-ghost normal-case text-xl">
                        NEXT^JS
                    </Link>

                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href="/about" passHref>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" passHref>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" passHref>
                                Blog
                            </Link>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                Account
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                <li>
                                    <Link href="/register" passHref>
                                        Register
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/login" passHref>
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default navbar;