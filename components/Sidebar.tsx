// "use client";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  const handleScrollToHome = () => {
    const nextSection = document.getElementById("get-in-touch");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToPricing = () => {
    const nextSection = document.getElementById("scrollToPrice");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToServices = () => {
    const nextSection = document.getElementById("scrollToService");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToContactUSForm = () => {
    const nextSection = document.getElementById("get-in-touch");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div
        className=" fixed w-full h-full overflow-auto justify-center bg-white grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li
            onClick={toggle}
            className="bg-green-500 border border-green-300 py-2 px-4 rounded-full"
          >
            <CustomButton
              title="Home"
              handleClick={handleScrollToHome}
            ></CustomButton>
            {/* <Link href="/about" onClick={toggle} className="py-2">
              <p>Home</p>
            </Link> */}
          </li>
          <li
            onClick={toggle}
            className="bg-green-500 border border-green-300 py-2 px-4 rounded-full"
          >
            <CustomButton
              title="Pricing"
              handleClick={handleScrollToPricing}
            ></CustomButton>

            {/* <Link href="/services" onClick={toggle} className="py-2">
              <p>Pricing</p>
            </Link> */}
          </li>
          <li
            onClick={toggle}
            className="bg-green-500 border border-green-300 py-2 px-4 rounded-full"
          >
            {/* <Link href="/contacts" onClick={toggle} className="py-2">
              <p>Services</p>
            </Link> */}
            <CustomButton
              title="Services"
              handleClick={handleScrollToServices}
            ></CustomButton>
          </li>
          <li
            onClick={toggle}
            className="bg-green-500 border border-green-300 py-2 px-4 rounded-full"
          >
            {/* <Link href="/contacts" onClick={toggle} className="py-2">
              <p>Contact Us</p>
            </Link> */}
            <CustomButton
              title="Contact Us"
              handleClick={handleScrollToContactUSForm}
            ></CustomButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
