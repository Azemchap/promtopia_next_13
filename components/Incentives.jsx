/* This example requires Tailwind CSS v2.0+ */
'use client'

import Image from 'next/image'

const perks = [
    {
        name: 'Mission',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
        description:
            "To assist the Ministry of Public Health in Promoting access to quality health care for the population of the NWR.",
    },
    {
        name: 'Vision',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
        description:
            "Our vision is to provide and maintain Sustainable Quality health Care for the North West Region",
    },
    {
        name: 'Operations',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
        description:
            'We are always on call 24/7. You can Meet Us in our office during working days.',
    },
    {
        name: 'Experience',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
        description:
            "We are specialized in delivering Quality medicines for health care services since 1987.",
    },
]

export default function Incentives() {
    return (
        <section className="bg-gray-50 px-4">
            <h2 className="sr-only">Who we are?</h2>
            <h2 className=" lg:pt-12 text-2xl text-indigo-800 sm:text-4xl  text-center font-extrabold tracking-wide">Who we are</h2>
            <p className="mt-1 max-w-2xl mx-auto text-sm lg:text-xl text-center text-gray-500 sm:mt-4 ">
                Connecting To Over 80% Of The North West Region. The People Trust Us...
            </p>
            <div className="max-w-screen-2xl mx-auto py-8 sm:px-2 sm:py-20 ">
                <div className="px-4 grid grid-cols-1 gap-y-12 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {perks.map((perk) => (
                        <div key={perk.name} className="sm:flex">
                            <div className="sm:flex-shrink-0">
                                <div className="flow-root">
                                    <Image className="w-28 h-24" src={perk.imageSrc} alt=""
                                        width={40} height={40} />
                                </div>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <h3 className="text-2xl font-medium text-gray-900">{perk.name}</h3>
                                <p className="mt-2 text-xl text-gray-500">{perk.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
