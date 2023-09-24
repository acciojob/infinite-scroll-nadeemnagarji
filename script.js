const list = document.getElementById("infi-list")
let num = 11;
for(let i=1;i<11;i++){
	const listElement = document.createElement("li")
	listElement.innerText = `Item ${i}`
	list.appendChild(listElement)
}

list.addEventListener("scroll",(event)=>{
	const containerHeight = list.clientHeight  // the height of main box
	const scrollTop = list.scrollTop  // the height of content which go up when we scroll(it keeps increasing as we scroll)
	const listHeight = list.scrollHeight // the hieght of entire scroll content

			const Gap = scrollTop - listHeight // how mucn part of entire scroll is left to scroll (i.e. the below content when its value is zero wehave reached end)
	if(Math.abs(scrollTop - Gap)>=5){
		let listElement = document.createElement("li")
		listElement.innerText = `Item ${num++}`
		list.appendChild(listElement)
}
	
})
