import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-red-600 px-3 py-2 text-white font-bold">
                HEM
              </div>
              <nav className="ml-6 flex space-x-4">
                <a href="#om-oss" className="nav-link">OM OSS</a>
                <a href="#portfolio" className="nav-link">PORTFOLIO</a>
                <a href="#tjanster" className="nav-link">TJÄNSTER</a>
                <a href="#kontakta-oss" className="nav-link">KONTAKTA OSS</a>
              </nav>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" className="text-gray-500 hover:text-gray-700 social-icon">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 social-icon">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 social-icon">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 social-icon">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hero-content text-center text-white">
          <h2 className="text-3xl font-light mb-2">Viktor</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 uppercase tracking-wider">
            JAG ÄR<br />DESIGNER
          </h1>
          <p className="mb-4 font-light italic text-lg">Jag skapar fantastiska saker</p>
          <p className="max-w-2xl mx-auto mb-8 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation, ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <a href="#portfolio" className="primary-btn uppercase tracking-wider">LÄS MER</a>
        </div>
      </section>

      {/* Cursor Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Tips för att använda Cursor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-gray-50 shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">AI-assisterad kodning</h3>
                <p className="text-gray-600">
                  Använd Cursors AI-funktioner för att generera kod, refaktorera befintlig kod och få förslag på lösningar medan du skriver.
                </p>
              </div>
            </div>
            
            <div className="card bg-gray-50 shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Kortkommandon</h3>
                <p className="text-gray-600">
                  Lär dig de viktigaste kortkommandona i Cursor för att öka din produktivitet:
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-600">
                  <li>Cmd+K: Öppna kommandopanelen</li>
                  <li>Cmd+/: Aktivera AI-assistenten</li>
                  <li>Cmd+J: Öppna terminalen</li>
                </ul>
              </div>
            </div>
            
            <div className="card bg-gray-50 shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Felkorrigering</h3>
                <p className="text-gray-600">
                  Cursor kan hjälpa dig att identifiera och fixa fel i din kod. Använd "Explain Error" för att få en tydlig förklaring av felet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intressanta fakta */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Intressanta fakta om webbutveckling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">React och Next.js</h3>
                <p className="text-gray-600 mb-4">
                  Next.js är ett kraftfullt React-ramverk som förenklar utveckling genom att erbjuda:
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Servergenererad rendering (SSR)</li>
                  <li>Statisk generering (SSG)</li>
                  <li>API-rutter inbyggda i filsystemet</li>
                  <li>Automatisk koddelning för snabbare laddningstider</li>
                </ul>
              </div>
            </div>
            
            <div className="card bg-white shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Moderna designtrender</h3>
                <p className="text-gray-600 mb-4">
                  Aktuella trender inom webbdesign 2023-2024:
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Neomorfism och glassmorfism</li>
                  <li>Mörka lägen och anpassningsbara färgteman</li>
                  <li>Mikrointeraktioner för bättre användarupplevelse</li>
                  <li>3D-element och animationer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-2">© {new Date().getFullYear()} Cursor Design Studio. Alla rättigheter förbehållna.</p>
            <p className="text-gray-400 text-sm">
              Skapad med Next.js, Tailwind CSS och passion för design.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
