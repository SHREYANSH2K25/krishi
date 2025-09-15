import Header from "../components/header.jsx"
import Hero from "../components/hero.jsx"
import Features from "../components/features.jsx"
import Testimonials from "../components/testimonials.jsx"
import Footer from "../components/footer.jsx"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
