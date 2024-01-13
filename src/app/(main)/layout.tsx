import { GalleryVerticalEnd, Home, User } from "lucide-react";

const MainLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="flex h-screen w-screen flex-col bg-background bg-gradient-to-r from-[#FFFFFC] via-[#F8FEE7] to-[#E8F7F8]">
      {children}
      <nav className="fixed bottom-0 z-50 flex h-16 w-full place-content-evenly items-center border-t-2 border-t-border bg-background">
        <GalleryVerticalEnd />
        <Home />
        <User />
      </nav>
    </section>
  );
};

export default MainLayout;
