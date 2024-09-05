import React from "react";
import {Link} from "react-router-dom";


const SideNavbar: React.FC = () => {

    return (
        <>
            <aside id="default-sidebar"
                   className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <h1 className='text-[28px] text-zinc-700 font-bold tracking-tight ml-4 mb-10'>Select a Model</h1>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to='/'
                                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                <span className="flex-1 ms-3 whitespace-nowrap">Komatsu Excavator</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </aside>
        </>
    )
}

export default SideNavbar;