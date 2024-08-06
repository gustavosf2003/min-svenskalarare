import { useWindowSize } from "@/hooks/useWindowSize";
import SkeletonLoading from "../Skeleton";

const CustomArticlesSkeletonLoading = () => {
  const { width } = useWindowSize();
  return (
    <>
      <div className="flex-col hidden gap-4 lg:flex">
        {width && (
          <>
            <SkeletonLoading height={140} width={width / 3 - 56} />
            <SkeletonLoading height={140} width={width / 3 - 56} />
            <SkeletonLoading height={140} width={width / 3 - 56} />
            <SkeletonLoading height={140} width={width / 3 - 56} />
            <SkeletonLoading height={140} width={width / 3 - 56} />
          </>
        )}
      </div>
      <div className="flex flex-col gap-4 lg:hidden">
        {width && (
          <>
            <SkeletonLoading height={200} width={width - 56} />
            <SkeletonLoading height={200} width={width - 56} />
            <SkeletonLoading height={200} width={width - 56} />
            <SkeletonLoading height={200} width={width - 56} />
            <SkeletonLoading height={200} width={width - 56} />
          </>
        )}
      </div>
    </>
  );
};

export default CustomArticlesSkeletonLoading;
