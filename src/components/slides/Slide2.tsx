import { Cloud, Server, Shield, Lock, Zap } from "lucide-react";
import iconCloud from "@/assets/icon-cloud.jpg";
import systemImage from "@/assets/system-overview.jpg";

export const Slide2 = () => {
  const features = [
    "ระบบ C2 (Command & Control ระบบควบคุมและสั่งการ) เดิมเป็น Desktop ย้ายไป Cloud",
    "ใช้ Microservices (สถาปัตยกรรมแบบแยกบริการ) + Redis (ระบบส่งค่าแบบเรียลไทม์)",
    "ผู้ใช้เข้าระบบด้วย SSO (Single Sign-On การเข้าสู่ระบบแบบรวมกัน)",
    "JWT (JSON Web Token โทเค็นยืนยันตัวตน) ใช้ในการควบคุมสิทธิ",
    "เพิ่มความปลอดภัย ยืดหยุ่น และขยายระบบได้ง่าย"
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6">
          {/* แท่งไล่เฉดเป็น element แยก (ไม่ใช้ before/after) */}
          <span className="block w-1.5 md:w-2 h-16 rounded-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 shadow-md" />
          {/* <img src={iconCloud} alt="Cloud Icon" className="h-16 w-16 object-contain" /> */}
          <div>
            <h2 className="text-4xl font-bold gradient-text">System Overview</h2>
            <p className="text-2xl text-muted-foreground">ภาพรวมของระบบ</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4">
          โครงสร้างระบบควบคุมและสั่งการแบบ Cloud-Native
        </h3>

        <div className="space-y-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="mt-0.5 h-7 w-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              <p className="text-base text-foreground leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
        <img 
          src={systemImage} 
          alt="System Architecture" 
          className="relative rounded-2xl shadow-2xl w-full h-auto"
        />
      </div>
    </div>
  );
};
