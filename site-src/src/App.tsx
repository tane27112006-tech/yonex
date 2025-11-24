import React from 'react'
import Hero from './assets/hero.svg'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-inter text-primary">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-2xl font-extrabold">Yonex — Performance Gear</div>
        <nav className="space-x-6 hidden md:flex">
          <a className="text-gray-600 hover:text-gray-900">Store</a>
          <a className="text-gray-600 hover:text-gray-900">Technology</a>
          <a className="text-gray-600 hover:text-gray-900">Support</a>
        </nav>
        <button className="md:hidden p-2 rounded-md bg-gray-100">☰</button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        <section className="flex-1 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Premium racquets & gear crafted for performance</h1>
          <p className="mt-6 text-gray-600 max-w-xl">Lightweight frames, engineered strings, and professional-grade materials — everything you need to play at your best. This is a small demo site based on a Figma starter design.</p>
          <div className="mt-8 flex gap-4">
            <a href="#" className="px-6 py-3 bg-accent text-white rounded-md shadow hover:bg-sky-500 transition">Shop</a>
            <a href="#" className="px-6 py-3 border border-gray-200 rounded-md hover:bg-gray-50 transition">Learn more</a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">Lightweight</h3>
              <p className="text-sm text-gray-500">Optimized frame designs for faster swings.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">Durable</h3>
              <p className="text-sm text-gray-500">Materials tested for pro-level durability.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">Precision</h3>
              <p className="text-sm text-gray-500">Engineered for control and consistency.</p>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500">Figma file: <a className="text-accent" href="https://www.figma.com/design/OvNserY3UcS6gaTOx7iK5W/Untitled?node-id=0-1&t=ot9PLuz8Y54Ez8A2-1" target="_blank" rel="noreferrer">Open design</a></p>
        </section>

        <aside className="flex-1 flex items-center justify-center animate-fade-in-up">
          <img src={Hero} alt="Hero illustration" className="w-full max-w-lg rounded-xl shadow-lg" />
        </aside>
      </main>

      <footer className="border-t mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500">© {new Date().getFullYear()} Yonex — demo site</div>
      </footer>
    </div>
  )
}
