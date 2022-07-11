// import styles from "./Cards.module.css"
import Button from '../Button/Button'
import { NextPage } from 'next'

const Navbar = () => {
  return (
    <div className="border-slate-100 shadow-md ">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 w-5/6 m-auto">
        <div className="container grid grid-cols-5 gap-4 items-center mx-auto">
          <div className="col-span-2">
            <span className="self-center text-xl text-blue-500 sm:ml-4 md:ml-0 lg:ml-0  whitespace-nowrap dark:text-white">
              CO-CREATOR
            </span>
          </div>
          <div className="col-span-3">
            <div
              className="justify-between items-center w-full md:flex md:l-1 md:order-1"
              id="mobile-menu-4"
            >
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li className="mt-2">
                  <select>
                    <option
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      value="a"
                    >
                      Hire Developers
                    </option>
                    <option value="b">Hire Developers</option>
                    <option value="c">Hire Developers</option>
                    <option value="d">Hire Developers</option>
                  </select>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Insights
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <div className="flex md:order-2">
                    <Button name="Login" path="/login" />
                    <Button name="SignUp" path="/signup" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
