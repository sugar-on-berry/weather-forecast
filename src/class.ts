/// <reference path="./typings/jquery/jquery.d.ts" />
import $ = require('jquery');

class TestClass {
	private text: string;

	constructor(text: string) {
		this.text = text;
	}

	display(): void {
		$('p').append(this.text);
	}
}

export = TestClass;