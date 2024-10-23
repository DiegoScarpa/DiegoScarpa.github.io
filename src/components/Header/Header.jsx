export function Header() {
  return (
    <header className="bg-white flex justify-between items-center pt-6 pb-2 px-6 md:px-24">
      <div className="w-12"></div>

      {/* Navigation Bar */}
      <nav className="flex-grow flex justify-center">
        <div className="bg-white rounded-full px-6 py-4 flex space-x-8 shadow-lg">
          <a href="/" className="text-black hover:text-teal-600">
            Home
          </a>
          <a href="/about" className="text-black hover:text-teal-600">
            About
          </a>
          <a href="/projects" className="text-black hover:text-teal-600">
            Projects
          </a>
          <a href="/uses" className="text-black hover:text-teal-600">
            Uses
          </a>
        </div>
      </nav>

      <div className="w-12 h-12 flex items-center justify-center bg-white text-teal-500 rounded-full shadow-lg">☼</div>
    </header>
  );
}
