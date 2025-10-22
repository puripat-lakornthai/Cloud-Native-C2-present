import { Lightbulb, MessageSquare, Gauge, Package, Cpu } from "lucide-react";
import iconCloud from "@/assets/icon-cloud.jpg";
import lessonsImage from "@/assets/lessons-learned.jpg";

export const Slide6 = () => {
  const lessons = [
    {
      icon: MessageSquare,
      text: "เรียนจาก Kafka (ระบบ message bus) และ Redis ทำงานร่วมกัน"
    },
    {
      icon: Gauge,
      text: "Istio (ระบบ service mesh) ช่วยในการทดสอบ performance"
    },
    {
      icon: Package,
      text: "ระบบดีมาก ผู้ใช้ทำการล็อกอินได้อย่างสะดวก"
    },
    {
      icon: Cpu,
      text: "KIND (Kubernetes-in-Docker) เป็นเครื่องมือทดลอง cluster ในระบบ dev ได้ใกล้เคียงจริง"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6">
          {/* แท่งไล่เฉดเป็น element แยก (ไม่ใช้ before/after) */}
          <span className="block w-1.5 md:w-2 h-16 rounded-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 shadow-md" />
          {/* <img src={iconCloud} alt="Cloud Icon" className="h-16 w-16 object-contain" /> */}
          <div>
            <h2 className="text-4xl font-bold gradient-text">Lessons Learned</h2>
            <p className="text-2xl text-muted-foreground">บทเรียนที่ได้รับ</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-6">
          สิ่งที่ได้เรียนรู้จากการออกแบบและพัฒนา
        </h3>

        <div className="space-y-3">
          {lessons.map((lesson, index) => {
            const Icon = lesson.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-purple-200 hover:border-purple-400 hover:shadow-md transition-all"
              >
                <div className="mt-0.5 h-10 w-10 rounded-lg bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-base text-foreground leading-relaxed pt-1.5">{lesson.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-3xl blur-2xl" />
        <img 
          src={lessonsImage} 
          alt="Lessons Learned" 
          className="relative rounded-2xl shadow-2xl w-full h-auto"
        />
      </div>
    </div>
  );
};
