"use client"
const Navbar = () => {
  return (
    <nav className="bg-white text-black overflow-x-hidden mx-auto">
  <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-x-hidden mx-auto">
    <div className="flex items-center justify-center lg:justify-start">
      <a href="#" className="text-xl font-bold">Brand</a>
    </div>
    <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-end space-y-2 lg:space-y-0 lg:space-x-4">
      <a href="#" className="hover:text-gray-300">Home</a>
      <a href="#" className="hover:text-gray-300">About</a>
      <a href="#" className="hover:text-gray-300">Services</a>
      <a href="#" className="hover:text-gray-300">Contact</a>
    </div>
  </div>
</nav>
  );
};

export default Navbar;