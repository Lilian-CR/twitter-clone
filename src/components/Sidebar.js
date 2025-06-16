"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Search,
  Bell,
  Mail,
  Users,
  Star,
  User,
  MoreHorizontal,
} from "lucide-react";
import Modal from "./Modal";

const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Explore", href: "/", icon: Search },
  { name: "Notifications", href: "/", icon: Bell },
  { name: "Messages", href: "/", icon: Mail },
  { name: "Communities", href: "/", icon: Users },
  { name: "Premium", href: "/", icon: Star },
  { name: "Profile", href: "/profile", icon: User },
  { name: "More", href: "/", icon: MoreHorizontal },
];

export default function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <aside className="w-full md:w-[250px] p-4 border-l border-gray-200">
        <div>
          {/* Custom Logo */}
          <img
            className="w-8 mb-6"
            src="/favicon.png"
            alt="App logo"
          />

          {/* Navigation */}
          <nav className="flex flex-col gap-4">
            {menuItems.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                className="flex items-center gap-3 text-base font-medium hover:bg-gray-100 px-3 py-2 rounded transition"
              >
                <Icon size={20} />
                <span>{name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Tweet Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-blue-500 text-white font-semibold py-2 mt-6 rounded-full hover:bg-blue-600 transition"
        >
          Tweet
        </button>
      </aside>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}