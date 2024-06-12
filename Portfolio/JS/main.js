let nemuicon=document.queryselector('#menu-icon');
let navbar=document.queryselector('.navbar');
menuIcon.onclick=()=>{
	menuIcon.classList.toggle('fa-xmark');
	navbar.classList.toggle('active')
}

let sections=document.queryselectorAll('section');
let navlinks=document.queryselectorAll('header nav a');
window.onsroll=()=>{
	sections.foreach(sec=>{
		let top=window.scrolly;
		let offset=sec.offsetTop - 150;
		let height=sec.offsetHeight;
		let id=sec.getAttribute('id');
		if(top>=offset && top <offset +height){
			navlinks.foreach.apply(links => {
				links.classlist.remove('active');
				document.queryselector('header nav a[href*=' + id+']').classlist.add('active');
			})
		}

	})
	let header=document.queryselector('header');
	header.classlist.toggle('sticky',window.scrolly > 100);

	menuIcon.classlist.remove('fa-xmark');
	navbar.classlist.remove('active');

};
scrollReveal({
	distance:'80px',
	duration:2000,
	delay:200,
});
scrollReveal().reveal('.home-content,heading',{orgin:'top'});
scrollReveal().reveal('.home-img,.sevices-container,.portfolio-box,.contact from',{orgin:'buttom'});
scrollReveal().reveal('.home-content h1,.about-img',{orgin:'left'});
scrollReveal().reveal('.home-content p,.about-content',{orgin:'right'});