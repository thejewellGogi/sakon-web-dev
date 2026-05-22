import { ArrowRight, CheckCircle2, MonitorSmartphone, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-gray-950">
      <Image
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80"
        alt="ทีมออกแบบเว็บไซต์กำลังทำงานบนแล็ปท็อป"
        fill
        priority
        className="absolute inset-0 -z-20 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-gray-950/70" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="mx-auto flex min-h-[calc(100vh-68px)] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 xl:py-24">
        <div className="max-w-3xl animate-fadeUp">
          <p className="mb-4 inline-flex rounded-full bg-white/12 px-4 py-2 text-sm font-semibold text-brand-100 ring-1 ring-white/20 backdrop-blur">
            Website service for modern online sellers
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
            สร้างเว็บไซต์ขายของออนไลน์ รองรับทุกอุปกรณ์
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-100 sm:text-lg">
            ออกแบบเว็บไซต์สวย ใช้งานง่าย รองรับมือถือ แท็บเล็ต และคอมพิวเตอร์ พร้อมเชื่อมต่อ LINE OA
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-600 hover:shadow-lg"
            >
              เริ่มต้นทำเว็บไซต์
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="#pricing"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white hover:text-gray-950"
            >
              ดูแพ็กเกจ
            </Link>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-white sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <MonitorSmartphone className="h-5 w-5 flex-none text-brand-300" aria-hidden="true" />
              <span>Mobile First</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <MessageCircle className="h-5 w-5 flex-none text-brand-300" aria-hidden="true" />
              <span>LINE OA Ready</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <CheckCircle2 className="h-5 w-5 flex-none text-brand-300" aria-hidden="true" />
              <span>พร้อมใช้งานจริง</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
