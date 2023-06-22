/* This example requires Tailwind CSS v2.0+ */
'use client'


import Link from 'next/link'
import Image from 'next/image'



export default function Hero() {
    return (

        <main>
            <div>
                {/* Hero card */}
                <div className="relative max-w-screen-2xl m-auto">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                    <div className="sm:px-8 lg:px-20">
                        <div className="relative shadow-xl rounded-2xl sm:overflow-hidden">
                            <div className="absolute w-full  inset-0">
                                <Image
                                    className="h-full w-full object-cover rounded-lg"
                                    src="/img/wosmgitz.png"
                                    alt="People working on laptops"
                                    width={600}
                                    height={600}
                                />
                                <div className="absolute inset-0 bg-indigo-200 mix-blend-multiply" />
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                <h1 className='head_text text-center text-white lg:text-6xl'>
                                    Welcome to the North West Regional Fund For Health Promotion
                                    <br className='max-md:hidden' />
                                    <span className='orange_gradient text-center'> (NWRFHP)</span>
                                </h1>
                                <p className='desc text-center px-6'>
                                    Providing Sustainable Quality health Care Services To the Population...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo cloud */}
                <div className="bg-gray-100">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-xl font-bold text-indigo-700 tracking-tight">
                            Our partners
                        </p>
                        <div className="mt-12 grid grid-cols-2 justify-items-center gap-4 lg:grid-cols-5">
                            <div className="col-span-1 flex justify-center ">
                                <Image className="h-12 grayscale object-contain w-200" src="/img/logo2.png" alt="Tuple" width={60} height={60} />
                            </div>
                            <div className="col-span-1 flex justify-center ">
                                <Image className="h-12 grayscale object-contain w-200" src="/img/logo3.png" alt="Mirage" width={60} height={60} />
                            </div>
                            <div className="col-span-1 flex justify-center ">
                                <Image
                                    className="h-12  grayscale object-contain w-200"
                                    src="/img/logo4.png"
                                    alt="StaticKit" width={60} height={60}
                                />
                            </div>
                            <div className="col-span-1 flex justify-center ">
                                <Image
                                    className="h-12 grayscale object-contain w-200"
                                    src="/img/logo5.png"
                                    alt="Transistor" width={60} height={60}
                                />
                            </div>
                            <div className="col-span-1 flex justify-center">
                                <Image
                                    className="h-12 grayscale object-contain w-200"
                                    src="/img/logo6.png"
                                    alt="Workcation" width={80} height={40}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* More main page content here... */}
        </main>
    )
}
