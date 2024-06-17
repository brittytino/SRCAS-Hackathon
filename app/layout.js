import "./globals.css";
import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import "./clash_grotesk.css";

export const metadata = {
  title: "HackSphere - SRCAS Hackathon",
  description:
    "HackSphere is the SRCAS student-run hackathon, which centers on bringing developers and problem solvers from different foundations together and enables them to develop projects that can bring out an impact.",
  keywords: "hackathon, SRCAS, Hacksphere, coding, programming, tech",
  url: "https://hacksphere.vercel.app",
  openGraph: {
    title: "HackSphere - SRCAS Hackathon",
    description:
      "Hacksphere is the SRCAS student-run hackathon, which centers on bringing developers and problem solvers from different foundations together and enables them to develop projects that can bring out an impact.",
    url: "https://hacksphere.vercel.app",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "HackSphere - SRCAS Hackathon",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-50RJG4PPLT"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-50RJG4PPLT');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
