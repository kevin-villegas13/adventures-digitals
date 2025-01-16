import TableComponent from "@/components/table-component";
import { useState } from "react";

const columns = [
  { name: "Nombre", uid: "nombre", isSortable: true },
  { name: "Descripción", uid: "descripcion", isSortable: true },
  { name: "Marca", uid: "marca", isSortable: true },
  { name: "Precio", uid: "precio", isSortable: true },
  { name: "Stock", uid: "stock", isSortable: true },
  { name: "Calificación", uid: "calificacion", isSortable: true },
  { name: "Fecha Publicación", uid: "fechaPublicacion", isSortable: true },
  { name: "Categoría", uid: "categoria", isSortable: true },
  { name: "Acciónes", uid: "actions", isSortable: false },
];

const productos = [
  {
    id: 1,
    nombre: "Producto A",
    descripcion: "Descripción del producto A",
    marca: "Marca A",
    precio: "$10.00",
    stock: "20",
    calificacion: 4.5,
    fechaPublicacion: "2025-01-01",
    categoria: "Categoría 1",
  },
  {
    id: 2,
    nombre: "Producto B",
    descripcion: "Descripción del producto B",
    marca: "Marca B",
    precio: "$20.00",
    stock: "10",
    calificacion: 3.8,
    fechaPublicacion: "2025-01-02",
    categoria: "Categoría 2",
  },
  {
    id: 3,
    nombre: "Producto B",
    descripcion: "Descripción del producto B",
    marca: "Marca B",
    precio: "$20.00",
    stock: "10",
    calificacion: 3.8,
    fechaPublicacion: "2025-01-02",
    categoria: "Categoría 2",
  },
  {
    id: 4,
    nombre: "Producto B",
    descripcion: "Descripción del producto B",
    marca: "Marca B",
    precio: "$20.00",
    stock: "10",
    calificacion: 3.8,
    fechaPublicacion: "2025-01-02",
    categoria: "Categoría 2",
  },
  {
    id: 5,
    nombre: "Producto B",
    descripcion: "Descripción del producto B",
    marca: "Marca B",
    precio: "$20.00",
    stock: "10",
    calificacion: 3.8,
    fechaPublicacion: "2025-01-02",
    categoria: "Categoría 2",
  },
  {
    id: 6,
    nombre: "Producto B",
    descripcion: "Descripción del producto B",
    marca: "Marca B",
    precio: "$20.00",
    stock: "10",
    calificacion: 3.8,
    fechaPublicacion: "2025-01-02",
    categoria: "Categoría 2",
  },
  {
    id: 7,
    nombre: "Producto B",
    descripcion: "Descripción del producto B",
    marca: "Marca B",
    precio: "$20.00",
    stock: "10",
    calificacion: 3.8,
    fechaPublicacion: "2025-01-02",
    categoria: "Categoría 2",
  },
  {
    id: 8,
    nombre: "Producto B",
    descripcion: "Descripción del producto B",
    marca: "Marca B",
    precio: "$20.00",
    stock: "10",
    calificacion: 3.8,
    fechaPublicacion: "2025-01-02",
    categoria: "Categoría 2",
  },
];

const ProductPage = () => {
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
        data={productos}
        columns={columns}
        onSearch={handleSearch}
        onSort={handleSort}
        onRowAction={handleRowAction}
        rowsPerPage={30}
      />
    </div>
  );
};

export default ProductPage;
