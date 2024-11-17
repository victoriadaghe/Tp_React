import { FC } from "react";
import { useForm } from '../../../hooks/useForm';

interface IpropsFormProduct {
  handleAddProduct: Function;
}

export const FormProduct: FC<IpropsFormProduct> = ({ handleAddProduct }) => {
  const { handleChange, values, resetForm } = useForm({
    nombre: '',
    imagen: '',
    precio: 0,
  });

  const handleSubmitForm = () => {
    handleAddProduct(values);
    resetForm();
  };

  return (
    <form className="p-6 border rounded-lg shadow-md bg-white m-4">
      {/* Nombre */}
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Ingrese nombre del producto"
          value={values.nombre}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Imagen */}
      <div className="mb-4">
        <label htmlFor="imagen" className="block text-gray-700 font-medium mb-2">
          Imagen
        </label>
        <input
          type="text"
          name="imagen"
          id="imagen"
          placeholder="Ingrese URL de la imagen"
          value={values.imagen}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Precio */}
      <div className="mb-4">
        <label htmlFor="precio" className="block text-gray-700 font-medium mb-2">
          Precio
        </label>
        <input
          type="number"
          name="precio"
          id="precio"
          placeholder="Ingrese precio del producto"
          value={values.precio}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Botón */}
      <div className="flex justify-center mt-6">
        <button
          type="button"
          onClick={handleSubmitForm}
          className="bg-blue text-black px-4 py-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Enviar Producto
        </button>
      </div>
    </form>
  );
};
