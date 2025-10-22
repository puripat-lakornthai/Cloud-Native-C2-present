import { ShieldCheck, Key, Users, Lock, AlertCircle } from "lucide-react";
import iconSecurity from "@/assets/icon-security.jpg";
import externalImage from "@/assets/external-security.jpg";

export const Slide4 = () => {
  const features = [
    {
      icon: ShieldCheck,
      text: "SSO (Single Sign-On ลักษณะการเข้าระบบแบบรวมศูนย์)"
    },
    {
      icon: Key,
      text: "JWT (JSON Web Token โทเค็นยืนยันตัวตน) ลดการใช้รหัสผ่าน"
    },
    {
      icon: Users,
      text: "RBAC (Role-Based Access Control การควบคุมสิทธิ์ตามบทบาท) เช่น Admin, Operator, Viewer"
    },
    {
      icon: Lock,
      text: "Ingress (ทางเข้า) จำกัดเฉพาะ Web UI, API"
    },
    {
      icon: AlertCircle,
      text: "ลดโอกาสโจมตีจากภายนอก"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6">
          {/* แท่งไล่เฉดเป็น element แยก (ไม่ใช้ before/after) */}
          <span className="block w-1.5 md:w-2 h-16 rounded-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 shadow-md" />
          {/* <img src={iconSecurity} alt="Security Icon" className="h-16 w-16 object-contain" /> */}
          <div>
            <h2 className="text-4xl font-bold gradient-text">External Security</h2>
            <p className="text-2xl text-muted-foreground">ความปลอดภัยจากภายนอก</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-2">
          การป้องกันการเข้าถึงระบบ
        </h3>
        <p className="text-lg text-muted-foreground mb-6">
          จากบุคคลภายนอกที่ไม่ได้รับอนุญาต
        </p>

        <div className="space-y-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-purple-200 hover:border-purple-400 hover:shadow-md transition-all"
              >
                <div className="mt-0.5 h-10 w-10 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-base text-foreground leading-relaxed pt-1.5">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur-2xl" />
        <img 
          src={externalImage} 
          alt="External Security" 
          className="relative rounded-2xl shadow-2xl w-full h-auto"
        />
      </div>
    </div>
  );
};
