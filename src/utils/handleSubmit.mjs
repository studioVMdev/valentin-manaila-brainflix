const handleSubmit = (e) => {
	e.preventDefault();
	console.log("submit");
	const inputEl = e.target.children[0].children[1];
	if (inputEl.value === "") {
		inputEl.classList.add("input-field--error");
	} else {
		inputEl.classList.remove("input-field--error");
		inputEl.value = "";
	}
};

export default handleSubmit;
