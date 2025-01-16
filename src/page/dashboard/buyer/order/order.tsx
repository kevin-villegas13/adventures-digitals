import TableComponent from "@/components/table-component";
import { useState } from "react";

const columns = [
  { name: "Producto", uid: "producto" },
  { name: "Cantidad", uid: "cantidad" },
  { name: "Precio Unitario", uid: "precioUnitario" },
  { name: "Subtotal", uid: "subtotal" },
  { name: "Estado", uid: "estado" },
];

const data = [
  {
    producto: "Camiseta Azul",
    cantidad: 2,
    precioUnitario: "$20.00",
    subtotal: "$40.00",
    estado: "Enviado",
  },
  {
    producto: "Zapatos Negros",
    cantidad: 1,
    precioUnitario: "$50.00",
    subtotal: "$50.00",
    estado: "Procesando",
  },
];

const OrderPage = () => {
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
        <h1 className="text-3xl font-semibold text-gray-800">Productos</h1>
        <p className="text-lg text-gray-600">
          Administra y visualiza los productos disponibles.
        </p>
      </div>

      <TableComponent
        data={data}
        columns={columns}
        onSearch={handleSearch}
        onSort={handleSort}
        onRowAction={handleRowAction}
        rowsPerPage={30}
        showAddButton={false}
      />
    </div>
  );
};

export default OrderPage;
