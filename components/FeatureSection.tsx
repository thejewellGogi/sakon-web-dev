import {
  Gauge,
  Headphones,
  LayoutDashboard,
  MessageCircle,
  MonitorSmartphone,
  SearchCheck
} from "lucide-react";

const features = [
  {
    title: "Responsive Design",
    description: "เว็บไซต์ปรับหน้าจอได้ดีทั้งมือถือ แท็บเล็ต แล็ปท็อป และเดสก์ท็อป",
    icon: MonitorSmartphone
  },
  {
    title: "SEO Friendly",
    description: "วางโครงสร้างหน้าเว็บให้อ่านง่าย โหลดเป็นระบบ และพร้อมต่อยอด SEO",
    icon: SearchCheck
  },
  {
    title: "เชื่อมต่อ LINE OA",
    description: "เพิ่มปุ่มติดต่อ LINE OA ให้ลูกค้าทักหาร้านได้ทันทีจากทุก section สำคัญ",
    icon: MessageCircle
  },
  {
    title: "ระบบหลังบ้าน",
    description: "รองรับการออกแบบระบบจัดการข้อมูลสำหรับสินค้า บทความ หรือรายการติดต่อ",
    icon: LayoutDashboard
  },
  {
    title: "โหลดเร็ว",
    description: "ใช้ Next.js, next/image และโครงสร้างหน้าเว็บที่เน้น performance",
    icon: Gauge
  },
  {
    title: "ดูแลหลังส่งมอบ",
    description: "ให้คำแนะนำการใช้งาน ปรับแก้จุดเล็ก ๆ และช่วยวางแผนพัฒนาต่อ",
    icon: Headphones
  }
];

export default function FeatureSection() {
  return (
    <section id="features" className="bg-white py-14 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-bold uppercase tracking-normal text-brand-600">Features</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-950 sm:text-4xl">
              จุดเด่นของบริการรับทำเว็บไซต์
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-600">
              ครอบคลุมตั้งแต่งานออกแบบหน้าเว็บ การรองรับหลายอุปกรณ์ ไปจนถึงการวางระบบให้ธุรกิจนำไปใช้งานต่อได้จริง
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-100 hover:shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-gray-950">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
