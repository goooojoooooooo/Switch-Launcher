# SwitchLauncher

Launcher de escritorio estilo Nintendo Switch para tu colección de juegos, con lanzamiento de emulador integrado.

## Instalación

```bash
npm install
npm run electron:dev   # modo desarrollo con hot-reload
npm run electron:build # genera el instalable en /release
```

## Qué hace

**Menú HOME al estilo Switch 2**
- Portadas redondeadas, anillo de selección multicolor animado, fila de 8 iconos y avisos emergentes en la esquina.
- Perfiles, hora, wifi y batería reales. Temas **Modo claro básico** y **Modo oscuro básico**.
- **Pantalla de entrada** al iniciar, como la de Switch 2: hora, fecha, tu usuario y tu último juego
  ("pulsa el mismo botón tres veces"; Y tres veces para seguir jugando directamente).
- **Salvapantallas** tras unos minutos sin usarlo: atenúa la pantalla como Switch 2, o muestra un reloj.
- **Nombres de usuario**: se cogen del emulador y puedes cambiarlos en la página de usuario.
- **Portadas de mods**: si un mod activo del emulador trae su propia portada (`icon_*.dat`, `icon.jpg`, `cover.png`…), se usa esa.
- **Grupos**: crea carpetas de juegos y marca **favoritos** (desde Opciones del juego, botón +).
- **Gestión de datos**: copias de seguridad de tus partidas de Eden por juego, y restaurarlas
  (antes de restaurar se guarda sola una copia de la partida actual, así nunca se pierde nada).
  Las copias están en `%APPDATA%\switch-launcher\copias-de-partidas`.
- **Todos los programas**: cuadrícula con toda tu biblioteca, ordenable con Y (último uso, tiempo de juego, título, añadidos).
- **Opciones del juego** (botón +): tiempo jugado, última vez, tamaño, ID del programa, actualizaciones/DLC encontrados y "abrir la ubicación del archivo".
- **Página de usuario** (sube hasta los perfiles): actividad de juego con tus horas por juego.
- **Cambiar imagen de perfil** con los personajes y fondos oficiales del firmware que tienes instalado en el emulador.
- **Álbum**: las capturas que haces en el emulador, en cuadrícula y a pantalla completa.
- **Noticias**: lo último que has añadido a tu biblioteca. **Biblioteca**: abre "Todos los programas".
- **Mandos**: abre el emulador para configurar mandos o instalar actualizaciones/DLC.
- **Opciones de energía** con confirmación antes de salir.

**Automático**
- Primer arranque: busca solo el emulador (Eden, Citron, Ryujinx, Suyu, Sudachi, Yuzu) y tu carpeta de ROMs.
- Portadas y nombres en español sacados de la propia ROM con las claves de tu emulador (`<ROMs>\portadas`).
- La biblioteca se actualiza sola al añadir o quitar juegos.
- El **tiempo de juego** se lee del propio emulador (Eden/Yuzu: `play_time`, Ryujinx: metadatos), además del que cuenta el launcher.
- Último jugado primero; al empezar un juego el menú se aparta y vuelve al cerrar el emulador.

**Sistema**
- Sonidos de menú integrados, mando de PC, teclado, ratón y rueda, pantalla completa (F11).
- Una sola ventana (si lo abres dos veces, se trae al frente la que ya estaba), opción "Iniciar con Windows".

## Configuración inicial

Normalmente no hay que hacer nada: la primera vez el launcher busca el emulador y la carpeta de ROMs.
Si no los encuentra, o quieres cambiarlos: **Configuración de la consola** (engranaje, o tecla + / −):

- **Carpeta de juegos** → donde guardas tus `.nsp` / `.xci`.
- **Emulador** → el `.exe` de Eden / Citron / Ryujinx...
- **Cómo se abre el juego** → cambia entre pantalla completa, ventana, o el formato de Ryujinx.

## Portadas y nombres

El launcher busca las portadas en una carpeta `portadas` dentro de tu carpeta de ROMs:

```
D:\Roms Switch\
├── Pokemon Brilliant Diamond [0100000011D90000][v0] (4.29 GB).nsp
├── The Legend of Zelda Tears of the Kingdom.xci
└── portadas\
    ├── pokemon-brilliant-diamond.jpg
    ├── the-legend-of-zelda-tears-of-the-kingdom.jpg
    ├── titulos.json          ← { "pokemon-brilliant-diamond": "Pokémon Diamante Brillante" }
    └── extraer-portadas.py
```

**El launcher ya las saca solo.** Si aun así quieres hacerlo a mano, copia `tools/extraer-portadas.py` a esa carpeta `portadas` y ejecútalo
(necesita Python y `pip install cryptography`). Usa tus claves de Eden (`%APPDATA%\eden\keys`)
para leer el icono oficial y el nombre en español de cada juego, sin modificar las ROMs.
Los juegos que ya tienen portada se saltan, así que puedes ejecutarlo cada vez que añadas uno.

El nombre de archivo de cada portada es el nombre de la ROM sin lo que va entre `[ ]` o `( )`,
en minúsculas y con guiones. Las actualizaciones y DLC (`update`, `upd`, `dlc`…) no aparecen en el menú.

Si quieres, también puedes poner portadas en `assets/covers` y sonidos en `assets/sounds`
(`move.mp3`, `select.mp3`, `launch.mp3`).

## Imágenes de perfil

Arriba a la izquierda se muestran las imágenes de `%APPDATA%\switch-launcher\perfiles`
(`1.png`, `2.png`, `3.png`…, en ese orden). Los archivos que empiezan por `_` se ignoran.
Si la carpeta está vacía, salen siluetas de colores.

## Controles

| Teclado | Mando | Acción |
|---|---|---|
| ← / → | Cruceta o stick | Moverse por la fila |
| ↑ / ↓ | Cruceta o stick | Saltar entre perfiles, juegos e iconos |
| Enter | A (botón inferior) | Empezar juego / abrir icono |
| Esc | B (botón derecho) | Cerrar configuración |
| + / − | Start / Select | Opciones del juego (en un juego) o Configuración |
| Y | Y (botón superior) | Cambiar el orden en "Todos los programas" |
| F11 | — | Pantalla completa |

Con el ratón: pasar por encima selecciona, clic en lo ya seleccionado lo abre; la rueda mueve la fila de juegos.

## Notas de seguridad

Esta app **no descarga, distribuye ni descifra** juegos — solo indexa archivos que tú ya tienes en
disco y delega la ejecución al emulador que hayas instalado por tu cuenta. Eres responsable de que
el contenido que cargues cumpla la legislación de tu país (p. ej. dumps de cartuchos/consolas propias).
