export const Navbar = ({ children }) => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16">{children}</div>
      </div>
    </nav>
  );
};
