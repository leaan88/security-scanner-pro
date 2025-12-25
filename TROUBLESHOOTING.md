# 🛠️ Troubleshooting Guide - Security Scanner Pro

## Error: "Missing Required file"

**Problem:** Chrome shows an error like "Extension manifest.json is invalid" or "Icon file is missing"

**Solution:**
1. Make sure you have downloaded the LATEST version from GitHub
2. 2. Ensure the `/images` folder exists with these 3 files:
   3.    - `icon-16.svg`
         -    - `icon-48.svg`
              -    - `icon-128.svg`
                   - 3. Verify the `manifest.json` file references the correct icon paths
                    
                     4. ## Steps to Install the Extension
                    
                     5. ### Step 1: Download the Extension
                     6. 1. Go to: https://github.com/leaan88/security-scanner-pro
                        2. 2. Click **"Code"** → **"Download ZIP"**
                           3. 3. Extract the ZIP file to a folder on your computer
                              4. 4. **Important:** Verify all files are present (especially the `/images` folder)
                                
                                 5. ### Step 2: Enable Developer Mode
                                 6. 1. Open **Google Chrome**
                                    2. 2. Go to **chrome://extensions/**
                                       3. 3. Toggle **"Developer mode"** (top right corner)
                                         
                                          4. ### Step 3: Load the Extension
                                          5. 1. Click **"Load unpacked"** button
                                             2. 2. Navigate to the folder where you extracted the extension
                                                3. 3. Click **"Select Folder"**
                                                  
                                                   4. ### Step 4: Verify Installation
                                                   5. 1. The extension icon should appear in your Chrome toolbar
                                                      2. 2. Click it to open the Security Scanner Pro popup
                                                         3. 3. Click **"🔍 Iniciar Escaneo Completo"** to test it
                                                           
                                                            4. ## Common Issues & Solutions
                                                           
                                                            5. ### Issue 1: "Could not load extension from files"
                                                           
                                                            6. **Causes:**
                                                            7. - Missing critical files
                                                               - - Corrupted ZIP extraction
                                                                 - - Wrong folder selection
                                                                  
                                                                   - **Fix:**
                                                                   - 1. Delete the corrupted folder
                                                                     2. 2. Download a FRESH copy from GitHub
                                                                        3. 3. Extract to a clean location
                                                                           4. 4. Try loading again
                                                                             
                                                                              5. ### Issue 2: Extension loads but is blank/empty
                                                                             
                                                                              6. **Causes:**
                                                                              7. - JavaScript error in popup.js
                                                                                 - - Missing popup.html file
                                                                                  
                                                                                   - **Fix:**
                                                                                   - 1. Right-click the extension icon
                                                                                     2. 2. Select **"Inspect popup"**
                                                                                        3. 3. Check the Console tab for error messages
                                                                                           4. 4. Report the error at: https://github.com/leaan88/security-scanner-pro/issues
                                                                                             
                                                                                              5. ### Issue 3: Icons are not showing
                                                                                             
                                                                                              6. **Causes:**
                                                                                              7. - SVG icon files missing or in wrong location
                                                                                                 - - Icon path incorrect in manifest.json
                                                                                                  
                                                                                                   - **Fix:**
                                                                                                   - 1. Verify `/images` folder exists in the root directory
                                                                                                     2. 2. Check that these files exist:
                                                                                                        3.    - `images/icon-16.svg`
                                                                                                              -    - `images/icon-48.svg`
                                                                                                                   -    - `images/icon-128.svg`
                                                                                                                        - 3. Reload the extension (click reload icon on chrome://extensions/)
                                                                                                                         
                                                                                                                          4. ### Issue 4: Extension crashes when running scan
                                                                                                                         
                                                                                                                          5. **Causes:**
                                                                                                                          6. - Network connectivity issues
                                                                                                                             - - Browser permissions not granted
                                                                                                                              
                                                                                                                               - **Fix:**
                                                                                                                               - 1. Check internet connection
                                                                                                                                 2. 2. Ensure permissions are granted to the extension
                                                                                                                                    3. 3. Refresh the Chrome page before scanning
                                                                                                                                       4. 4. Try the "⚡ Escaneo Rápido" (Quick Scan) first
                                                                                                                                         
                                                                                                                                          5. ## Files Checklist
                                                                                                                                         
                                                                                                                                          6. Make sure your downloaded folder contains:
                                                                                                                                         
                                                                                                                                          7. ```
                                                                                                                                             security-scanner-pro/
                                                                                                                                             ├── manifest.json          ✓
                                                                                                                                             ├── popup.html             ✓
                                                                                                                                             ├── popup.css              ✓
                                                                                                                                             ├── popup.js               ✓
                                                                                                                                             ├── background.js          ✓
                                                                                                                                             ├── README.md              ✓
                                                                                                                                             ├── INSTALL.md             ✓
                                                                                                                                             ├── BUILD.md               ✓
                                                                                                                                             ├── DISTRIBUTION.md        ✓
                                                                                                                                             ├── TROUBLESHOOTING.md     ✓
                                                                                                                                             ├── .gitignore             ✓
                                                                                                                                             └── images/                ✓
                                                                                                                                                 ├── icon-16.svg        ✓
                                                                                                                                                 ├── icon-48.svg        ✓
                                                                                                                                                 └── icon-128.svg       ✓
                                                                                                                                             ```
                                                                                                                                             
                                                                                                                                             If any file is missing, the extension won't work!
                                                                                                                                             
                                                                                                                                             ## Still Having Issues?
                                                                                                                                             
                                                                                                                                             1. **Check GitHub Issues:** https://github.com/leaan88/security-scanner-pro/issues
                                                                                                                                             2. 2. **Review Console Logs:** Open DevTools (F12) and check for error messages
                                                                                                                                                3. 3. **Verify File Structure:** Use File Explorer to confirm all files are present
                                                                                                                                                   4. 4. **Clear Extension Data:**
                                                                                                                                                      5.    - Remove the extension from Chrome
                                                                                                                                                            -    - Clear browser cache
                                                                                                                                                                 -    - Reload the extension
                                                                                                                                                                  
                                                                                                                                                                      - ## Version Information
                                                                                                                                                                  
                                                                                                                                                                      - - **Current Version:** 1.1.0
                                                                                                                                                                        - - **Chrome API Level:** Manifest V3
                                                                                                                                                                          - - **Minimum Chrome Version:** 88+
                                                                                                                                                                           
                                                                                                                                                                            - ## Advanced Debugging
                                                                                                                                                                           
                                                                                                                                                                            - To enable detailed logging:
                                                                                                                                                                           
                                                                                                                                                                            - 1. Right-click extension icon → "Inspect popup"
                                                                                                                                                                              2. 2. Console tab will show all debug messages
                                                                                                                                                                                 3. 3. Check for:
                                                                                                                                                                                    4.    - CORS errors
                                                                                                                                                                                          -    - Missing file errors
                                                                                                                                                                                               -    - Permission denial messages
                                                                                                                                                                                                
                                                                                                                                                                                                    - ---
                                                                                                                                                                                                    
                                                                                                                                                                                                    **Last Updated:** December 25, 2025
                                                                                                                                                                                                    **Support:** GitHub Issues
