const Navbar = () => {
  return (
    <nav className="p-4 shadow flex justify-between">
      <h1 className="font-bold text-xl">Pratik Vats</h1>
      <div className="space-x-4">
        <a href="#">Projects</a>
        <a href="#">Education</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;