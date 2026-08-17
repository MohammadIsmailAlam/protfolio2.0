import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";

/**
 * Layout — the page shell: fixed Navbar, scrollable main content, Footer.
 * App.jsx only has to render <Layout>{sections}</Layout> and never has
 * to think about nav/footer placement again.
 */
export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main className="pt-14">{children}</main>
      <Footer />
    </div>
  );
}
