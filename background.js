// Service Worker para la extensión Security Scanner Pro

// Escuchar instalación
chrome.runtime.onInstalled.addListener((details) => {
      if (details.reason === 'install') {
                console.log('Security Scanner Pro instalado');
      }
});

// Escaneo automático programado
chrome.alarms.onAlarm.addListener((alarm) => {
      if (alarm.name === 'autoScan') {
                console.log('Escaneo automático ejecutado');
      }
});

// Crear alarma al instalar
chrome.runtime.onStartup.addListener(() => {
      chrome.storage.local.get(['extensionState'], (result) => {
                const interval = result.extensionState?.settings?.scanInterval || 60;
                chrome.alarms.create('autoScan', { periodInMinutes: interval });
      });
});

// Escuchar mensajes de otras partes de la extensión
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === 'performScan') {
                performSecurityScan().then(results => {
                              sendResponse({ success: true, results });
                });
                return true; // Indica que habrá una respuesta asincrónica
      }
});

// Función para realizar el escaneo de seguridad
async function performSecurityScan() {
      const results = {
                timestamp: new Date().toISOString(),
                checks: []
      };

    // Verificar IP
    try {
              const ipResponse = await fetch('https://browserleaks.com/ip');
              results.checks.push({
                            name: 'IP Check',
                            status: 'completed'
              });
    } catch (error) {
              results.checks.push({
                            name: 'IP Check',
                            status: 'failed',
                            error: error.message
              });
    }

    return results;
}
