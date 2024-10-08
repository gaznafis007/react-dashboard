import {
  ArrowDownLeftIcon,
  ArrowLeftIcon,
  Bars3BottomLeftIcon,
  BellIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import user from "../../assets/user.jpg";
import { useState } from "react";
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <nav className="bg-blue-500 text-white p-4 w-full flex md:flex-row justify-between items-center">
      <div className="flex flex-row gap-4">
        <ArrowLeftIcon className="size-6"></ArrowLeftIcon>
        <p className="font-sans capitalize text-xl">document approvals</p>
      </div>
      {isVisible ? (
        <>
          <XMarkIcon
            onClick={() => setIsVisible(!isVisible)}
            className="size-6 text-white md:hidden cursor-pointer"
          ></XMarkIcon>
          <div className="flex md:hidden flex-col gap-4 items-center">
            <MagnifyingGlassIcon className="size-6"></MagnifyingGlassIcon>
            <ArrowDownLeftIcon className="size-6 text-white"></ArrowDownLeftIcon>
            <QuestionMarkCircleIcon className="size-6 text-white"></QuestionMarkCircleIcon>
            <BellIcon className="size-6 text-white"></BellIcon>
            <img
              src={user}
              alt="user-image"
              className="rounded-md w-12 md:w-18"
            />
          </div>
        </>
      ) : (
        <Bars3BottomLeftIcon
          onClick={() => setIsVisible(!isVisible)}
          className="size-6 text-white md:hidden cursor-pointer"
        ></Bars3BottomLeftIcon>
      )}
      <div className="hidden md:flex flex-row gap-4 items-center">
        <div className="bg-blue-700 flex flex-row gap-2 border border-white rounded-md items-center px-4 py-2">
          <MagnifyingGlassIcon className="size-6"></MagnifyingGlassIcon>
          <input
            type="text"
            name="search"
            className=" bg-transparent text-white capitalize"
            placeholder="search"
          />
        </div>
        <ArrowDownLeftIcon className="size-6 text-white"></ArrowDownLeftIcon>
        <QuestionMarkCircleIcon className="size-6 text-white"></QuestionMarkCircleIcon>
        <BellIcon className="size-6 text-white"></BellIcon>
        <img src={user} alt="user-image" className="rounded-md w-12 md:w-18" />
      </div>
    </nav>
  );
};

export default Navbar;
