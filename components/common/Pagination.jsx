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
  // console.log('currentPage', currentPage);
  // console.log('pageCount', pageCount);

  return (
    <div className="flex justify-center mt-8">
      <Pagination>
        <PaginationContent>
          {/* Previous button */}
          <PaginationItem>
            <PaginationPrevious
              href={currentPage > 1 ? `/blog?page=${currentPage - 1}` : null}
              className={
                currentPage <= 1 ? 'pointer-events-none opacity-50' : ''
              }
            />
          </PaginationItem>

          {/* First page */}
          <PaginationItem>
            <PaginationLink href="/blog?page=1" isActive={currentPage === 1}>
              1
            </PaginationLink>
          </PaginationItem>

          {/* Ellipsis and middle pages */}
          {currentPage > 3 && <PaginationEllipsis />}

          {currentPage > 2 && (
            <PaginationItem>
              <PaginationLink href={`/blog?page=${currentPage - 1}`}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {currentPage !== 1 && currentPage !== pageCount && (
            <PaginationItem>
              <PaginationLink href={`/blog?page=${currentPage}`} isActive>
                {currentPage}
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Next button */}
          <PaginationItem>
            <PaginationNext
              href={
                currentPage < pageCount ? `/blog?page=${currentPage + 1}` : null
              }
              className={
                currentPage >= pageCount ? 'pointer-events-none opacity-50' : ''
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
