
const Footer = () => {
  return (
    <div className="text-center h-32 flex items-center justify-center">
      <p className="text-xl text-white">&copy; Copyright {(new Date().getFullYear())} <span className="font-bold">Movie App</span></p>
    </div>
  );
};

export default Footer;
