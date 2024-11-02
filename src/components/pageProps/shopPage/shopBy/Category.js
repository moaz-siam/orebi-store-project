import React, { useState } from 'react'
import NavTitle from './NavTitle';
import { ImPlus } from "react-icons/im";

function Category() {
    const [showSubCatOne, setShowSubCatOne] = useState(false);

    const items = [
        {
            _id: 990,
            title: "New Arrivals",
            icons: true,
        },
        {
            _id: 991,
            title: "Gudgets",
        },
        {
            _id: 992,
            title: "Accessories",
            icons: true,
        },
        {
            _id: 993,
            title: "Electronics",
        },
        {
            _id: 994,
            title: "Others",
        },
    ];
    return (
        <div className='w-full'>
            <NavTitle title={'Shop by Category'} icons={false} />
            <div>
                <ul className='flex flex-col gap-4 text-sm lg:text-base text-[#767676] px-4'>
                    {items.map(({ _id, title, icons }) => (
                        <li key={_id} className='flex items-center  justify-between pb-2 border-b-[1px] border-b-[#F0F0F0]'>
                            {title}
                            {icons && (
                                <span
                                    onClick={() => setShowSubCatOne(!showSubCatOne)}
                                    className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                                >
                                    <ImPlus />
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Category
