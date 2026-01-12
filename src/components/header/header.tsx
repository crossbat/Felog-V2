const Header = () => {
  const logoSrc = "../../../assets/logo.png";
  return (
    <>
      <div className="w-full h-[60px] flex justify-between mt-[30px]">
        <a href="#">
          <img className="h-full" src={logoSrc} alt="logo" />
        </a>
        <div className="flex items-center justify-center w-150 bg-[#f5f5f5] px-[50px] rounded-[15px]">
          <ul className="w-full flex list-none justify-between text-2xl">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Introduce</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center text-2xl">
          <a>Login</a>
        </div>
      </div>
    </>
  );
};

export default Header;
