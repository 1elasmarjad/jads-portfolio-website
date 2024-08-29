import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Jad El Asmar | My Resume",
  icons: {
    icon: "/favicon.png",
  },
};

export default function PDFPage() {
  return (
    <iframe
      src="/Jad El Asmar Resume.pdf"
      className="h-screen w-screen"
    ></iframe>
  );
}
