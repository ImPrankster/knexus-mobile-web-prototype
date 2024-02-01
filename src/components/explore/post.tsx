import { AspectRatio } from "../ui/aspect-ratio";
import { Skeleton } from "../ui/skeleton";

const Post = ({ ratio }: { ratio?: number }) => {
  return (
    <AspectRatio ratio={ratio ? ratio : 1}>
      <Skeleton className="h-full w-full" />
    </AspectRatio>
  );
};

export default Post;
