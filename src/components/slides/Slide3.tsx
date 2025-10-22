import { Shield, Lock, Network, AlertTriangle, CheckCircle } from "lucide-react";
import iconSecurity from "@/assets/icon-security.jpg";
import internalImage from "@/assets/internal-security.jpg";

export const Slide3 = () => {
  const features = [
    {
      icon: Shield,
      text: "การทำงานแบบ container ลดจุดโจมตีในระบบ"
    },
    {
      icon: Lock,
      text: "การเข้ารหัสป้องกันการดักข้อมูล"
    },
    {
      icon: Network,
      text: "Zero-Trust Networking (เครือข่ายแบบไม่ไว้ใจใคร) ตรวจสอบทุก connection"
    },
    {
      icon: AlertTriangle,
      text: "Egress Control (ควบคุมทางออก) จำกัดการเข้าถึงภายนอก"
    },
    {
      icon: CheckCircle,
      text: "ลดความเสียหายเมื่อเกิดการโจมตี"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="relative order-2 md:order-1">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl blur-2xl" />
        <img 
          src={internalImage} 
          alt="Internal Security" 
          className="relative rounded-2xl shadow-2xl w-full h-auto"
        />
      </div>

      <div className="space-y-6 order-1 md:order-2">
        <div className="flex items-center gap-4 mb-6">
          {/* แท่งไล่เฉดเป็น element แยก (ไม่ใช้ before/after) */}
          <span className="block w-1.5 md:w-2 h-16 rounded-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 shadow-md" />
          {/* <img src={iconSecurity} alt="Security Icon" className="h-16 w-16 object-contain" /> */}
          <div>
            <h2 className="text-4xl font-bold gradient-text">Internal Security</h2>
            <p className="text-2xl text-muted-foreground">ความปลอดภัยในระบบ</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-6">
          มาตรการด้านความปลอดภัยใน Kubernetes Cluster
        </h3>

        <div className="space-y-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div className="mt-0.5 h-10 w-10 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-base text-foreground leading-relaxed pt-1.5">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
