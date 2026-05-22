import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 py-14 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl bg-gray-950 p-6 text-white shadow-soft sm:p-8">
            <p className="text-sm font-bold uppercase tracking-normal text-brand-100">Contact</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              เริ่มวางแผนเว็บไซต์ของคุณวันนี้
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-300">
              ส่งรายละเอียดธุรกิจ งบประมาณ หรือฟีเจอร์ที่ต้องการมาให้เรา ทีมงานจะช่วยแนะนำแพ็กเกจและแนวทางที่เหมาะสม
            </p>

            <Link
              href="https://line.me/R/ti/p/@yourlineoa"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-600 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              คุยผ่าน LINE OA
            </Link>

            <div className="mt-8 space-y-4 text-sm text-gray-200">
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-none text-brand-400" aria-hidden="true" />
                <span>02-123-4567</span>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-none text-brand-400" aria-hidden="true" />
                <span>hello@orangewebstudio.co</span>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-none text-brand-400" aria-hidden="true" />
                <span>รับงานทั่วประเทศ ประชุมออนไลน์และสรุปงานเป็นขั้นตอน</span>
              </div>
            </div>
          </div>

          <form className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-gray-800">ชื่อ</span>
                <input
                  type="text"
                  name="name"
                  placeholder="ชื่อของคุณ"
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-gray-800">เบอร์โทร</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="08x-xxx-xxxx"
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-semibold text-gray-800">อีเมล</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              />
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-semibold text-gray-800">รายละเอียดเว็บไซต์ที่ต้องการ</span>
              <textarea
                name="message"
                rows={5}
                placeholder="เช่น เว็บขายสินค้า, Landing Page, ระบบหลังบ้าน, เชื่อมต่อ LINE OA"
                className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              />
            </label>

            <button
              type="submit"
              className="mt-6 min-h-12 w-full rounded-xl bg-brand-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-600 hover:shadow-lg"
            >
              ส่งรายละเอียดให้ทีมงาน
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
