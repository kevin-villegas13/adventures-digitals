import TableComponent from "@/components/table-component";
import { useState } from "react";

const columns = [
  { name: "ID Venta", uid: "idVenta", isSortable: true },
  { name: "Producto", uid: "producto", isSortable: true },
  { name: "Cantidad", uid: "cantidad", isSortable: true },
  { name: "Precio", uid: "precio", isSortable: true },
  { name: "Fecha Venta", uid: "fechaVenta", isSortable: true },
  { name: "Cliente", uid: "cliente", isSortable: true },
  { name: "Método de Pago", uid: "metodoPago", isSortable: true },
  { name: "Estado", uid: "estado", isSortable: true },
  { name: "Total", uid: "total", isSortable: true },
  { name: "Acciónes", uid: "actions", isSortable: false },
];

const ventas = [
  {
    idVenta: 1,
    producto: "Producto A",
    cantidad: 2,
    precio: "$10.00",
    fechaVenta: "2025-01-01",
    cliente: "Cliente A",
    metodoPago: "Tarjeta de Crédito",
    estado: "Completada",
    total: "$20.00",
  },
  {
    idVenta: 2,
    producto: "Producto B",
    cantidad: 1,
    precio: "$20.00",
    fechaVenta: "2025-01-02",
    cliente: "Cliente B",
    metodoPago: "PayPal",
    estado: "Pendiente",
    total: "$20.00",
  },
  // ...otras ventas
];

const SalesPage = () => {
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
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl font-semibold text-gray-800">
          Ventas Realizadas
        </h1>
        <p className="text-lg text-gray-600">
          Administra y visualiza las ventas realizadas.
        </p>
      </div>

      <TableComponent
        data={ventas}
        columns={columns}
        onSearch={handleSearch}
        onSort={handleSort}
        onRowAction={handleRowAction}
        rowsPerPage={30}
      />
    </div>
  );
};

export default SalesPage;
