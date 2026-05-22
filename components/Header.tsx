"use client";

import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "หน้าแรก", href: "#home" },
  { label: "แพ็กเกจ", href: "#pricing" },
  { label: "ผลงาน", href: "#portfolio" },
  { label: "จุดเด่น", href: "#features" },
  { label: "ติดต่อเรา", href: "#contact" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3" aria-label="Sakon Custom Web home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-white shadow-sm">
            <Code2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-normal text-gray-950 sm:text-xl">
            Sakon Custom Web
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition hover:text-brand-600"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#contact"
            className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 hover:shadow-md"
          >
            เริ่มต้นทำเว็บไซต์
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-800 transition hover:border-brand-200 hover:bg-brand-50 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 pt-2 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-gray-700 transition hover:bg-brand-50 hover:text-brand-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 rounded-xl bg-brand-500 px-4 py-3 text-center text-base font-semibold text-white transition hover:bg-brand-600"
              onClick={() => setIsOpen(false)}
            >
              เริ่มต้นทำเว็บไซต์
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
