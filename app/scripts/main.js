function getMostRecentInstagramMedia() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.instagram.com/v1/users/self/media/recent/?access_token=1910658902.1fb234f.f63cc1da75534994b18d3794ff5b6561");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			try {
				var latestMedia = JSON.parse(xhr.responseText);
				var image = latestMedia.data[0].link;
				return image;
			} catch (error) {
				printError(error);
			}
		}
	};
	xhr.send();
}

//
//function (response) {
//	var body = "";
//	response.on("data", function (returnedData) {
//		body += returnedData;
//	})
//	response.on("end", function () {
//		if (response.statusCode === 200)
//			try {
//				var latestMedia = JSON.parse(body);
//				var image = latestMedia.data[0].link;
//				return image;
//			} catch (error) {
//				printError(error);
//			}
//	})
//})
//};