import { ReactNode } from "react";
import SideBar from "../pages/home/component/sidebar";
import DashboardHeader from "./dashboardHeader";
import DashboardFooter from "./dashboardFooter";

interface SkeletonProps {
  children: ReactNode;
}

const Skeleton: React.FC<SkeletonProps> = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col justify-between flex-grow">
        <DashboardHeader />
        <div className="flex-grow px-10 py-[5rem]  ">
          {children} {/* This is where the different content will be rendered */}
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default Skeleton;
