const MainLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <section
      vaul-drawer-wrapper=""
      className="flex flex-1 flex-col bg-background bg-gradient-to-r from-[#FFFFFC] via-[#F8FEE7] to-[#E8F7F8] p-2"
    >
      <>{children}</>
    </section>
  );
};

export default MainLayout;
