import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About - Anton Rybakou",
  description: "Curriculum Vitae",
};

export default function Home() {
  return (
    <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-8 gap-12">
      <div className="text-center md:text-left max-w-xl order-2 md:order-1 z-10">
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Anton Rybakou</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          I'm Front-End Developer
        </p>
        <Button asChild variant="link" className="p-0">
          <a
            href="/cv_anton_rybakou.pdf"
            download="cv_anton_rybakou.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-5 w-5" /> Download CV
          </a>
        </Button>
      </div>
      <div className="w-64 h-64 md:w-96 md:h-96 relative overflow-hidden order-1 md:order-2">
        <Image
          src="/photo.jpg"
          alt="Anton Rybakou photo"
          width={300}
          height={300}
          style={{
            objectFit: "cover",
            borderRadius: "15% 85% 15% 85% / 85% 15% 85% 15%",
          }}
          priority
        />
      </div>
    </div>
  );
}
