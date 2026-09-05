# ToDo-App

## Datos académicos

| Campo | Detalle |
|---|---|
| **Universidad** | Universidad Autónoma de Chihuahua |
| **Facultad** | Facultad de Ingeniería |
| **Carrera** | Ingeniería en Computación |
| **Materia** | Desarrollo de Aplicaciones Web |
| **Docente** | Mtro. Luis Antonio Ramírez Martínez |
| **Actividad** | Tarea 3. Desarrollo de servicios web con Node.js |
| **Alumno** | Kevin Andrés Rosales Rodríguez |
| **Matrícula** | [385814] |
| **Fecha de entrega** | [04/09/2026] |

## Descripción

Aplicación TODO List desarrollada con Node.js y Express que administra una colección de tareas en memoria. Expone la misma lógica de negocio a través de dos interfaces: una API REST y un servicio SOAP.

## Objetivo

Aplicar los conceptos fundamentales de administración de paquetes con NPM e integrar servicios REST y SOAP para la comunicación con la aplicación, como parte del flujo básico de desarrollo de aplicaciones con Node.js.

## Tecnologías utilizadas

- Node.js
- Express
- soap (node-soap)
- Log4js
- Supervisor
- ESLint
- Jest
- Postman
- Git / GitHub

## Requisitos previos

- Node.js y NPM instalados
- Postman (para probar los servicios REST y SOAP)
- Git

## Instalación

```bash
git clone <https://github.com/Kevin67-67/ToDo-App>
cd todo-app
npm install
```

## Ejecución

El proyecto no define un script `start`; la aplicación se levanta de una de estas dos formas:

```bash
node src/app.js
```

o, en modo desarrollo con reinicio automático:

```bash
npm run dev
```

El servidor queda disponible en `http://localhost:3000`.

## Scripts / comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Levanta la aplicación con Supervisor, reiniciándola automáticamente al detectar cambios en el código fuente. |
| `npm test` | Ejecuta las pruebas unitarias con Jest. |
| `npm run lint` | Ejecuta ESLint para el análisis estático del código. |

## Funcionalidades / uso

**API REST** — base `http://localhost:3000/api/tasks`

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/api/tasks` | Consulta todas las tareas |
| `GET` | `/api/tasks/:id` | Consulta una tarea por id |
| `POST` | `/api/tasks` | Crea una nueva tarea (`{ "title": "..." }`) |
| `PUT` | `/api/tasks/:id` | Modifica una tarea existente |
| `DELETE` | `/api/tasks/:id` | Elimina una tarea |

**Servicio SOAP** — WSDL y endpoint en `http://localhost:3000/wsdl`

- `GetTasks` — devuelve la lista completa de tareas.
- `AddTasks` — crea una nueva tarea a partir de un título.

Ambas interfaces pueden probarse con Postman: las rutas REST como peticiones HTTP normales, y el servicio SOAP enviando el sobre XML correspondiente contra `http://localhost:3000/wsdl`.

## Pruebas

```bash
npm test
```

Las pruebas (`taskService.test.js`) cubren la lógica de administración de tareas: creación, consulta, modificación y eliminación.

## Análisis de calidad de código

```bash
npm run lint
```

Analiza el código fuente con ESLint según la configuración de `eslint.config.js`.

## Estructura general del proyecto

```text
todo-app/
|-- src/
|   |-- app.js
|   |-- routes/
|   |   `-- tasks.js
|   |-- services/
|   |   `-- taskService.js
|   |-- soap/
|   |   |-- tasks.js
|   |   `-- taskService.wsdl
|   `-- utils/
|       `-- logger.js
|-- tests/
|   `-- taskService.test.js
|-- logs/
|-- package.json
|-- package-lock.json
|-- eslint.config.js
`-- README.md
```

## Autor

Kevin Rosales — [385814]
