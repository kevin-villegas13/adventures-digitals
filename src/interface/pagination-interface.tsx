export interface IPagination {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  paginate: (pageNumber: number) => void;
}
