import TableComponent from "@/components/table-component";
import { useState } from "react";

const columns = [
  { name: "Producto", uid: "producto" },
  { name: "Cantidad", uid: "cantidad" },
  { name: "Precio Unitario", uid: "precioUnitario" },
  { name: "Subtotal", uid: "subtotal" },
  { name: "Estado", uid: "estado" },
];

const historyData = [
  {
    producto: "Pantalón Gris",
    cantidad: 1,
    precioUnitario: "$30.00",
    subtotal: "$30.00",
    estado: "Entregado",
  },
  {
    producto: "Gorra Roja",
    cantidad: 3,
    precioUnitario: "$10.00",
    subtotal: "$30.00",
    estado: "Entregado",
  },
  {
    producto: "Camisa Blanca",
    cantidad: 2,
    precioUnitario: "$25.00",
    subtotal: "$50.00",
    estado: "Entregado",
  },
];

const PurchaseHistoryPage = () => {
  const [, setSearch] = useState("");

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  const handleSort = (column: string, sortOrder: "asc" | "desc") => {
    console.log(`Sort by: ${column}, Order: ${sortOrder}`);
  };

  const handleRowAction = (rowData: any) => {
    console.log("Row action triggered:", rowData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Encabezado */}
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl font-semibold text-gray-800">
          Historial de Compras
        </h1>
        <p className="text-lg text-gray-600">
          Consulta tus compras realizadas anteriormente.
        </p>
      </div>

      {/* Tabla de historial de compras */}
      <TableComponent
        data={historyData}
        columns={columns}
        onSearch={handleSearch}
        onSort={handleSort}
        onRowAction={handleRowAction}
        rowsPerPage={10}
        showAddButton={false}
      />
    </div>
  );
};

export default PurchaseHistoryPage;
