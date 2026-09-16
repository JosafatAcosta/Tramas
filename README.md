# Sitio de Tramas Escucha a Víctimas de Violencia, A.C.

Sitio estático (sin backend) para GitHub Pages. Páginas: Inicio, Quiénes
somos, Qué hacemos, Círculos de Formación, Red de acompañamiento, Contacto,
y un verificador de constancias con folio + QR en `/constancias/`.

## Cómo incorporarlo a tu repositorio `Tramas`

1. Copia el contenido de esta carpeta (todo lo que ves aquí) dentro de tu
   repositorio local, en la raíz (junto a donde ya tienes tus archivos).
   Si ya tenías un `index.html` propio, revisa que no se sobrescriba algo
   que quieras conservar.
2. Confirma en GitHub → tu repo → **Settings → Pages** que la fuente sea
   la rama `main` y carpeta `/ (root)`. Si tu Pages está configurado para
   `/docs` o una rama `gh-pages`, dímelo y ajusto las rutas.
3. Sube los cambios:
   ```bash
   git add -A
   git commit -m "Sitio de Tramas A.C."
   git push
   ```
4. En un par de minutos estará en `https://josafatacosta.github.io/Tramas/`.

## Estructura

```
index.html                     Inicio
quienes-somos.html
servicios.html
circulos-de-formacion.html
red-de-acompanamiento.html
contacto.html
assets/
  logo.png
  styles.css
  site.js
data/
  colaboradores.json           Lista de la Red de acompañamiento
constancias/                   Verificador de constancias (sitio aparte, mismo dominio)
  index.html
  data.json                    Registro de constancias emitidas
  scripts/agregar-constancia.mjs
```

## Agregar personas a "Red de acompañamiento"

Edita `data/colaboradores.json`, es una lista simple:

```json
[
  { "nombre": "Nombre Apellido", "rol": "Psicóloga clínica" },
  { "nombre": "Otro Nombre", "rol": "Abogado" }
]
```

Guarda, haz commit y push — no requiere nada más.

## Agregar una constancia (Círculos de Formación)

Dentro de `constancias/`:

```bash
npm install        # solo la primera vez
npm run agregar
```

Te pedirá nombre, curso, horas, fecha y el dominio final
(`https://josafatacosta.github.io/Tramas`). Genera el folio, actualiza
`constancias/data.json` y guarda el QR en `constancias/qrcodes/`. Ese PNG es
el que pegas en el PDF/Word de la constancia. Luego:

```bash
git add -A
git commit -m "Agrega constancia <folio>"
git push
```

## Salida rápida

Cada página tiene un botón "Salir" que redirige de inmediato a un sitio
neutro. Es una medida de seguridad común en sitios de acompañamiento a
víctimas de violencia — no borra el historial del navegador (eso no es
posible desde una página web), pero saca a la persona de la vista de
inmediato.

## Contenido pendiente de revisar

- La sección "Quiénes somos" describe el objeto de la asociación en
  términos generales; si quieres agregar historia, año de fundación o
  perfiles del equipo, dime y lo integro.
- "Red de acompañamiento" empieza vacía — agrega los nombres cuando los
  tengas listos.
