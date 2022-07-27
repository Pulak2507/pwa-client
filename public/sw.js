self.addEventListener("push", (e) => {
	const data = e.data.json();
	console.log("Push Recieved...");
	self.registration.showNotification(data.title,
		{
			body: data.body,
			icon: "https://github.com/Pulak2507/pwa-client1/blob/main/public/img/favicon-16x16.png",
		});
});

