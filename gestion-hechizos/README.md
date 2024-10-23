# Gestión de Hechizos

Este proyecto es una aplicación web para la gestión de hechizos, desarrollada utilizando React para el frontend y Node.js con Express para el backend. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre hechizos, utilizando MongoDB como base de datos.

## Tecnologías Utilizadas

- **Frontend**: React, React Router, CSS
- **Backend**: Node.js, Express
- **Base de Datos**: MongoDB, Mongoose

## Estructura del Proyecto

- **Frontend**: Código fuente en el directorio `front/`
- **Backend**: Código fuente en el directorio `back/`

## Instalación

### Backend

1. Navega al directorio `back/`.

    cd back

2. Instala las dependencias del backend.

    npm install

3. Configura las variables de entorno. Crea un archivo `.env` en el directorio `back/` y agrega la siguiente línea:

    MONGODB_URI=mongodb://localhost:27017/mi-base-de-datos

    Asegúrate de reemplazar `mi-base-de-datos` con el nombre de tu base de datos en MongoDB.

4. Inicia el servidor del backend.

    npm start


### Frontend

1. Navega al directorio `front/`.

    cd frontend

2. Instala las dependencias del frontend.

    npm install

3. Inicia el servidor de desarrollo del frontend.

    npm start

## Funcionalidades

- **Lista de Hechizos**: Visualiza todos los hechizos disponibles.
- **Detalles del Hechizo**: Consulta los detalles de un hechizo específico.
- **Crear Hechizo**: Añade un nuevo hechizo a la base de datos.
- **Editar Hechizo**: Modifica los detalles de un hechizo existente.
- **Eliminar Hechizo**: Elimina un hechizo de la base de datos.

## Endpoints del API

- `GET /api/hechizos` - Obtiene todos los hechizos.
- `GET /api/hechizos/:id` - Obtiene un hechizo por ID.
- `POST /api/hechizos` - Crea un nuevo hechizo.
- `PUT /api/hechizos/:id` - Actualiza un hechizo por ID.
- `DELETE /api/hechizos/:id` - Elimina un hechizo por ID.

