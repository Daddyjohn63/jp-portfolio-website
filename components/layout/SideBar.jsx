import Link from 'next/link';
import { SocialLinks } from '../common/SocialLinks';
import Logo from './Logo';
import SideBarRoutes from './SideBarRoutes';

const SideBar = () => {
  return (
    <div className="h-full w-full border-r flex flex-col overflow-y-auto bg-[#221f33] shadow-sm z-50 pt-6  ">
      {/* LOGO START */}
      <Link
        href="/"
        className=" font-semi-bold tracking-tight sm:text-3xl bg-gradient-to-r from-purple-300 via-purple-300 to-purple-300 inline-block text-transparent bg-clip-text"
      >
        <p className=" text-3xl md:text-3xl font-semi-bold bg-gradient-to-r from-purple-600 via-blue-400 to-orange-300 inline-block text-transparent bg-clip-text pl-6">
          Web and Prosper
        </p>
      </Link>
      {/* LOGO END */}
      <div className="flex flex-col w-full pb-6 pt-6 pl-5">
        <SideBarRoutes />
      </div>
      <div className="pl-7 pt-6  flex">
        <SocialLinks />
      </div>
    </div>
  );
};
export default SideBar;
