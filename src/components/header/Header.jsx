import ThemeToggler from "../theme-toggler/ThemeToggler";

const Header = () => {
  return (
    <div className="h-12 bg-white dark:bg-[#1c1c1c] ">
      <ThemeToggler />
    </div>
  );
};

export default Header;
