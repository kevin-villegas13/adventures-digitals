import { TableColumnType } from "./table-columns.pros";

export type TableComponentProps<T> = {
  data: T[];
  columns: TableColumnType[];
  onSearch: (search: string) => void;
  onSort: (column: string, sortOrder: "asc" | "desc") => void;
  onRowAction: (rowData: T) => void;
  rowsPerPage: number;
};
