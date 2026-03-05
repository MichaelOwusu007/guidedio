
// ✅ RootLayout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "sonner";

// ✅ SEO metadata
export const metadata = {
  title: "Guidedio - Thestudentpanacea",
  description:
    "An Education Consultant Agency. AI-powered Academic Guidance for JHS, SHS and University Student in Ghana.",
  alternates: {
    canonical: "https://www.guidedio.com/",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
    >
      <head>
        {/* ✅ Basic SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />

        {/* ✅ Favicons */}
        <link
          rel="icon"
          href="/guidedio_favicon.png"
          type="image/x-icon"
          sizes="32X32"
        />
        <link rel="apple-touch-icon" href="/guidedio_favicon.png" />

        {/* ✅ Open Graph (Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.guidedio.com/" />
        <meta property="og:title" content="Guidedio - Thestudentpanacea" />
        <meta
          property="og:description"
          content="An Education Consultant Agency. AI-powered Academic Guidance for JHS, SHS and University Student in Ghana."
        />
        <meta property="og:image" content="https://www.guidedio.com/images/og-image.png" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.guidedio.com/" />
        <meta name="twitter:title" content="Guidedio - Thestudentpanacea" />
        <meta
          name="twitter:description"
          content="An Education Consultant Agency. AI-powered Academic Guidance for JHS, SHS and University Student in Ghana."
        />
        <meta name="twitter:image" content="https://www.guidedio.com/images/og-image.png" />

        {/* ✅ Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HireYourMate",
              url: "https://www.guidedio.com",
              logo: "https://www.guidedio.com/images/og-image.png",
              sameAs: [
                "https://twitter.com/hireyourmate",
                "https://www.linkedin.com/company/hireyourmate",
                "https://www.instagram.com/hireyourmate"
              ]
            }),
          }}
        />
      </head>

      <body className="font-sans text-lg text-black">
        
        <main className="min-h-screen">{children}</main>
        <Toaster position="top-right" richColors />
        
      </body>
    </html>
  );
}












// import type { Metadata } from "next";
// import "./globals.css";


// export const metadata: Metadata = {
//   title: "Guidedio",
//   description: "The Student Panacea",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body 
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
