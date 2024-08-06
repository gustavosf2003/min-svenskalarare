import { Article } from "@/types/article";
import CustomArticlesSkeletonLoading from "./NewsLoading";

type NewsCardProps = {
  data: Article[];
  isLoading: boolean;
  isError: boolean;
  image?: React.ReactNode;
  limit?: number;
};

const NewsCard = ({
  data,
  isLoading,
  isError,
  image,
  limit = 5,
}: NewsCardProps) => {
  return (
    <div className="mt-8 lg:mt-0">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div>{image}</div>
        </div>
        <NewsCardContent
          data={data}
          isLoading={isLoading}
          isError={isError}
          limit={limit}
        />
      </div>
    </div>
  );
};

export default NewsCard;

const NewsCardContent = ({
  data,
  isLoading,
  isError,
  limit = 5,
}: NewsCardProps) => {
  console.log({
    data,
    isLoading,
    isError,
  });
  if (isError) {
    return <p className="mt-4">Något gick fel. Försök igen senare.</p>;
  }
  if (isLoading) {
    return <CustomArticlesSkeletonLoading />;
  }
  if (data.length === 0 && !isLoading && !isError) {
    return <p className="mt-4">Inga nyheter att visa.</p>;
  }
  return data?.slice(0, limit).map((article) => (
    <a
      key={article?.title}
      href={article?.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-start w-full gap-2 p-4 transition-all duration-300 rounded-lg md:flex-row bg-baseSecondary hover:bg-baseSecondary/50"
    >
      <img
        src={article?.image}
        alt={article?.title}
        className="w-full md:w-48 md:h-28"
      />
      <div>
        <p>{article?.title}</p>
        <p className="-mt-2 text-sm text-gray-400">{article?.description}</p>
      </div>
    </a>
  ));
};
