# 📥 GUÍA DE INSTALACIÓN - Security Scanner Pro

## Requisitos Previos

- **Navegador:** Google Chrome versión 90 o superior
- - **Conexión a Internet:** Para las pruebas de seguridad en línea
  - - **Permisos:** Permiso de administrador (solo para instalar, no para usar)
   
    - ## Método 1: Instalación desde el Repositorio (Recomendado para Desarrollo)
   
    - Este método es perfecto si quieres desarrollar o modificar la extensión.
   
    - ### Paso 1: Clonar el Repositorio
   
    - ```bash
      # Abre tu terminal/PowerShell y ejecuta:
      git clone https://github.com/leaan88/security-scanner-pro.git
      cd security-scanner-pro
      ```

      Si no tienes Git instalado, puedes descargar el ZIP directamente desde GitHub.

      ### Paso 2: Abrir la Página de Extensiones

      1. Abre Google Chrome
      2. 2. Escribe en la barra de direcciones: `chrome://extensions/`
         3. 3. Presiona Enter
           
            4. ### Paso 3: Activar el Modo de Desarrollador
           
            5. En la esquina superior derecha de la página de extensiones, verás un toggle que dice "Modo de desarrollador".
           
            6. **Haz clic para activarlo:**
            7. - El toggle se pondrá azul
               - - Aparecerán nuevos botones: "Cargar extensión sin empaquetar", "Pack extension", etc.
                
                 - ### Paso 4: Cargar la Extensión
                
                 - 1. Haz clic en el botón **"Cargar extensión sin empaquetar"**
                   2. 2. Se abrirá un diálogo de selección de carpeta
                      3. 3. Navega a la carpeta `security-scanner-pro` que descargaste
                         4. 4. Selecciona la carpeta raíz (donde está manifest.json)
                            5. 5. Haz clic en "Abrir" o "Seleccionar carpeta"
                              
                               6. ### Paso 5: ¡Listo! Extensión Instalada
                              
                               7. - Verás "Security Scanner Pro" en la lista de extensiones
                                  - - Un icono aparecerá en la barra de herramientas de Chrome (arriba a la derecha)
                                    - - Haz clic en el icono para abrir la extensión
                                     
                                      - ---

                                      ## Método 2: Instalación desde Archivo .CRX (Para Usuarios Finales)

                                      Si alguien ya empaquetó la extensión como .crx, puedes instalarla así:

                                      ### Paso 1: Obtener el Archivo .CRX

                                      Descarga o recibe el archivo `security-scanner-pro.crx` de un distribuidor confiable.

                                      ### Paso 2: Abrir Extensiones

                                      `chrome://extensions/`

                                      ### Paso 3: Instalar el Archivo

                                      **Opción A - Arrastrar y Soltar:**
                                      1. Abre la carpeta donde guardaste el archivo .crx
                                      2. 2. Arrastra `security-scanner-pro.crx` directamente a la página `chrome://extensions/`
                                         3. 3. Chrome mostrará un diálogo de confirmación
                                            4. 4. Haz clic en "Agregar extensión"
                                              
                                               5. **Opción B - Método Manual:**
                                               6. 1. Si tienes "Modo de desarrollador" activado:
                                                  2.    - Haz clic en "Pack extension"
                                                        -    - Selecciona la carpeta del proyecto
                                                             -    - Chrome instalará la extensión
                                                              
                                                                  - ---

                                                                  ## Solución de Problemas

                                                                  ### La extensión no aparece después de cargar

                                                                  **Solución:**
                                                                  1. Recarga la página `chrome://extensions/` (Ctrl+R o F5)
                                                                  2. 2. Reinicia Chrome completamente
                                                                     3. 3. Verifica que el archivo `manifest.json` existe en la carpeta raíz
                                                                       
                                                                        4. ### Ver errores de la extensión
                                                                       
                                                                        5. Si la extensión se comporta de manera extraña:
                                                                       
                                                                        6. 1. En `chrome://extensions/`
                                                                           2. 2. Busca "Security Scanner Pro"
                                                                              3. 3. Haz clic en "Inspeccionar vistas"
                                                                                 4. 4. Se abrirá la consola del desarrollador
                                                                                    5. 5. Busca mensajes de error en rojo
                                                                                      
                                                                                       6. ### Desinstalar la extensión
                                                                                      
                                                                                       7. 1. Ve a `chrome://extensions/`
                                                                                          2. 2. Busca "Security Scanner Pro"
                                                                                             3. 3. Haz clic en el botón "Eliminar"
                                                                                                4. 4. Confirma la eliminación
                                                                                                  
                                                                                                   5. ---
                                                                                                  
                                                                                                   6. ## Actualizar la Extensión
                                                                                                  
                                                                                                   7. Si hiciste cambios en el código y quieres verlos:
                                                                                                  
                                                                                                   8. 1. Ve a `chrome://extensions/`
                                                                                                      2. 2. Busca "Security Scanner Pro"
                                                                                                         3. 3. Haz clic en el icono de actualización circular
                                                                                                            4. 4. Los cambios se cargarán inmediatamente
                                                                                                              
                                                                                                               5. ---
                                                                                                              
                                                                                                               6. ## Verificar que Está Correctamente Instalada
                                                                                                              
                                                                                                               7. Una vez instalada, verifica que funciona:
                                                                                                              
                                                                                                               8. 1. Haz clic en el icono de la extensión en la barra de herramientas
                                                                                                                  2. 2. Debería abrirse un panel lateral con la interfaz
                                                                                                                     3. 3. Verifica que ves el título "🛡️ Security Scanner Pro"
                                                                                                                        4. 4. Intenta hacer clic en los botones (aunque algunos pueden estar en desarrollo)
                                                                                                                          
                                                                                                                           5. ---
                                                                                                                          
                                                                                                                           6. ## Próximos Pasos
                                                                                                                          
                                                                                                                           7. Ahora que tienes la extensión instalada:
                                                                                                                          
                                                                                                                           8. - ✅ Explora la interfaz
                                                                                                                              - - ✅ Prueba las funciones disponibles
                                                                                                                                - - ✅ Personaliza los colores en `popup.css` si lo deseas
                                                                                                                                  - - ✅ Agrega nuevas funcionalidades editando `popup.js`
                                                                                                                                   
                                                                                                                                    - ---
                                                                                                                                    
                                                                                                                                    ## ¿Necesitas Ayuda?
                                                                                                                                    
                                                                                                                                    Si encontraste problemas:
                                                                                                                                    
                                                                                                                                    1. Consulta la sección "Solución de Problemas" arriba
                                                                                                                                    2. 2. Abre un issue en: https://github.com/leaan88/security-scanner-pro/issues
                                                                                                                                       3. 3. Revisa el README.md principal para más información
                                                                                                                                         
                                                                                                                                          4. ---
                                                                                                                                         
                                                                                                                                          5. **Versión:** 1.0.0
                                                                                                                                          6. **Última Actualización:** Diciembre 2025
                                                                                                                                          7. **Estado:** ✅ Lista para usar
