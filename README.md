# Guía Profesional de Instalación de Arch Linux y Hyprland

Bienvenido a esta guía paso a paso para instalar Arch Linux y configurar Hyprland. Siguiendo estas instrucciones, lograrás instalar un sistema optimizado y moderno.

## 1. Instalación de Arch Linux

### 1.1 Actualización del sistema
Antes de comenzar, actualiza los paquetes del sistema ejecutando:

```bash
sudo pacman -Syu
```

### 1.2 Conexión a Internet
Para conectarte a una red WiFi, usa:

```bash
iwctl
station wlan0 connect <TuWifi>
```

Verifica la conexión con:

```bash
ping www.archlinux.org
```

### 1.3 Instalación con archinstall
Ejecuta el instalador automatizado de Arch Linux:

```bash
archinstall
```

Sigue las siguientes configuraciones:

- **Idioma**: Selecciona tu idioma de preferencia.
- **Localización**:  
  - Distribución del teclado: Define tu layout preferido.
  - Idioma del sistema: Configura tu país y localización.
  - Codificación: UTF-8.
- **Mirror de Descargas**: Elige la región más cercana para optimizar las descargas.
- **Configuración del Disco**:  
  - Tipo: *Use a best-effort default partition layout*.
  - Selecciona el disco deseado.
  - Formato del sistema de archivos: ext4.
- **Memoria de intercambio (Swap)**: Activar.
- **Cargador de arranque**: GRUB.
- **Kernel**: linux.
- **Nombre del equipo (Hostname)**: Define un nombre para tu sistema.
- **Contraseña de root**: Establece una contraseña segura.
- **Cuenta de usuario**:  
  - Agregar usuario: `<Nombre de usuario>`.
  - Definir contraseña.
- **Audio**: pipewire.
- **Red**: NetworkManager.
- **Paquetes adicionales**: nano, firefox.
- **Zona horaria**: Define tu ubicación (`Continente/Ciudad`).

### 1.4 Finalización de la Instalación
Ejecuta el instalador y cuando pregunte sobre entrar en `chroot`, selecciona **No**. Luego, reinicia el sistema con:

```bash
reboot
```

En este punto, Arch Linux estará completamente instalado y listo para su configuración adicional.

---

## 2. Instalación y Configuración de Hyprland

### 2.1 Ingreso al sistema
Inicia sesión con las credenciales creadas anteriormente.

### 2.2 Instalación de Paquetes Necesarios
Instala Hyprland y las dependencias necesarias:

```bash
sudo pacman -S hyprland wayland wayland-protocols xorg-xwayland kitty sddm git
```

### 2.3 Habilitar y Activar SDDM
SDDM es el gestor de sesiones que permitirá iniciar Hyprland:

```bash
sudo systemctl enable sddm.service
```

Reinicia el sistema:

```bash
reboot
```

Tras el reinicio, deberías ver la pantalla de inicio de sesión de SDDM.

### 2.4 Configuración de Hyprland
Abre una terminal con `SUPER+Q` y edita la configuración:

```bash
nano ~/.config/hypr/hyprland.conf
```

Busca la línea:

```
monitor=,preferred,auto,auto
```

Cámbiala por:

```
monitor=<resolucion>@<Hz>,auto,auto
```

Guarda los cambios con `CTRL+O`, sal del editor con `CTRL+X`.

### 2.5 Instalación de Paru (AUR Helper)
Clona el repositorio de Paru y compílalo:

```bash
git clone https://aur.archlinux.org/paru.git
cd paru/
makepkg -si
```

### 2.6 Instalación de Hyde (Tema Visual para Hyprland)
Abre Firefox (`SUPER+Q` y escribe `firefox` en la terminal), ve a: Repositorio de Hyde y descarga el ZIP.

Desde la terminal, instala las herramientas necesarias:

```bash
sudo pacman -S --needed git base-devel unzip
```

Descomprime el archivo descargado y entra en su directorio:

```bash
unzip <nombre-del-archivo.zip>
cd <nombre-de-carpeta>/Scripts/
```

Ejecuta el script de instalación:

```bash
./install.sh
```

Sigue las opciones de personalización:

- **Tema**: dark (1).
- **Shell**: zsh (1).

### 2.7 Reinicio Final
Reinicia el sistema para aplicar todos los cambios:

```bash
reboot
```

Con esto, Hyprland estará completamente instalado y listo para usar en Arch Linux.

---

## Conclusión

Siguiendo esta guía, habrás instalado Arch Linux con Hyprland y configurado un entorno de escritorio moderno y eficiente. Ahora puedes personalizar tu sistema según tus necesidades y preferencias.

🔗 **¡Explora y disfruta tu nuevo sistema Arch Linux con Hyprland!**
