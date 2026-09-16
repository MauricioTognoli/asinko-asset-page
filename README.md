# Asinko — Ficha de Activo

Prueba técnica para el puesto de **UX/UI Frontend Developer** en Asinko.

La propuesta es una página de detalle de un activo financiero. **NVIDIA Corp. (NVDA)** está pensada para ofrecer una experiencia de investigación y conversación sobre inversiones.

La interfaz permite ver posteos de la comunidad y tesis de inversión. También deja entrar al detalle de cada contenido, votar y participar con comentarios.

## Cómo correr el proyecto

```bash
npm install

npm run dev      # http://localhost:3000

npm run test     # tests unitarios (Vitest)

npm run lint     # ESLint

npm run build    # build de producción
```

## Stack

- **Next.js 16** — App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** — preset `base-nova` sobre `@base-ui/react`
- **Motion** — transiciones de página y tabs
- **Vitest** — tests unitarios de lógica de negocio

No hay backend. El contenido inicial está definido como datos simulados en `data/asset.ts`, y las rutas de contenido se generan de forma previa usando `generateStaticParams`.

---

## Qué se implementó

### Activo

- Header de **NVIDIA Corp. / NVDA**.
- Categoría del activo: **Semiconductores**.
- Resumen de actividad de la comunidad.
- Puedes moverte entre **Posteos** y **Tesis de inversión**.

### Posteos

- Lista de los posteos que indica la consigna.
- Autor, fecha, contenido, votos y comentarios.
- Vista de detalle individual.
- Navegación entre la lista y el detalle.

### Tesis de inversión

- Tesis abiertas y cerradas.
- Estado y resultado de la tesis.
- Reclamación, activo, precio objetivo, fecha límite y nivel de confianza.
- Razonamiento completo.
- Votos y comentarios.
- Vista de detalle individual.

### Votación

- Voto a favor y en contra.
- Los votos se excluyen entre sí.
- El usuario puede cambiar su voto.
- El estado de votación se guarda en `localStorage` por contenido.
- Los contadores se actualizan de inmediato en la interfaz.

### Comentarios

- Ver los comentarios que ya existen.
- Se pueden agregar nuevos comentarios desde el detalle.
- Revisión básica del contenido.
- Persistencia en `localStorage`.
- Contador sincronizado entre el feed y la vista de detalle.

### Responsive y accesibilidad

- Adaptación a móvil, tablet y escritorio.
- HTML semántico.
- `button` y `Link` para acciones y navegación.
- Uso de `aria-label`, `aria-pressed` y `aria-live` donde corresponde.
- Estados de foco visibles.
- Navegación por teclado.
- Contraste y estados visuales que no dependen solo del color.

### Metadata y SEO

- Metadata por página creada a partir del contenido.
- `title` y `description`.
- Open Graph.
- `sitemap.xml`.
- `robots.txt`.

### Tema

- Modo claro y oscuro.
- Detección del tema del sistema.
- Toggle manual.
- El tema no parpadea durante la carga inicial.

---

## Decisiones de diseño y alcance

### Diseño sobrio y centrado en la consigna

La primera exploración pensaba en una experiencia más parecida a plataformas sociales como Reddit o X. Incluía funciones como búsqueda, notificaciones y datos extra de mercado.

Al final, se decidió mantener una interfaz más centrada en la consigna original.

La prioridad fue construir una experiencia clara y profesional para:

1. descubrir contenido;
2. entender una tesis rápido;
3. acceder al detalle;
4. votar;
5. leer y participar en la conversación.

Esto evita agregar funciones o información financiera que la prueba no dio.

### `localStorage` en lugar de backend

La consigna no necesita autenticación ni una API.

Por esa razón, los votos y comentarios usan `localStorage`. Así ofrecen una experiencia interactiva y persistente durante la prueba sin agregar infraestructura que no hace falta.

Esta decisión se toma solo para el alcance del ejercicio. No reemplaza una solución de almacenamiento para producción.

### Sin datos financieros inventados

Solo se usaron los datos dados en la consigna para el contenido inicial.

No se agregaron:

- precios actuales;
- gráficos;
- variaciones de mercado;
- indicadores financieros;
- sentimiento;
- noticias;
- métricas inventadas de usuarios o actividad.

El objetivo fue evitar mostrar información financiera falsa como si fuera real.

### Un único activo

La prueba da contenido específico para **NVIDIA Corp. / NVDA**, por eso no se añadió un selector ni un catálogo de activos.

Sin embargo, la estructura de datos y el enrutamiento permiten mantener separado el concepto de activo de los contenidos asociados.

---

## Qué se dejó afuera, a propósito

Para mantener el alcance alineado con la prueba, no se implementaron:

- Verificación real de usuarios.
- Perfiles de usuario.
- Backend o API.
- Sincronización entre dispositivos.
- Búsqueda.
- Notificaciones.
- Watchlist.
- Datos de mercado en tiempo real.
- Gráficos financieros.
- Respuestas a comentarios.
- Edición o eliminación de comentarios.
- Moderación.
- Funcionalidades sociales adicionales.

Los comentarios que se agregan durante la sesión usan un usuario local o simulado. Solo se guardan en el navegador.

---

## Estructura relevante

```text
app/
├── rutas y páginas
├── detalle de posteos y tesis
├── sitemap
└── robots

components/
├── posts/
├── theses/
├── comments/
└── ui/

data/
└── asset.ts              # contenido inicial de NVIDIA

types/
└── asset.ts              # modelos del dominio

lib/
├── asset.ts              # acceso a datos
├── vote.ts               # lógica de votación
└── format.ts             # formato y utilidades
```

La lógica de negocio está separada de los componentes de la interfaz de usuario.

Esto permite probar funciones como la lógica de votación y el acceso a datos sin depender del navegador o de una página en particular.

---

## Tests

La lógica de negocio está cubierta con pruebas unitarias usando **Vitest**.

Para ejecutarlos:

```bash
npm run test
```

El objetivo de estas pruebas es comprobar sobre todo la lógica que puede causar estados inconsistentes, como pasar de un voto positivo a uno negativo.

---

## Criterios de producto

Las principales decisiones se tomaron priorizando:

- **Claridad:** la información financiera debe poder leerse rápido.
- **Jerarquía:** una tesis necesita una estructura visual distinta a la de un posteo.
- **Contexto:** cada contenido tiene una relación clara con el activo.
- **Interacción:** votos y comentarios reciben respuesta al instante.
- **Responsive:** la experiencia no depende de un solo tamaño de pantalla.
- **Accesibilidad:** se pueden usar las acciones principales con el teclado y tecnologías de asistencia.
- **Alcance:** evitar funciones no solicitadas o datos financieros inventados.
