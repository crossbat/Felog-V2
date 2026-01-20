import { ExtraSmallFont } from "../../styles/commomTextStyles";

const SignPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-10 px-[var(--signpage-padding)] justify-center items-center">
      <div className="w-20 h-20 rounded-full bg-black flex justify-center items-center overflow-hidden shadow-2xl">
        <img
          src="../../../assets/signLogo.png"
          className="w-full h-full object-fit invert"
        />
      </div>
      <div className="flex flex-col w-full min-h-[400px] p-16 rounded-3xl shadow-2xl justify-center items-center">
        <div className="w-full h-fit flex flex-col gap-5 justify-center items-center">
          <input placeholder="아이디" className="w-full text-md p-2" />
          <input
            placeholder="비밀번호"
            type="password"
            className="w-full text-md p-2"
          />
        </div>
        <div className="flex gap-2 w-full">
          <input type="checkbox" />
          <ExtraSmallFont>아이디 기억하기</ExtraSmallFont>
        </div>
      </div>
    </div>
  );
};

export default SignPage;
