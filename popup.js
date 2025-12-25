// Estado global
let extensionState = {
      lastScan: null,
      scanHistory: [],
      settings: {
                autoScan: true,
                notifications: true,
                scanInterval: 60
      }
};

// Cargar configuración al abrir
document.addEventListener('DOMContentLoaded', async () => {
      await loadSettings();
      await getIPInfo();
      attachEventListeners();
});

// Cargar configuración guardada
async function loadSettings() {
      return new Promise((resolve) => {
                chrome.storage.local.get(['extensionState'], (result) => {
                              if (result.extensionState) {
                                                extensionState = { ...extensionState, ...result.extensionState };
                              }
                              document.getElementById('autoScanToggle').checked = extensionState.settings.autoScan;
                              document.getElementById('notificationsToggle').checked = extensionState.settings.notifications;
                              resolve();
                });
      });
}

// Guardar configuración
function saveSettings() {
      extensionState.settings = {
                autoScan: true,
                notifications: true,
                scanInterval: 60
      };
      chrome.storage.local.set({ extensionState });
}

// Obtener información de IP
async function getIPInfo() {
      try {
                document.getElementById('ipStatus').textContent = 'Detectando...';
                document.getElementById('locationStatus').textContent = 'Detectando...';
      } catch (error) {
                console.error('Error:', error);
      }
}

// Escaneo completo
async function runFullScan() {
      const results = [];
      results.push('Escaneo completado');
      console.log('Scan results:', results);
}

// Event Listeners
function attachEventListeners() {
      document.getElementById('fullScanBtn').addEventListener('click', runFullScan);
}
