const timeSince = (timestamp) => {
	let minute = 60;
	let hour = minute * 60;
	let day = hour * 24;
	let month = day * 30;
	let year = day * 365;

	let suffix = " Ago";

	let elapsed = Math.floor((Date.now() - timestamp) / 1000);

	if (elapsed < minute) {
		return "Just Now";
	}

	let a = (elapsed < hour && [Math.floor(elapsed / minute), "Minute"]) ||
		(elapsed < day && [Math.floor(elapsed / hour), "Hour"]) ||
		(elapsed < month && [Math.floor(elapsed / day), "Day"]) ||
		(elapsed < year && [Math.floor(elapsed / month), "Month"]) || [
			Math.floor(elapsed / year),
			"Year",
		];

	return a[0] + " " + a[1] + (a[0] === 1 ? "" : "s") + suffix;
};

const timestampToDate = (timestamp) => {
	const enUSFormatter = new Intl.DateTimeFormat("en-US");
	const options = { year: "numeric", month: "numeric", day: "numeric" };
	let dateFormatted = enUSFormatter.format(timestamp, options);

	return dateFormatted;
};

export { timestampToDate, timeSince };
