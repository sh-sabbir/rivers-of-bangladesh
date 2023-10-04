import * as fs from "fs";

let rawdata = fs.readFileSync("public/data.json");
let jsonData = JSON.parse(rawdata);

jsonData.forEach((element) => {
	// console.log(element.slug);

	let content = `---
title: "${element.title}"
title_bn: "${element.title_bn}"
description: "${element.content}"
---`;

	fs.appendFile(`test/${element.slug}.md`, content, (err) => {
		if (err) {
			console.error(err);
		}
	});
});
// console.log(jsonData);
