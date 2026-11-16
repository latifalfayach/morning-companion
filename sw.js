self.addEventListener("push", (e) => {
  const data = e.data ? e.data.json() : {};
  e.waitUntil(self.registration.showNotification(data.title || "☀️ Quick check-in", {
    body: data.body || "What are you up to? 🌅",
    icon: "icon-192.png",
    data: { url: data.url }
  }));
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url || "https://latifalfayach.github.io/morning-companion/"));
});
