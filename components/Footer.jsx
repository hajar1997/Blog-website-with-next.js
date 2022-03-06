import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import mypicwhite from '../public/logo_white_background_black1.png'
import Image from 'next/image'
import { getCategories } from '../services'
import { Categories } from './'

const Footer = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <footer className="bg-[#161c1c]">
      <div className="container mx-auto px-10 py-10">
        <div className="flex items-center justify-between border-b border-[hsla(0,0%,100%,.1)]">
          <a href="/" className="mb-5 hidden md:inline-block">
            <Image src={mypicwhite} alt="Logo" width="160px" height="40px" />
          </a>
          <p className="text-white">2022</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="mt-5 flex gap-3 ">
            <svg
              className="text-white"
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <Link href="/">
              <p className="inline-block cursor-pointer text-sm text-white transition duration-300 ease-in-out hover:text-blue-400">
                info@melumatlan.com
              </p>
            </Link>
          </div>
          <div className="mt-5 text-white">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <ul>
                  <li className="mb-2 inline-block cursor-pointer cursor-pointer pb-2 transition duration-300 ease-in-out hover:text-blue-400">
                    {category.name}
                  </li>
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>
        <div className="text-center text-sm text-white p-4">
          <h3>
            Made by{' '}
            <Link href="https://hajar-ibrahimli.netlify.app/">
              <span className=" cursor-pointer transition duration-300 ease-in-out hover:text-red-600">
                Hajar Ibrahimli
              </span>
            </Link>
          </h3>
        </div>
    </footer>
  )
}

export default Footer
