const handleSubmit = (e) => {
	e.preventDefault();
	console.log("click");
	const inputEl = e.target.children[0].children[1];
	console.log(e.target);
	if (inputEl.value === "") {
		inputEl.classList.add("input-field--error");
	} else {
		inputEl.classList.remove("input-field--error");
		inputEl.value = "";
	}
};

export default handleSubmit;
