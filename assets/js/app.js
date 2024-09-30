const c1=console.log;
const menuToggleBtn=[...document.querySelectorAll('.menuToggleBtn')]

menuToggleBtn.forEach(btn=>{
	btn.addEventListener("click",function(){
		cl(this.parentElement.nextElementsibling)
		this.parentElement.nextElementsibling.classList.toggle('show')
		
	})
})
// const menuToggleBtn=document.querySelector('.menuToggleBtn');
// const navbar1=document.querySelector('.navbar1');
// const onmenuToggle=()=>{
	// navbar1.classList.toggle('show')
// }


// menuToggleBtn.addEventListener("click",onmenuToggle)

$('.menuToggleBtn').on("click",function(){
	// $('.navbar1').fadeToggle('show');
	$(this).parent().next().slideToggle();
})