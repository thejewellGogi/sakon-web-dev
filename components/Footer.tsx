import { Code2, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-white">
            <Code2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-bold text-gray-950">Orange Web Studio</p>
            <p className="text-sm text-gray-500">รับทำเว็บไซต์ขายของออนไลน์</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-gray-600">
          <Link href="#pricing" className="transition hover:text-brand-600">
            แพ็กเกจ
          </Link>
          <Link href="#portfolio" className="transition hover:text-brand-600">
            ผลงาน
          </Link>
          <Link href="#features" className="transition hover:text-brand-600">
            จุดเด่น
          </Link>
          <Link href="#contact" className="transition hover:text-brand-600">
            ติดต่อ
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="border-t border-gray-100 px-4 py-4 text-center text-sm text-gray-500">
        © 2026 Orange Web Studio. All rights reserved.
      </div>
    </footer>
  );
}
