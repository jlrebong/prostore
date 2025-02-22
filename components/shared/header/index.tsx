import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt="logo"
              height={48}
              width={48}
              priority={true}
            ></Image>
            <span className="hidden lg:block font-bold text-2xl ml-3"></span>
          </Link>
        </div>
        <Menu></Menu>
      </div>
    </header>
  );
};

export default Header;
