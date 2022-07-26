const publicKey="BC_NmOA6aSBgu6rRVLmrR4dt_s-L9rYF3wsnplKA0r9zcw66kXZOgM8Xk1VpyCuNQk7u10mt6i1UX4F8sHmy7HQ"




const send = async () => {
	console.log("Registering service worker....");
	const register = await navigator.serviceWorker.register("/sw.js", {
		scope: "/",
	});
	console.log("Service worker Registered...");
	console.log("Registering Push...");

	const subscription = await register.pushManager.subscribe({
		userVisibleOnly: true,
		applicationServerKey: urlBase64ToUit8Array(publicKey),
	});
	console.log("Push Registered...");


	await fetch('https://ioclpushserver.herokuapp.com/subscribe', {
		method: "POST",
		body: JSON.stringify(subscription),
		headers: {
			"content-type": "application/json",
		},
	});

	console.log("Subscription sent...");
};


const urlBase64ToUit8Array = (base64String) => {
	const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
	const base64 = (base64String + padding)
		.replace(/\-/g, "+")
		.replace(/_/g, "/");
	const rowData = window.atob(base64);
	const outputArray = new Uint8Array(rowData.length);
	for (let i = 0; i < rowData.length; ++i) {
		outputArray[i] = rowData.charCodeAt(i);
	}
	return outputArray;
};


if ("serviceWorker" in navigator) {
	send().catch((err) => console.log(err));
}

