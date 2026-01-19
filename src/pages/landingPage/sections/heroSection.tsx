import { HeroFont, MediumFont } from "../../../styles/commomTextStyles";
const HeroSection = () => {
  const title = "Lorem Ipsum";
  const content =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

  return (
    <section className="min-h-svh h-screen px-[var(--page-padding)] grid grid-col-3">
      <div></div>
      <div className="flex justify-center items-center">
        <HeroFont>{title}</HeroFont>
      </div>
      <div className="max-w-1/2 flex justify-self-center items-center text-center">
        <MediumFont>{content}</MediumFont>
      </div>
    </section>
  );
};

export default HeroSection;
