import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

export const SharedLayout = () => {
  return (
    <div className="bg-light-grey dark:bg-dark-navy bg-cover bg-no-repeat bg-mobile-light md:bg-tablet-light lg:bg-desktop-light dark:bg-mobile-dark dark:md:bg-tablet-dark dark:lg:bg-desktop-dark text-dark-navy dark:text-pure-white">
      <div className="flex justify-center min-h-screen">
        <div className="container mx-auto">
          <div className="flex flex-col items-end">
            <ThemeSwitcher />

            <div className="flex justify-between w-full flex-wrap mt-[6%]">
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};