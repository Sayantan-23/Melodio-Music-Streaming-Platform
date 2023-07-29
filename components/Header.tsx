"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { toast } from "react-hot-toast";

import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { SlUser } from "react-icons/sl";

import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useSubscribeModal from "@/hooks/useSubscribeModal";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const { onOpen } = useAuthModal();

  const { user } = useUser();
  const subscribeModal = useSubscribeModal();

  const handleSubscriptionModal = () => {
    return subscribeModal.onOpen();
  };

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-[#272727] p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="rounded-full bg-black flex items-center justify-center opacity-75 hover:opacity-100 transition p-1"
            onClick={() => router.back()}
          >
            <RxCaretLeft size={30} className="text-white" />
          </button>
          <button
            className="rounded-full bg-black flex items-center justify-center p-1 opacity-75 hover:opacity-100 transition"
            onClick={() => router.forward()}
          >
            <RxCaretRight size={30} className="text-white" />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome size={20} className="text-black" />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <BiSearch size={20} className="text-black" />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button
                className="bg-white px-6 py-2 whitespace-nowrap"
                onClick={handleSubscriptionModal}
              >
                Explore Premium
              </Button>
              <Button
                className="bg-black rounded-full"
                onClick={() => router.push("/account")}
              >
                <SlUser className="text-white" />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  className="bg-transparent text-neutral-300 font-medium"
                  onClick={onOpen}
                >
                  Sign up
                </Button>
              </div>
              <div className="">
                <Button className="bg-white px-6 py-2" onClick={onOpen}>
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
