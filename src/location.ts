/// <reference path="./typings/jquery/jquery.d.ts" />
import $ = require('jquery');

class LocationClass {
	startFunc(): void {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
		} else {
			document.getElementById("geo").innnerHTML("Geolocationが利用できないです。。");
		}
	}

	successCallback(position: ) {
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;
	}

	errorCallback(error) {
		document.getElementById("geo").innnerHTML("Geolocationが利用できないです。。");
	}
}

export = LocationClass;