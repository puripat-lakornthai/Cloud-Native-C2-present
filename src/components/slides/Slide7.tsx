import { CheckCircle, Globe, Layers, Shield } from "lucide-react";
import iconCloud from "@/assets/icon-cloud.jpg";
import summaryImage from "@/assets/summary.jpg";

export const Slide7 = () => {
  const summaries = [
    { icon: Globe,       text: "ระบบ Cloud-Native C2 ใช้มาตรฐานสากล เช่น JWT, OpenID, Istio, Kubernetes" },
    { icon: Layers,      text: "มีความยืดหยุ่น และเหมาะกับองค์กรที่ต้องการควบคุมการเข้าถึง" },
    { icon: CheckCircle, text: "สามารถประยุกต์ใช้กับ Mission Planning และ Ground System อื่นๆ" },
    { icon: Shield,      text: "ลดความเสี่ยง เมื่อมีความพยายามเข้าถึงระบบโดยไม่ได้รับอนุญาต" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* ภาพสรุปด้านซ้าย — ทำให้สีสดขึ้น */}
      <div className="relative order-2 md:order-1">
        <div className="absolute inset-0 rounded-3xl blur-2xl bg-gradient-to-br from-blue-400/35 via-purple-400/35 to-pink-400/35 mix-blend-overlay" />
        <img
          src={summaryImage}
          alt="Summary"
          className="relative rounded-2xl shadow-2xl w-full h-auto saturate-150 brightness-110 contrast-105"
        />
      </div>

      {/* เนื้อหา */}
      <div className="space-y-6 order-1 md:order-2">
        {/* หัวข้อ + แท่งสีด้านซ้าย */}
        <div
          className="
            not-prose flex items-center gap-4 mb-6
            divide-x-0           /* ปิดเส้นแบ่งแนวตั้ง */
            [&>*]:border-l-0     /* รีเซ็ต border-left ของลูกทุกตัว */
          "
        >
          {/* แท่งไล่เฉดเป็น element แยก (ไม่ใช้ before/after) */}
          <span className="block w-1.5 md:w-2 h-16 rounded-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 shadow-md" />

          {/* <img src={iconCloud} alt="Cloud Icon" className="h-16 w-16 object-contain" /> */}

          <div>
            {/* กันสไตล์ global ทุกชนิดที่อาจเติมเส้นเข้ามา */}
            <h2 className="text-4xl font-bold gradient-text leading-tight !border-l-0 !pl-0">
              Summary
            </h2>
            <p className="text-2xl text-muted-foreground">บทสรุป</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-6">ความสำคัญของสถาปัตยกรรมและความปลอดภัย</h3>

        <div className="space-y-3">
          {summaries.map((summary, index) => {
            const Icon = summary.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-primary/30 hover:border-primary/60 hover:shadow-lg transition-all"
              >
                <div className="mt-0.5 h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-base text-foreground font-medium leading-relaxed pt-1.5">
                  {summary.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
