import clsx from "clsx";
import "./globals.css";
import { dmSans, mono, satoshi } from "@/lib/fonts";
import { Providers } from "./providers";
import Nav from "@/components/nav";


export const metadata = {
  title: "Petronas Career",
  description:
    "Secure your dream job with Petronas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx([mono.className, "flex"])}>
        <Providers>
          <div className="z-10 w-full">
            <Nav />
            {children}
            {/* <Footer /> */}
            <div className="py-10"></div>
          </div>
          {/* <Background /> */}
        </Providers>
      </body>
    </html>
  );
}