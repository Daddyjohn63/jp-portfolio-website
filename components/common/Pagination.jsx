import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';

export const PagePagination = ({ currentPage, pageCount }) => {
  return (
    <div className="flex justify-center">
      <Pagination>
        <paginationContent>
          {page > 1 && (
            <>
              <PaginationItem>
                <PaginationPrevious href={`/blog?page=${page - 1}`} />
              </PaginationItem>
            </>
          )}
        </paginationContent>
      </Pagination>
    </div>
  );
};
