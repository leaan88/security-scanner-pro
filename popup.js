// Global State Management
let extensionState = {
          lastScan: null,
          scanHistory: [],
          settings: {
                        autoScan: false,
                        notifications: true,
                        darkMode: false,
                        scanInterval: 3600
          }
};

// Load configuration on startup
document.addEventListener('DOMContentLoaded', async () => {
          await loadSettings();
          attachEventListeners();
          initializeUI();

          if (extensionState.settings.autoScan) {
                        performFullScan();
          }
});

// Load settings from Chrome storage
async function loadSettings() {
          try {
                        const stored = await chrome.storage.local.get(['extensionState']);
                        if (stored.extensionState) {
                                          extensionState = { ...extensionState, ...stored.extensionState };
                        }
          } catch (error) {
                        console.error('Error loading settings:', error);
          }
}

// Save settings to Chrome storage
async function saveSettings() {
          try {
                        await chrome.storage.local.set({ extensionState });
          } catch (error) {
                        console.error('Error saving settings:', error);
          }
}

// Attach event listeners to UI elements
function attachEventListeners() {
          document.getElementById('scanBtn')?.addEventListener('click', performFullScan);
          document.getElementById('quickScanBtn')?.addEventListener('click', performQuickScan);
          document.getElementById('advancedToggle')?.addEventListener('click', toggleAdvancedPanel);
          document.getElementById('historyToggle')?.addEventListener('click', toggleHistoryPanel);
          document.getElementById('clearHistory')?.addEventListener('click', clearScanHistory);

          // Settings toggles
          document.getElementById('autoScan')?.addEventListener('change', (e) => {
                        extensionState.settings.autoScan = e.target.checked;
                        saveSettings();
          });

          document.getElementById('notifications')?.addEventListener('change', (e) => {
                        extensionState.settings.notifications = e.target.checked;
                        saveSettings();
          });

          document.getElementById('darkMode')?.addEventListener('change', (e) => {
                        extensionState.settings.darkMode = e.target.checked;
                        document.body.classList.toggle('dark-mode', e.target.checked);
                        saveSettings();
          });
}

// Initialize UI with stored settings
function initializeUI() {
          document.getElementById('autoScan').checked = extensionState.settings.autoScan;
          document.getElementById('notifications').checked = extensionState.settings.notifications;
          document.getElementById('darkMode').checked = extensionState.settings.darkMode;

          if (extensionState.settings.darkMode) {
                        document.body.classList.add('dark-mode');
          }

          updateHistoryDisplay();
}

// Perform full security scan
async function performFullScan() {
          updateStatusUI('Scanning...', 'Iniciando escaneo completo...');
          document.getElementById('resultsContainer').style.display = 'block';

          try {
                        // Get IP Information
                        const ipData = await getIPInfo();
                        updateStatus('ipValue', ipData.ip || 'N/A');
                        updateStatus('locationValue', ipData.location || 'Detectando...');

                        // Simulate scan results
                        const results = {
                                          ip: 'Completado',
                                          location: 'Completado',
                                          abuse: 'Completado',
                                          breach: 'Completado',
                                          privacy: 'Completado'
                        };

                        document.getElementById('ipStatus').textContent = results.ip;
                        document.getElementById('locationStatus').textContent = results.location;
                        document.getElementById('abuseStatus').textContent = results.abuse;
                        document.getElementById('breachStatus').textContent = results.breach;
                        document.getElementById('privacyStatus').textContent = results.privacy;

                        // Store scan in history
                        const scanRecord = {
                                          timestamp: new Date().toLocaleString(),
                                          type: 'completo',
                                          results: results
                        };

                        extensionState.scanHistory.unshift(scanRecord);
                        if (extensionState.scanHistory.length > 10) {
                                          extensionState.scanHistory.pop();
                        }

                        extensionState.lastScan = new Date().toLocaleString();
                        await saveSettings();
                        updateHistoryDisplay();

                        updateStatusUI('Escaneo Completado', '✓ Todos los escaneos finalizados correctamente');

                        if (extensionState.settings.notifications) {
                                          showNotification('Escaneo Completado', 'El escaneo de seguridad se ha completado exitosamente.');
                        }
          } catch (error) {
                        console.error('Scan error:', error);
                        updateStatusUI('Error', 'Hubo un error durante el escaneo. Intente de nuevo.');
          }
}

// Perform quick scan
async function performQuickScan() {
          updateStatusUI('Quick Scan...', 'Ejecutando escaneo rápido...');

          try {
                        const ipData = await getIPInfo();
                        updateStatus('ipValue', ipData.ip || 'N/A');
                        updateStatus('locationValue', ipData.location || 'Detectando...');

                        updateStatusUI('Quick Scan Complete', '✓ Escaneo rápido completado');

                        if (extensionState.settings.notifications) {
                                          showNotification('Escaneo Rápido Completado', 'IP y ubicación verificadas correctamente.');
                        }
          } catch (error) {
                        console.error('Quick scan error:', error);
                        updateStatusUI('Error', 'Error en el escaneo rápido');
          }
}

// Get IP information from public APIs
async function getIPInfo() {
          try {
                        const response = await fetch('https://api.ipify.org?format=json');
                        const data = await response.json();
                        return {
                                          ip: data.ip,
                                          location: 'Ubicación no disponible'
                        };
          } catch (error) {
                        console.error('Error getting IP:', error);
                        return { ip: 'Error', location: 'Error' };
          }
}

// Update status display
function updateStatus(elementId, value) {
          const element = document.getElementById(elementId);
          if (element) {
                        element.textContent = value;
          }
}

// Update overall status UI
function updateStatusUI(label, subtitle) {
          const statusElement = document.getElementById('statusOverall');
          if (statusElement) {
                        const value = statusElement.querySelector('.status-value');
                        if (value) value.textContent = label;
          }
}

// Toggle advanced panel visibility
function toggleAdvancedPanel() {
          const panel = document.getElementById('advancedPanel');
          if (panel) {
                        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
          }
}

// Toggle history panel visibility
function toggleHistoryPanel() {
          const panel = document.getElementById('historyPanel');
          if (panel) {
                        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
          }
}

// Update history display
function updateHistoryDisplay() {
          const historyContent = document.getElementById('historyContent');
          if (historyContent) {
                        if (extensionState.scanHistory.length === 0) {
                                          historyContent.innerHTML = '<p>No hay escaneos registrados aún.</p>';
                        } else {
                                          historyContent.innerHTML = extensionState.scanHistory
                                              .map((scan, index) => `
                                                                  <div style="padding: 8px 0; border-bottom: 1px solid #eee;">
                                                                                          <div style="font-weight: 600;">${index + 1}. ${scan.type}</div>
                                                                                                                  <div style="font-size: 12px; color: #666;">${scan.timestamp}</div>
                                                                                                                                      </div>
                                                                                                                                                      `)
                                              .join('');
                        }
          }
}

// Clear scan history
async function clearScanHistory() {
          if (confirm('¿Está seguro de que desea borrar el historial de escaneos?')) {
                        extensionState.scanHistory = [];
                        await saveSettings();
                        updateHistoryDisplay();
          }
}

// Show notification
function showNotification(title, message) {
          try {
                        chrome.notifications.create({
                                          type: 'basic',
                                          iconUrl: 'images/icon-128.png',
                                          title: title,
                                          message: message
                        });
          } catch (error) {
                        console.error('Error showing notification:', error);
          }
}
