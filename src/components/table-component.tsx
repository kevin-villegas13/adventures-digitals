import React, { Dispatch, ReactNode, useMemo, useState } from "react";
import {
  Button,
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import {
  Trash2Icon,
  EditIcon,
  EyeIcon,
  Search,
  PlusIcon,
  ChevronUp,
  ChevronDown,
} from "lucide-react"; // Importando iconos de ordenación
import { TableComponentProps } from "@/interface/table-props";
import { motion } from "framer-motion";

// Paginación
const Paginate = ({
  page,
  setPage,
  pages,
}: {
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
  pages: number;
}) => (
  <div className="flex justify-center mt-4 w-full">
    <Pagination
      isCompact
      showControls
      showShadow
      color="secondary"
      page={page}
      total={pages}
      onChange={(newPage) => setPage(newPage)}
    />
  </div>
);

// Iconos de acción (Detalle, Editar, Eliminar)
const ActionIcons = ({ onAction }: { onAction: () => void }) => (
  <div className="relative flex items-center gap-2 justify-center">
    <Tooltip content="Detalle">
      <span
        className="text-lg text-default-400 cursor-pointer active:opacity-50"
        onClick={onAction}
      >
        <EyeIcon />
      </span>
    </Tooltip>

    <Tooltip content="Editar">
      <span
        className="text-lg text-default-400 cursor-pointer active:opacity-50"
        onClick={onAction}
      >
        <EditIcon />
      </span>
    </Tooltip>

    <Tooltip color="danger" content="Eliminar">
      <span
        className="text-lg text-danger cursor-pointer active:opacity-50"
        onClick={onAction}
      >
        <Trash2Icon />
      </span>
    </Tooltip>
  </div>
);

const TableComponent = <T extends {}>({
  data,
  columns,
  onSearch,
  onSort,
  onRowAction,
  rowsPerPage,
}: TableComponentProps<T>) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const pages = Math.max(Math.ceil(data.length / rowsPerPage), 1);

  const items = useMemo(() => {
    const filteredData = data.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(search.toLowerCase())
    );

    if (sortColumn) {
      filteredData.sort((a, b) => {
        if (sortOrder === "asc") {
          return a[sortColumn as keyof T] > b[sortColumn as keyof T] ? 1 : -1;
        } else {
          return a[sortColumn as keyof T] < b[sortColumn as keyof T] ? 1 : -1;
        }
      });
    }

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredData.slice(start, end);
  }, [page, search, sortColumn, sortOrder]);

  // Manejo de ordenación
  const handleSort = (column: string) => {
    const newSortOrder =
      sortColumn === column ? (sortOrder === "asc" ? "desc" : "asc") : "asc";
    setSortColumn(column);
    setSortOrder(newSortOrder);
    onSort(column, newSortOrder);
  };

  return (
    <div className="space-y-4">
      {/* Barra de búsqueda y botón de agregar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <Input
          isClearable
          classNames={{
            base: "w-full sm:max-w-[44%] md:w-1/3",
            inputWrapper: "border-1",
          }}
          startContent={<Search className="text-default-300" />}
          size="sm"
          variant="bordered"
          aria-label="Buscar"
          placeholder="Buscar"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onSearch(e.target.value);
          }}
        />

        <motion.div
          className="w-full sm:w-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            color="primary"
            size="sm"
            endContent={<PlusIcon />}
            aria-label="Agregar"
            className="w-full sm:w-auto"
          >
            Agregar
          </Button>
        </motion.div>
      </div>

      {/* Contenedor de tabla responsiva */}
      <div className="overflow-x-auto">
        <Table
          layout="auto"
          isCompact
          removeWrapper
          topContentPlacement="outside"
          aria-label="Tabla de Datos"
        >
          <TableHeader>
            {columns.map((column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
                onClick={() =>
                  column.isSortable &&
                  column.uid !== "actions" &&
                  handleSort(column.uid)
                }
              >
                {column.name}
                {sortColumn === column.uid && (
                  <span className="ml-2 inline-flex items-center justify-center">
                    {sortOrder === "asc" ? (
                      <ChevronUp className="w-4 h-4 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-600" />
                    )}
                  </span>
                )}
              </TableColumn>
            ))}
          </TableHeader>

          <TableBody>
            {items.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center text-gray-500"
                >
                  No hay datos disponibles
                </TableCell>
              </TableRow>
            ) : (
              items.map((item, idx) => (
                <TableRow key={idx}>
                  {columns.map((column) => (
                    <TableCell key={column.uid} className="text-sm">
                      {column.uid === "actions" ? (
                        <ActionIcons onAction={() => onRowAction(item)} />
                      ) : (
                        ((item[column.uid as keyof T] || "-") as ReactNode)
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Paginación */}
      <Paginate page={page} setPage={setPage} pages={pages} />
    </div>
  );
};

export default TableComponent;
