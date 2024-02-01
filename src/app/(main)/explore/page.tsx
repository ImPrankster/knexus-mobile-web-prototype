import Post from "~/components/explore/post";

const ExplorePage = () => {
  return (
    <main className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <Post ratio={1} />
          <Post ratio={4 / 3} />
          <Post ratio={9 / 16} />
        </div>
        <div className="flex flex-col gap-2">
          <Post ratio={9 / 16} />
          <Post ratio={4 / 3} />
          <Post ratio={16 / 9} />
        </div>
      </div>
    </main>
  );
};

export default ExplorePage;
