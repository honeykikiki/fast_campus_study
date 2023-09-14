import { useInfiniteScroll } from '@/lib/useInfiniteScroll';
import { useStores } from '@/queries/store';

import { StoreFilters } from './StoreFilters';
import { StoreItem } from './StoreItme';

export const StoreList = () => {
  const { isLoading, error, data, hasNextPage, isFetching, fetchNextPage } =
    useStores();

  const loader = useInfiniteScroll(hasNextPage, isFetching, fetchNextPage);

  if (isLoading) {
    return <div className="">로딩중</div>;
  }
  if (error) {
    return null;
  }

  return (
    <div className="">
      <StoreFilters />
      {data?.pages.map((page) =>
        page.map((store) => <StoreItem key={store._id} store={store} />)
      )}
      {!isFetching && <div ref={loader}></div>}
    </div>
  );
};
