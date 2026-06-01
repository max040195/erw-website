import "./globals.css";
import { SiteHeader, SiteFooter } from "../components/site-shell";

export const metadata = {
  title: "ERW | Eupen Road to Worlds",
  description: "A rental kart racing weekend built for drivers chasing the next level.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
