import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function SkeletonLoading({
  width = undefined,
  height = undefined,
}) {
  return (
    <SkeletonTheme
      baseColor="rgb(62 61 59 / 0.2)"
      highlightColor="#2F2F2F"
      borderRadius={"6px"}
    >
      <Skeleton width={width} height={height} />
    </SkeletonTheme>
  );
}
