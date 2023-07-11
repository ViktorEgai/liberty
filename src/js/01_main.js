document.addEventListener("DOMContentLoaded", () => {

	

	const toggleMobileMenu = () => {
		const btn = document.querySelector(".header-menu-btn"),      
			menu = document.querySelector(".header-nav"),
      close = menu.querySelector('.menu-close-btn');

		btn.addEventListener("click", () => menu.classList.toggle("active")	);
		close.addEventListener("click", () => menu.classList.toggle("active")	);
	};
	toggleMobileMenu();





	// открытие попап
	const togglePopup = () => {
		const popup = document.querySelector("#popup"),
			popupTitle = popup.querySelector(".popup-title"),
			popupBtn = popup.querySelector(".form-btn");

		document.addEventListener("click", (e) => {
			const target = e.target;
			if (target.closest(".callback-btn")) {
				popupTitle.textContent = "Связаться с нами";
				popupBtn.textContent = "Оставить заявку";
				Fancybox.show([{ src: popup, type: "inline" }]);
			}
			if (target.closest(".consult-btn")) {
				popupTitle.textContent = "Консультация";
				popupBtn.textContent = "Получить консультацию";
				Fancybox.show([{ src: popup, type: "inline" }]);
			}
		});
	};
	// togglePopup();





	// маска телефона
	// const telInput = document.querySelectorAll('input[type="tel"]');

	// telInput.forEach(input => {
	// 	Inputmask({"mask": "+7(999) 999-99-99"}).mask(input);
	// })
	

	// // прогрузка карты
	// setTimeout( () => {
	// 	const contactsMap = document.querySelector('.contacts-map');

	// 	const iframe = `<iframe
	// 										loading="lazy"
	// 										src="https://yandex.ru/map-widget/v1/?um=constructor%3A7542a8db8aef0daf91d5566660f9f1fe45a2f2eabce0ca047c580b1bd67aba5c&amp;source=constructor"
	// 										width="100"
	// 										height="630"											
	// 									></iframe>`;
	// 	contactsMap.insertAdjacentHTML('afterbegin', iframe);
	// }, 2000)
	

	AOS.init({
		duration: 1200,
		once: true,
	});

	// конец DOMContentLoaded
});
