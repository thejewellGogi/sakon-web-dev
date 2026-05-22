import { Check } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Starter",
    price: "5,000-8,000 บาท",
    description: "เหมาะสำหรับร้านเริ่มต้นที่ต้องการหน้าเว็บไซต์มืออาชีพ",
    features: ["Landing Page 1 หน้า", "Responsive Design", "ปุ่มติดต่อ LINE OA", "ฟอร์มติดต่อพื้นฐาน"]
  },
  {
    name: "Business",
    price: "12,000-25,000 บาท",
    description: "เหมาะสำหรับธุรกิจที่ต้องการเว็บหลายหน้าและภาพลักษณ์จริงจัง",
    features: ["เว็บไซต์ 4-6 หน้า", "SEO พื้นฐาน", "จัดหมวดหมู่บริการหรือสินค้า", "เชื่อมต่อ analytics"],
    highlighted: true
  },
  {
    name: "Custom",
    price: "30,000+ บาท",
    description: "เหมาะสำหรับระบบเฉพาะทางหรือร้านที่ต้องการฟีเจอร์เพิ่มเติม",
    features: ["ระบบหลังบ้าน", "เชื่อมต่อ API", "ออกแบบ workflow เฉพาะ", "ดูแลหลังส่งมอบ"]
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-14 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-normal text-brand-600">Pricing</p>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-950 sm:text-4xl">
            แพ็กเกจรับทำเว็บไซต์
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            เลือกแพ็กเกจตามขนาดธุรกิจ เริ่มจากหน้า Landing Page ไปจนถึงระบบเว็บไซต์ที่ออกแบบตามความต้องการ
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-6">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft ${
                item.highlighted
                  ? "border-brand-500 bg-gray-950 text-white"
                  : "border-gray-100 bg-white text-gray-950"
              }`}
            >
              {item.highlighted && (
                <span className="mb-5 inline-flex rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">
                  แนะนำสำหรับธุรกิจ
                </span>
              )}
              <h3 className="text-2xl font-extrabold">{item.name}</h3>
              <p className={`mt-3 text-sm leading-6 ${item.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                {item.description}
              </p>
              <p className={`mt-6 text-3xl font-extrabold ${item.highlighted ? "text-brand-300" : "text-brand-600"}`}>
                {item.price}
              </p>

              <ul className="mt-6 space-y-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <span className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                      item.highlighted ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-600"
                    }`}>
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className={item.highlighted ? "text-gray-100" : "text-gray-700"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 py-3 text-base font-semibold transition ${
                  item.highlighted
                    ? "bg-brand-500 text-white hover:bg-brand-600"
                    : "bg-brand-50 text-brand-700 hover:bg-brand-500 hover:text-white"
                }`}
              >
                ขอรายละเอียดแพ็กเกจ
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
