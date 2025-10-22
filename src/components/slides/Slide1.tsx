import logo1 from "@/assets/logo-1.jpg";
import heroImage from "@/assets/hero-security.jpg";

export const Slide1 = () => {
  return (
    <div className="relative">
      {/* ===== Background ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60" />
        <img 
          src={heroImage} 
          alt="Cloud Security" 
          className="w-full h-full object-cover opacity-30 mix-blend-multiply"
        />
      </div>

      {/* ===== Content ===== */}
      <div className="text-center space-y-8 py-12">
        {/* โลโก้ */}
        <div className="flex justify-center mb-12 animate-fade-in">
          <img
            src={logo1}
            alt="Logo 1"
            className="h-32 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* หัวข้อหลัก */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight">
          การรักษาความปลอดภัยของระบบ<br />
          Cloud-Native C2<br />
          ด้วย SSO และ JWT
        </h1>

        {/* กล่องคำอ้างอิง */}
        <div className="inline-block bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg">
          <p className="text-xl text-foreground font-medium">
            อ้างอิงจากงานวิจัย IEEE โดย Ryan Melton – Ball Aerospace
          </p>
        </div>
      </div>
    </div>
  );
};
