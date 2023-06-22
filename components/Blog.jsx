'use client'

import Image from 'next/image'
import Link from 'next/link'

/* This example requires Tailwind CSS v2.0+ */


const posts = [
    {
        title: 'Boost your conversion rate',
        href: '#',
        category: { name: 'Program', href: '#', color: 'bg-indigo-100 text-indigo-800' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
        date: 'Mar 16, 2024',
        datetime: '2020-03-16',
        imageUrl:
            '/img/096A0579.jpg',
        readingTime: '6 min',
    },
    {
        title: 'How to use search engine optimization to drive sales',
        href: '#',
        category: { name: 'Blog', href: '#', color: 'bg-pink-100 text-pink-800' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
        date: 'May 10, 2024',
        datetime: '2020-03-10',
        imageUrl:
            '/img/096A0583.jpg',
        readingTime: '4 min',
    },
    {
        title: 'Improve your customer experience',
        href: '#',
        category: { name: 'Event', href: '#', color: 'bg-green-100 text-green-800' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        date: 'Feb 12, 2022',
        datetime: '2020-02-12',
        imageUrl:
            '/img/096A0522.jpg',
        readingTime: '11 min',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Blog() {
    return (
        <div className="relative  bg-gray-50 w-full max-w-screen-2xl mx-auto pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            {/* <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
            </div> */}
            <div className="relative max-w-screen-2xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-indigo-800 sm:text-4xl ">Our recent updates</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Learn more about our recent activities, programs and even.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-7xl">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <Image className="h-48 w-full object-cover" src={post.imageUrl} alt="" width={400} height={400} />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        <Link href={post.category.href} className="inline-block">
                                            <span
                                                className={classNames(
                                                    post.category.color,
                                                    'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                                                )}
                                            >
                                                {post.category.name}
                                            </span>
                                        </Link>
                                    </p>
                                    <Link href={post.href} className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                    </Link>
                                </div>
                                <div className="mt-6 flex items-center">
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime={post.datetime}>{post.date}</time>
                                            <span aria-hidden="true">&middot;</span>
                                            <span>{post.readingTime} read</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
