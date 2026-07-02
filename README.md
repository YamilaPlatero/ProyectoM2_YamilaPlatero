# 📖 MiniBlog API REST

API REST desarrollada con **Node.js**, **Express** y **PostgreSQL** para gestionar autores y publicaciones de un mini blog.

Este proyecto fue realizado como **Proyecto Integrador** de un curso de desarrollo backend, aplicando buenas prácticas de arquitectura REST, conexión con base de datos, validaciones, testing y despliegue en la nube.

---

# 🚀 Tecnologías utilizadas

* Node.js
* Express.js
* PostgreSQL
* pg
* dotenv
* Vitest
* Supertest
* Railway
* GitHub

---

# 📂 Estructura del proyecto

```text
src/
 │
 ├── controllers/
 ├── services/
 ├── routes/
 ├── validators/
 ├── middlewares/
 ├── db/
│
├── app.js
├── server.js
└── .env

tests/
```

---

# ⚙️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/YamilaPlatero/ProyectoM2_YamilaPlatero.git
```

Ingresar a la carpeta del proyecto:

```bash
cd ProyectoM2_YamilaPlatero
```

Instalar las dependencias:

```bash
npm install
```

---

# ▶️ Ejecutar el proyecto

Modo desarrollo:

```bash
npm run dev
```

Modo producción:

```bash
npm start
```

---

# 🔐 Variables de entorno

Crear un archivo `.env` con las siguientes variables:

```env
DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
DATABASE_URL=
PORT=
```

---

# 🗄️ Modelo de datos

## Authors

| Campo | Tipo    |
| ----- | ------- |
| id    | SERIAL |
| name  | VARCHAR  |
| email | VARCHAR |
| bio   | TEXT  |
| created_at | Timestamp |


## Posts

| Campo      | Tipo      |
| ---------- | --------- |
| id         | SERIAL   |
| title      | VARCHAR    |
| content    | TEXT      |
| published  | BOOLEAN   |
| author_id  | INTEGER   |
| created_at | TIMESTAMPTZ |

---

# 📌 Endpoints

## Authors

| Método | Endpoint           | Descripción               |
| ------ | ------------------ | ------------------------- |
| GET    | `/api/authors`     | Obtener todos los autores |
| GET    | `/api/authors/:id` | Obtener un autor por ID   |
| POST   | `/api/authors`     | Crear un autor            |
| PUT    | `/api/authors/:id` | Actualizar un autor       |
| DELETE | `/api/authors/:id` | Eliminar un autor         |

---

## Posts

| Método | Endpoint                      | Descripción                   |
| ------ | ----------------------------- | ----------------------------- |
| GET    | `/api/posts`                  | Obtener todos los posts       |
| GET    | `/api/posts/:id`              | Obtener un post por ID        |
| GET    | `/api/posts/author/:authorId` | Obtener los posts de un autor |
| POST   | `/api/posts`                  | Crear un post                 |
| PUT    | `/api/posts/:id`              | Actualizar un post            |
| DELETE | `/api/posts/:id`              | Eliminar un post              |

---

# ✅ Validaciones implementadas

## Authors

* Nombre obligatorio.
* Email obligatorio.
* Email con formato válido.
* Email único.

## Posts

* Título obligatorio.
* Contenido obligatorio.
* `author_id` obligatorio.
* Verificación de existencia del autor al crear un post.

---

# 🧪 Testing

Se realizaron pruebas utilizando **Vitest** y **Supertest**.

Se testearon los siguientes casos:

* Creación de autores.
* Obtención de autores.
* Creación de posts.
* Eliminación de posts.

---

# ☁️ Deploy

API desplegada en Railway:

https://proyectom2yamilaplatero-production-ca13.up.railway.app/

Repositorio del proyecto:

https://github.com/YamilaPlatero/ProyectoM2_YamilaPlatero

---

## 📄 Documentación de la API (OpenAPI)

La API incluye documentación interactiva generada con **OpenAPI (Swagger)**. Desde ella es posible consultar todos los endpoints disponibles, los métodos HTTP, los parámetros requeridos, los cuerpos de las solicitudes y las respuestas esperadas.

### Acceso en desarrollo

* http://localhost:3000/

### Acceso en producción

* https://proyectom2yamilaplatero-production-ca13.up.railway.app/

---

# 📚 Aprendizajes

Durante el desarrollo de este proyecto pude aprender a:

* Diseñar una API siguiendo la arquitectura REST.
* Crear un servidor utilizando Express.
* Integrar PostgreSQL como base de datos.
* Implementar operaciones CRUD.
* Aplicar validaciones para mejorar la integridad de los datos.
* Separar la lógica en Controllers, Services y Routes para mantener una arquitectura más organizada.
* Realizar pruebas automatizadas utilizando Vitest y Supertest.
* Desplegar una API en Railway para compartirla públicamente.

---

# 👩‍💻 Autor

Proyecto desarrollado por **Yamila Platero** como Proyecto Integrador del curso de Backend.
