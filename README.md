🧪 CRUD API con Node.js + Sequelize + Vitest (TDD)

Este proyecto implementa un CRUD de usuarios utilizando Node.js, Express y Sequelize, siguiendo el enfoque de **Desarrollo Guiado por Pruebas (TDD)** con **Vitest** como framework de testing.

---

## 📌 Tecnologías

- Node.js
- Express
- Sequelize (con SQLite o PostgreSQL)
- Vitest (framework de testing)
- c8 (medición de cobertura)
- Git (control de versiones y ramas)

---

## 🧱 Estructura del proyecto

```bash
src/
│
├── controllers/         # Controladores CRUD
│   └── user.controller.js
│
├── models/              # Modelos Sequelize
│   └── user.model.js
│
├── tests/               # Pruebas unitarias con Vitest
│   └── user.controller.test.js


🚦 Flujo TDD aplicado
Cada operación del CRUD (Create, Read, Update, Delete) fue implementada con el ciclo TDD:

🔴 RED → Escribir un test que falle

🟢 GREEN → Implementar lo mínimo necesario para que pase

🔁 REFACTOR → Limpiar el código sin romper tests

Se crearon ramas independientes para cada etapa:

    tdd/red-create-success
    tdd/green-create-success
    tdd/refactor-create-success
    ...

📂 Instalación

    git clone https://github.com/tu-usuario/crud-tdd-vitest.git
    cd crud-tdd-vitest
    npm install

🧪 Ejecutar tests

    npm run test


📊 Ver cobertura de pruebas

    npm run coverage

    Esto generará un reporte detallado en la carpeta /coverage/

🙌 Autor

Dennis Alberto Torres Martínez

Proyecto académico desarrollado como práctica de TDD con Node.js
