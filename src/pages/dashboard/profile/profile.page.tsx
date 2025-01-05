import { useState } from "react";
import { motion } from "framer-motion"; // Importar motion

const personalFields = [
  { id: "name", label: "Nombre", placeholder: "Tu nombre", type: "text" },
  {
    id: "lastName",
    label: "Apellido",
    placeholder: "Tu apellido",
    type: "text",
  },
  { id: "email", label: "Email", placeholder: "tu@email.com", type: "email" },
  { id: "phone", label: "Teléfono", placeholder: "Tu teléfono", type: "tel" },
];

const addressFields = [
  {
    id: "street",
    label: "Calle y Número",
    placeholder: "Calle y número",
    type: "text",
  },
  { id: "city", label: "Ciudad", placeholder: "Ciudad", type: "text" },
  {
    id: "state",
    label: "Estado/Provincia",
    placeholder: "Estado/Provincia",
    type: "text",
  },
  {
    id: "zip",
    label: "Código Postal",
    placeholder: "Código postal",
    type: "text",
  },
  { id: "country", label: "País", placeholder: "País", type: "text" },
];

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    bio: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setProfileData({
      ...profileData,
      [id]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated", profileData);
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto space-y-8 px-4 sm:px-6 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Mi Perfil
          </h1>
          <p className="text-sm text-gray-500">
            Administra tu información personal y preferencias
          </p>
        </div>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Guardar Cambios
        </button>
      </div>

      {/* Sección de Foto de Perfil */}
      <motion.div
        className="bg-white shadow rounded-lg p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Foto de Perfil
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          Esta foto se mostrará en tu perfil y reseñas
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="relative h-24 w-24 mx-auto sm:mx-0">
            <img
              src="/docs/images/people/profile-picture-5.jpg"
              alt="Avatar"
              width={96}
              height={96}
              className="rounded-full object-cover"
            />
          </div>
          <button className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400">
            Cambiar Foto
          </button>
        </div>
      </motion.div>

      {/* Sección de Información Personal */}
      <motion.div
        className="bg-white shadow rounded-lg p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Información Personal
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          Actualiza tu información personal y de contacto
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {personalFields.map((field) => (
            <motion.div
              key={field.id}
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={profileData[field.id as keyof typeof profileData]}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Sección de Dirección de Envío */}
      <motion.div
        className="bg-white shadow rounded-lg p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Dirección de Envío
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          Esta dirección se usará para tus envíos
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {addressFields.map((field) => (
            <motion.div
              key={field.id}
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={profileData[field.id as keyof typeof profileData]}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfilePage;
