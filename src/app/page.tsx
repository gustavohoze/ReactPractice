import Header from "@/components/Header";
import HomeBackground from "@/assets/HomeBackground.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="min-w-screen min-h-[90vh] overflow-hidden" id="HomePage">
        <Image
          src={HomeBackground}
          alt=""
          layout="fill"
          objectFit="cover"
          id="backgroundHomepage"
        />
      </div>
      <h1 id="first">TechnoScape '24</h1>
      <h3 id="footerText">Coming Soon</h3>
    </main>
  );
}
