self.addEventListener("push", (e) => {
	const data = e.data.json();
	console.log("Push Recieved...");
	self.registration.showNotification(data.title,
		{
			body: data.body,
			icon: "https://iocl.com/corporate-logo",
		});
});

