self.addEventListener("push", (e) => {
	const data = e.data.json();
	console.log("Push Recieved...");
	self.registration.showNotification(data.title,
		{
			body: data.body,
			icon: "public\img\favicon-16x16.png",
		});
});

