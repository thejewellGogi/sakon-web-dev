import Image from "next/image";

const projects = [
  {
    title: "เว็บไซต์ร้านแฟชั่น",
    category: "Online Store",
    description: "หน้าโปรโมตสินค้าใหม่ พร้อมปุ่มติดต่อ LINE และแคตตาล็อกสินค้า",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "เว็บไซต์คลินิกความงาม",
    category: "Service Website",
    description: "นำเสนอบริการ รีวิว และฟอร์มนัดหมายสำหรับลูกค้าใหม่",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "เว็บไซต์แบรนด์อาหาร",
    category: "Brand Landing Page",
    description: "Landing Page สำหรับเปิดตัวสินค้า พร้อม CTA และข้อมูลสาขา",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-gray-50 py-14 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-normal text-brand-600">Portfolio</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-950 sm:text-4xl">
              ตัวอย่างผลงานเว็บไซต์
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-gray-600">
            โครงสร้างผลงานรองรับการเพิ่มภาพจริง ชื่อโปรเจกต์ ประเภทธุรกิจ และรายละเอียดสั้น ๆ ได้ทันที
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={720}
                  className="aspect-[4/3] h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-bold text-brand-600">{project.category}</p>
                <h3 className="mt-2 text-xl font-extrabold text-gray-950">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
