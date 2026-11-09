A Windows launcher that looks like the Switch 2 HOME menu, so you can open your games in your emulator as if you were on the console, without digging through folders or menus.

Main menu

⚠️ You need an emulator that is already installed and working (Eden, Citron, Ryujinx, Sudachi, Suyu or Yuzu). This program is not an emulator and does not include games, keys or firmware. It only opens the games you already have with the emulator you already have. If a game doesn't boot in your emulator, it won't boot from here either.

Download

Go to Releases and download one of these:

Switch Launcher 1.0.0 portable.exe: no installation, just run it.
Switch Launcher Setup 1.0.0.exe: installer, with a desktop shortcut.

Requirements: Windows 10 or 11, 64-bit.

"Windows protected your PC"

The .exe isn't code-signed (signing certificates cost money), so Windows SmartScreen may warn you the first time. Click More info → Run anyway. If you like, you can scan it on VirusTotal before opening it.

Before you start
Set up your emulator as usual: it should start, and your games should work when you open them from it.
Keep your games (.nsp / .xci) in a folder.

That's it. The first time you open it, the launcher finds your emulator and your games folder by itself. If it can't find them, go to System Settings (the gear icon) and pick them manually.

The interface is currently in Spanish.

Features
Switch 2-style menu
Rounded game tiles, an animated multicolor selection ring and a row of icons.
Basic Light and Basic Dark themes.
Entrance screen on startup: time, date, your user and your last game. Press the same button three times to enter, or press Y three times to jump straight back into your last game.
Screensaver: after a few minutes of inactivity it dims the screen, like Switch 2 (or shows a clock, if you prefer).
Real time, Wi-Fi and battery status from your PC; a controller icon appears in the bottom-left corner when one is connected.
Your games
Automatic covers and names for your own games, using your emulator's setup.
Mod covers: if you have an enabled mod that changes a game's cover, the launcher uses that one.
All Software: your whole library in a grid, sortable by last played, play time, title or recently added.
Groups and favorites to organize your games.
Game options (+ button): play time, last played, format, size, program ID, and any updates / DLC found in your folder.
News: the games you've added most recently.
Your most recently played game comes first. The list updates by itself when you add or remove games.
Users
Profile picture and name for each user. Names are taken from your emulator, and you can change them.
Play activity: hours per game (it also reads the play time tracked by the emulator itself).
Saves and screenshots
Data Management: back up your save data and restore it whenever you want. Before restoring, it automatically backs up your current save, so you never lose anything. Currently works with Eden, Citron, Sudachi, Suyu and Yuzu.
Album with the screenshots you take in your emulator.
While playing
A launch animation when you start a game; the menu steps aside and comes back by itself when you close the emulator.
The Controllers icon opens your emulator so you can set up controllers or install updates and DLC.
System
Controller, keyboard and mouse (including the scroll wheel).
Fullscreen (F11) and a Start with Windows option.
Built-in menu sounds.
Screenshots
	
Dark theme	All Software
Entrance screen	
Controls
Keyboard	Controller	Action
← → ↑ ↓	D-pad or stick	Move (↑ from the games takes you to the users)
Enter	A	Start / confirm
Esc	B	Back
+ / −	Start / Select	Game options, or System Settings
Y	Y	Sort / remove / delete (depending on the screen)
F11	—	Fullscreen

With the mouse: hovering selects, and clicking the selected item opens it. The scroll wheel moves the game row.

Where it stores things

Everything stays on your PC, in %APPDATA%\switch-launcher:

config.json: paths, settings, groups, favorites and names.
perfiles\: profile pictures (1.png, 2.png…). You can use any images you like.
copias-de-partidas\: your save backups.
launcher.log: errors, in case something goes wrong.

Covers are stored in a portadas folder inside your games folder. You can also put your own images there, named after the game in lowercase with hyphens (for example my-game.png).

Cover priority: an enabled mod's cover → the portadas folder → the game's own cover.

Troubleshooting
A game won't start: first check that it starts when you open it directly in the emulator. Then, in System Settings, try another option under "Cómo se abre el juego" (how the game is opened).
No covers: your emulator needs to be fully set up. In the meantime, you can put your own images in the portadas folder.
A mod's cover doesn't show: the mod has to be enabled in the emulator and include an image (icon_AmericanEnglish.dat, icon.jpg, cover.png…). Switch back to the launcher window so it refreshes.
It can't find the emulator or the games: pick them in System Settings.
Legal notice

A fan-made project not affiliated with Nintendo. Nintendo Switch is a trademark of Nintendo. This program does not include games, keys, firmware or any other Nintendo content, and does not explain how to obtain them. Only use it with copies of games you own.

License

MIT



Un launcher para Windows con el aspecto del menú HOME de Switch 2, para abrir tus juegos en tu emulador como si estuvieras en la consola, sin tocar carpetas ni menús.

Menú principal

⚠️ Necesitas tener ya un emulador instalado y funcionando (Eden, Citron, Ryujinx, Sudachi, Suyu o Yuzu). Este programa no es un emulador y no incluye juegos, claves ni firmware. Solo abre los juegos que ya tienes con el emulador que ya tienes. Si un juego no te arranca en el emulador, tampoco arrancará desde aquí.

Descarga

Ve a Releases y descarga uno de estos:

Switch Launcher 1.0.0 portable.exe: no se instala, se abre directamente.
Switch Launcher Setup 1.0.0.exe: instalador, con acceso directo en el escritorio.

Requisitos: Windows 10 u 11 de 64 bits.

"Windows protegió su PC"

El .exe no está firmado (los certificados de firma cuestan dinero), así que la primera vez Windows SmartScreen puede avisar. Pulsa Más información → Ejecutar de todas formas. Si quieres, puedes analizarlo en VirusTotal antes de abrirlo.

Antes de usarlo
Ten tu emulador configurado como siempre: que arranque y que tus juegos funcionen abriéndolos desde él.
Ten tus juegos (.nsp / .xci) en una carpeta.

Y ya está. La primera vez que lo abres, el launcher busca solo el emulador y la carpeta de juegos. Si no los encuentra, ve a Configuración de la consola (el engranaje) y elígelos a mano.

Qué hace
Menú estilo Switch 2
Portadas redondeadas, anillo de selección de colores animado y fila de iconos.
Temas Modo claro básico y Modo oscuro básico.
Pantalla de entrada al encender: hora, fecha, tu usuario y tu último juego. Pulsa el mismo botón tres veces para entrar, o Y tres veces para seguir jugando directamente.
Salvapantallas: tras unos minutos sin usarlo atenúa la pantalla, como Switch 2 (o, si prefieres, muestra un reloj).
Hora, wifi y batería reales del PC; si conectas un mando, aparece abajo a la izquierda.
Tus juegos
Portadas y nombres en español automáticos de tus propios juegos, usando la configuración de tu emulador.
Portadas de mods: si tienes activado un mod que cambia la portada del juego, el launcher usa esa.
Todos los programas: toda tu biblioteca en cuadrícula, ordenable por último uso, tiempo de juego, nombre o añadidos recientemente.
Grupos y favoritos para organizar tus juegos.
Opciones del juego (botón +): tiempo jugado, última vez, formato, tamaño, ID del programa y las actualizaciones / DLC que tengas en la carpeta.
Noticias: los últimos juegos que has añadido.
Lo último que jugaste sale primero. La lista se actualiza sola cuando añades o quitas juegos.
Usuarios
Imagen de perfil y nombre de cada usuario. Los nombres los coge de tu emulador y los puedes cambiar.
Actividad de juego: horas por juego (también lee las que cuenta el propio emulador).
Partidas y capturas
Gestión de datos: copias de seguridad de tus partidas guardadas, y restaurarlas cuando quieras. Antes de restaurar guarda sola tu partida actual, para que nunca pierdas nada. Por ahora funciona con Eden, Citron, Sudachi, Suyu y Yuzu.
Álbum con las capturas que haces en el emulador.
Al jugar
Animación al empezar un juego; el menú se aparta y vuelve solo cuando cierras el emulador.
El icono Mandos abre el emulador para que configures mandos o instales actualizaciones y DLC.
Sistema
Mando, teclado y ratón (con rueda).
Pantalla completa (F11) y opción Iniciar con Windows.
Sonidos de menú propios.
Capturas
	
Tema oscuro	Todos los programas
Pantalla de entrada	
Controles
Teclado	Mando	Acción
← → ↑ ↓	Cruceta o stick	Moverse (↑ desde los juegos lleva a los usuarios)
Enter	A	Empezar / aceptar
Esc	B	Atrás
+ / −	Start / Select	Opciones del juego, o Configuración
Y	Y	Ordenar / quitar / borrar (según la pantalla)
F11	—	Pantalla completa

Con el ratón: pasar por encima selecciona y hacer clic en lo seleccionado lo abre. La rueda mueve la fila de juegos.

Dónde guarda las cosas

Todo queda en tu PC, en %APPDATA%\switch-launcher:

config.json: rutas, ajustes, grupos, favoritos y nombres.
perfiles\: imágenes de perfil (1.png, 2.png…). Puedes poner las que quieras.
copias-de-partidas\: copias de seguridad de tus partidas.
launcher.log: errores, por si algo falla.

Las portadas se guardan en una carpeta portadas dentro de tu carpeta de juegos. También puedes poner ahí tus propias imágenes, con el nombre del juego en minúsculas y con guiones (por ejemplo mi-juego.png).

Orden de preferencia de las portadas: la de un mod activo → la de la carpeta portadas → la del propio juego.

Problemas frecuentes
El juego no arranca: comprueba primero que arranca abriéndolo directamente en el emulador. Después, en Configuración, prueba otra opción en "Cómo se abre el juego".
No salen portadas: el emulador tiene que estar configurado del todo. Mientras tanto, puedes poner tus propias imágenes en la carpeta portadas.
No sale la portada de un mod: el mod tiene que estar activado en el emulador y traer una imagen (icon_AmericanEnglish.dat, icon.jpg, cover.png…). Vuelve a la ventana del launcher para que se actualice.
No encuentra el emulador o los juegos: elígelos en Configuración.
Aviso legal

Proyecto hecho por fans y sin relación con Nintendo. Nintendo Switch es una marca de Nintendo. Este programa no incluye juegos, claves, firmware ni ningún otro contenido de Nintendo, y no explica cómo conseguirlos. Úsalo solo con copias de juegos que te pertenezcan.

Licencia

MIT


