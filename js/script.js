// let main = document.querySelector('.main');
// let ul = document.creatElement('ul');
// main.appendChild(ul);
// JavaScript
// accessing <ul>
function addItem() {
	let u_list = document.querySelector("ul");
	let item = document.getElementById('item');
	// create element
	let li_item = document.createElement("li");
    let feedback = document.querySelector("p.feedback");
	// add content to your element
	li_item.textContent = item.value;

	// parent.appendChild(child)
	if (li_item.textContent === null || li_item.textContent === ''){
		feedback.textContent = "nothing entered";
		//console.log('empty');
	}else{
		u_list.appendChild(li_item);
		item.value = "";
		item.focus();
		feedback.textContent = '';
	}
}