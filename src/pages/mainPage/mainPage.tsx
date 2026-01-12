import MainLayout from "../../layouts/mainLayout/layout";

const title = "Lorem Ipsum";
const content =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const MainPage = () => {
  return (
    <MainLayout>
      <div className="py-[100px] px-[60px] h-full flex flex-row justify-between gap-36">
        <div className=" flex flex-1 flex-col justify-center grow-1 gap-10">
          <p className="text-4xl font-bold">{title}</p>
          <p className="text-2xl">{content}</p>
          <a className="text-2xl text-[#327AFF]" href="#">
            More about Felog
          </a>
        </div>
        <div className="flex flex-1 grow-1">
          <img
            src="../../../assets/MainPageImage.png"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default MainPage;
