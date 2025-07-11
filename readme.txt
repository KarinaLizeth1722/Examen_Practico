============================
INSTRUCCIONES DE EJECUCIÓN
============================

Para realizar el ejercicio de Automatización E2E se utilizó la herramienta de Cypress.io

----------------------
OBJETIVO DE LA PRUEBA
----------------------
Simular el flujo de compra de un usuario:
1. Agregar dos productos al carrito.
2. Visualizar el carrito.
3. Completar el forumlario de compra.
4. Finalizar la compra.

Sitio: https://www.demoblaze.com
 -------------------
 REQUISITOS PREVIOS
 -------------------
1. Tener instalado Node.js (Se lo puede descargar del sitio oficial https://nodejs.org/).
2. Tener instalado un editor de texto (sugerencia Visual Studio Code). 

-------------------------------------------
PASOS PARA CONFIGURAR Y EJECUTAR LA PRUEBA
-------------------------------------------
1. Descargar el archivo comprimido AutomatizacionE2E.zip
2. Descomprimir el archivo e ingresar a la carpeta AutomatizacionE2E
3. Abrir el editor de texto (VS code) y ubicar el archivo package.json.
4. Instalar las dependencia del proyecto, para lo cual se debe abrir una teminal y ejecutar el 
    siguiente comando:
    > npm install
5. Ejecutar el siguinte comnado para abrir Cypress Test Runner:
    > npx cypress open
6. En la interfaz de Cypress se debe ubicar y hcaer clic en el archivo compra_demoblaze.cy.js
7. El flujo automatizado comienza a ejecutarse.

-----------------------
ESTRUCTURA DE ARCHIVOS
-----------------------

tu-proyecto/
├── cypress/
│   ├── e2e/
│   │   └── flujo_compra.cy.js   <-- archivo de prueba
├── cypress.config.js            <-- configuración de Cypress
├── package.json                 <-- dependencias del proyecto
└── README.txt

-------------------
RESULTADO ESPERADO
-------------------
- Se abre el sitio https://www.demoblaze.com
- Se agregan dos productos al carrito.
- Se visualiza el carrito.
- Se llena el fomulario de compra.
- Se finaliza la compra mostrando un mensaje de confirmación.