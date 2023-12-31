document.addEventListener("DOMContentLoaded", () => {
	Fancybox.bind("[data-fancybox]");

			class ItcCollapse {
			constructor(target, duration = 350) {
				this._target = target;
				this._duration = duration;
			}
			show() {
				const el = this._target;
				if (el.classList.contains("collapsing") || el.classList.contains("collapse_show")) {
					return;
				}
				el.classList.remove("collapse");
				const height = el.offsetHeight;
				el.style.height = 0;
				el.style.overflow = "hidden";
				el.style.transition = `height ${this._duration}ms ease`;
				el.classList.add("collapsing");
				el.offsetHeight;
				el.style.height = `${height}px`;
				window.setTimeout(() => {
					el.classList.remove("collapsing");
					el.classList.add("collapse");
					el.classList.add("collapse_show");
					el.style.height = "";
					el.style.transition = "";
					el.style.overflow = "";
				}, this._duration);
			}
			hide() {
				const el = this._target;
				if (el.classList.contains("collapsing") || !el.classList.contains("collapse_show")) {
					return;
				}
				el.style.height = `${el.offsetHeight}px`;
				el.offsetHeight;
				el.style.height = 0;
				el.style.overflow = "hidden";
				el.style.transition = `height ${this._duration}ms ease`;
				el.classList.remove("collapse");
				el.classList.remove("collapse_show");
				el.classList.add("collapsing");
				window.setTimeout(() => {
					el.classList.remove("collapsing");
					el.classList.add("collapse");
					el.style.height = "";
					el.style.transition = "";
					el.style.overflow = "";
				}, this._duration);
			}
			toggle() {
				this._target.classList.contains("collapse_show") ? this.hide() : this.show();
			}
		}

	const toggleMobileMenu = () => {
		const btn = document.querySelector(".header-menu-btn"),
			menu = document.querySelector(".header-nav"),
			close = menu.querySelector(".menu-close-btn");

		btn.addEventListener("click", () => menu.classList.toggle("active"));
		close.addEventListener("click", () => menu.classList.toggle("active"));
	};
	toggleMobileMenu();

	const systemsItemsClass = () => {
		const items = document.querySelectorAll(".systems-item");
		if (items !== null) {
			items.forEach((item, index) => {
				if (index % 2 == 0) {
					item.classList.add("systems-item--bottom");
				} else {
					item.classList.add("systems-item--top");
				}
			});
		}
	};
	systemsItemsClass();

	// открытие попап
	const togglePopup = () => {
		const popup = document.querySelector("#popup");

		document.addEventListener("click", (e) => {
			const target = e.target;
			if (target.closest(".callback-btn")) {	
				
				Fancybox.show([{ src: popup, type: "inline" }]);
			}
			if (target.closest("#team-1")) {	
				
				Fancybox.show([{ src: '#popup-team-1', type: "inline" }]);
			}
			if (target.closest("#team-2")) {	
				
				Fancybox.show([{ src: '#popup-team-2', type: "inline" }]);
			}
			if (target.closest("#team-3")) {	
				
				Fancybox.show([{ src: '#popup-team-3', type: "inline" }]);
			}
			if (target.closest("#team-4")) {	
				
				Fancybox.show([{ src: '#popup-team-4', type: "inline" }]);
			}
			if (target.closest("#team-5")) {	
				
				Fancybox.show([{ src: '#popup-team-5', type: "inline" }]);
			}
			if (target.closest(".success-popup__close")) {	
				
				Fancybox.close();
			}
			
		});
	};
	togglePopup();
	// show success message
	const showSuccess = () => {
		
		document.addEventListener('submit', (e) => {
			e.preventDefault()
			Fancybox.close();
			Fancybox.show([{ src: '#success-popup', type: "inline" }]);
		} )
	};
	showSuccess();

	// hero image slider
	const heroSlider = () => {
		const slider = document.querySelector(".hero-swiper");
		if (slider !== null) {
			const swiper = new Swiper(slider, {
				// Optional parameters
				autoplay: {
					delay: 4000,
				},
				speed: 2000,
				slidesPerView: 1,
				effect: "fade",
				fadeEffect: {
					crossFade: true,
				},
				loop: true,
			});
		}
	};
	heroSlider();
	// blog slider
	const singleBlogSlider = () => {
		const slider = document.querySelector(".blog-swiper");
		if (slider !== null) {
			const swiper = new Swiper(slider, {
				// Optional parameters
				
				slidesPerView: 3,
				spaceBetween: "20px",
				loop: true,
				
				
				// If we need pagination
				pagination: {
					el: ".page-pagination",
					clickable: true,
    			/*Return bullets as numbers*/
         	renderBullet: function (index, className) {
           return '<span class="' + className + '">' + (index + 1) + "</span>"; },
				},

				// Navigation arrows
				navigation: {
					nextEl: ".page-nav__arrow--next",
					prevEl: ".page-nav__arrow--prev",
				},
				breakpoints: {
				
					320: {
						slidesPerView: 1,
						
					},
					576: {
						slidesPerView: 2,

					},
			
					992: {
						slidesPerView: 3,
					},
					
				},
			});
		}
	};
	singleBlogSlider();

	// systems slider
	let systemSwiper = undefined;
	const initSystemSwiper = () => {
		const screenWidth = window.innerWidth;
		const sliderWrapper = document.querySelector(".systems-swiper .swiper-wrapper");
		if (sliderWrapper !== null) {
			if (screenWidth < 768 && systemSwiper == undefined) {
				systemSwiper = new Swiper(".systems-swiper", {
					// Optional parameters
					// slidesPerView: "auto",
					slidesPerGroup: 1,
					spaceBetween: "20px",
					// loop: true,
					grid: {
						rows: 2,
						fill: "column",
					},
					// If we need pagination
					pagination: {
						el: ".systems-pagination",
						clickable: true,
					},

					// Navigation arrows
					navigation: {
						nextEl: ".systems-arrow--next",
						prevEl: ".systems-arrow--prev",
					},
				});

				sliderWrapper.classList.remove("row");
			} else if (screenWidth > 768 && systemSwiper != undefined) {
				systemSwiper.destroy();
				systemSwiper = undefined;
				const systemSwiperWrapper = document.querySelector(".systems .swiper-wrapper"),
					systemSwiperSlide = document.querySelectorAll(".systems .swiper-slide");
				systemSwiperWrapper.removeAttribute("style");
				systemSwiperSlide.forEach((slide) => slide.removeAttribute("style"));

				sliderWrapper.classList.add("row");
			}
		}
	};
	initSystemSwiper();
	window.addEventListener("resize", initSystemSwiper);

	// objects slider
	let objectsSwiper = undefined;
	const initObjectsSwiper = () => {
		const screenWidth = window.innerWidth;
		const sliderWrapper = document.querySelector(".objects-swiper .swiper-wrapper");
		if (sliderWrapper !== null) {
			if (screenWidth < 576 && objectsSwiper == undefined) {
				objectsSwiper = new Swiper(".objects-swiper", {
					// Optional parameters
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: "20px",

					// If we need pagination
					pagination: {
						el: ".systems-pagination",
						clickable: true,
					},

					// Navigation arrows
					navigation: {
						nextEl: ".systems-arrow--next",
						prevEl: ".systems-arrow--prev",
					},
				});
				sliderWrapper.classList.remove("row");
			} else if (screenWidth > 768 && objectsSwiper != undefined) {
				objectsSwiper.destroy();
				objectsSwiper = undefined;
				const systemSwiperWrapper = document.querySelector(".objects .swiper-wrapper"),
					systemSwiperSlide = document.querySelectorAll(".objects .swiper-slide");
				systemSwiperWrapper.removeAttribute("style");
				systemSwiperSlide.forEach((slide) => slide.removeAttribute("style"));

				sliderWrapper.classList.add("row");
			}
		}
	};
	initObjectsSwiper();
	window.addEventListener("resize", initObjectsSwiper);

	// products slider
	let productsSwiper = undefined;
	const initProductsSwiper = () => {
		const screenWidth = window.innerWidth;
		const sliderWrapper = document.querySelector(".products-swiper .swiper-wrapper");
		if (sliderWrapper !== null) {
			if (screenWidth < 992 && productsSwiper == undefined) {
				productsSwiper = new Swiper(".products-swiper", {
					// Optional parameters
					slidesPerView: 1,
					slidesPerGroup: 1,

					spaceBetween: "20px",

					// If we need pagination
					pagination: {
						el: ".partners-pagination",
						clickable: true,
					},

					// Navigation arrows
					navigation: {
						nextEl: ".partners-arrow--next",
						prevEl: ".partners-arrow--prev",
					},
					breakpoints: {
						320: {
							grid: {
								fill: "row",
								rows: 2,
							},
							slidesPerView: 1,
						},
						576: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
					},
				});
			} else if (screenWidth > 992 && productsSwiper != undefined) {
				productsSwiper.destroy();
				productsSwiper = undefined;
				const systemSwiperWrapper = document.querySelector(".products .swiper-wrapper"),
					systemSwiperSlide = document.querySelectorAll(".products .swiper-slide");
				systemSwiperWrapper.removeAttribute("style");
				systemSwiperSlide.forEach((slide) => slide.removeAttribute("style"));
			}
		}
	};
	initProductsSwiper();
	window.addEventListener("resize", initProductsSwiper);

	// job slider
	let jobSwiper = undefined;
	const initJobSwiper = () => {
		const screenWidth = window.innerWidth;
		const sliderWrapper = document.querySelector(".job-swiper .swiper-wrapper");
	
		if (sliderWrapper !== null) {
				const slides = sliderWrapper.querySelectorAll('.swiper-slide')
			if (screenWidth < 992 && jobSwiper == undefined) {
				jobSwiper = new Swiper(".job-swiper", {
					// Optional parameters
					slidesPerView: 1,
					slidesPerGroup: 1,

					spaceBetween: "20px",

					// If we need pagination
					pagination: {
						el: ".systems-pagination",
						clickable: true,
					},

					// Navigation arrows
					navigation: {
						nextEl: ".systems-arrow--next",
						prevEl: ".systems-arrow--prev",
					},
				
				});

				sliderWrapper.classList.remove('row');
				slides.forEach( item => item.classList.remove('mb-4'))
			} else if (screenWidth > 992 && jobSwiper != undefined) {
				jobSwiper.destroy();
				jobSwiper = undefined;
				const jobSwiperWrapper = document.querySelector(".job .swiper-wrapper"),
					jobSwiperSlide = document.querySelectorAll(".job .swiper-slide");
				jobSwiperWrapper.removeAttribute("style");
				jobSwiperSlide.forEach((slide) => slide.removeAttribute("style"));
				
				sliderWrapper.classList.add('row');
				slides.forEach( item => item.classList.add('mb-4'))


			}
		}
	};
	initJobSwiper();
	window.addEventListener("resize", initJobSwiper);

	// counter animation
	const counterAnimation = () => {
		let offsetTop = false;
		const aboutSection = document.querySelector(".about");
		if (aboutSection !== null) {
			const startAnimation = () => {
				if (aboutSection.getBoundingClientRect().top < 250) {
					offsetTop = true;
				}
				if (offsetTop == true) {
					const counters = document.querySelectorAll(".num");
					const speed = 3000;

					counters.forEach((counter) => {
						const animate = () => {
							const value = +counter.dataset.num;
							const data = +counter.innerText;

							const time = value / speed;
							if (data < value) {
								counter.innerText = Math.ceil(data + time);
								setTimeout(animate, 1);
							} else {
								counter.innerText = value;
							}
						};

						animate();
					});
				}
			}
			startAnimation();
			window.addEventListener("scroll", startAnimation);
		}
	};
	counterAnimation();

	// partners swiper
	const partnersSlider = () => {
		const slider = document.querySelector(".partners-swiper");
		if (slider !== null) {
			const swiper = new Swiper(slider, {
				// Optional parameters
				slidesPerView: 6,
				spaceBetween: 32,
				loop: true,

				// If we need pagination
				pagination: {
					el: ".partners-pagination",
					clickable: true,
				},

				// Navigation arrows
				navigation: {
					nextEl: ".partners-arrow--next",
					prevEl: ".partners-arrow--prev",
				},
				breakpoints: {
					// when window width is >= 320px
					320: {
						slidesPerView: "auto",
						spaceBetween: 20,
					},

					// when window width is >= 640px
					992: {
						slidesPerView: 4,
					},
					1200: {
						slidesPerView: 5,
					},
					1600: {
						slidesPerView: 6,
					},
				},
			});
		}
	};
	partnersSlider();

	// news swiper
	const newsSlider = () => {
		const slider = document.querySelector(".news-swiper");
		if (slider !== null) {
			const swiper = new Swiper(slider, {
				// Optional parameters
				slidesPerView: 3,
				spaceBetween: 32,
				loop: true,

				// If we need pagination
				pagination: {
					el: ".partners-pagination",
					clickable: true,
				},

				// Navigation arrows
				navigation: {
					nextEl: ".partners-arrow--next",
					prevEl: ".partners-arrow--prev",
				},
				breakpoints: {
					// when window width is >= 320px
					320: {
						slidesPerView: "auto",
						spaceBetween: 20,
					},

					// when window width is >= 640px
					768: {
						slidesPerView: 2,
					},
					1200: {
						slidesPerView: 3,
					},
				},
			});
		}
	};

	newsSlider();

	// single-object swiper
	const singleObjectSlider = () => {
		const slider = document.querySelector(".single-object-swiper");
		if (slider !== null) {
			const swiper = new Swiper(slider, {
				// Optional parameters
				slidesPerView: 1,			
				loop: true,

				// If we need pagination
				pagination: {
					el: ".single-object-pagination",
					clickable: true,
				},

				// Navigation arrows
				navigation: {
					nextEl: ".single-object__arrow--next",
					prevEl: ".single-object__arrow--prev",
				},
				
			});
		}
	};

	singleObjectSlider();

	// sertificates swiper
	const sertificatesSlider = () => {
		const slider = document.querySelector(".sertificates-swiper");
		if (slider !== null) {
			const swiper = new Swiper(slider, {
				// Optional parameters
				slidesPerView: 4,
				spaceBetween: 32,
				loop: true,

				// If we need pagination
				pagination: {
					el: ".partners-pagination",
					clickable: true,
				},

				// Navigation arrows
				navigation: {
					nextEl: ".partners-arrow--next",
					prevEl: ".partners-arrow--prev",
				},
				breakpoints: {
					// when window width is >= 320px
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},

					576: {
						slidesPerView: 2,
					},
					// when window width is >= 640px
					768: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 4,
					},
				},
			});
			const items = slider.querySelectorAll(".sertificates-item");
			items.forEach((item) => {
				item.addEventListener("click", () => Fancybox.open());
			});
		}
	};

	sertificatesSlider();

	// team swiper
	const teamSlider = () => {
		const slider = document.querySelector(".team-swiper");
		if (slider !== null) {
			const swiper = new Swiper(slider, {
				// Optional parameters
				slidesPerView: 4,
				spaceBetween: 32,
				loop: true,

				// If we need pagination
				pagination: {
					el: ".partners-pagination",
					clickable: true,
				},

				// Navigation arrows
				navigation: {
					nextEl: ".partners-arrow--next",
					prevEl: ".partners-arrow--prev",
				},
				breakpoints: {
					// when window width is >= 320px
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},

				576: {
						slidesPerView: 2,
					},
					// when window width is >= 640px
					992: {
						slidesPerView: 3,
					},
					1200: { 
						slidesPerView: 4,

					}, 
					1400: {
						slidesPerView: 5,
					},
				},
			});
			
		}
	};
	teamSlider();

	// Показать больше
	const showMoreText = () => {
		const textBlock = document.querySelectorAll(".text-block");
		if (textBlock !== null) {
			textBlock.forEach((block) => {
				block.addEventListener("click", (e) => {
					const t = e.target;
					if (t.closest(".show-more")) {
						e.preventDefault();
						const content = block.querySelector(".text-block__content"),
							btn = t.closest(".show-more");
						btn.classList.add("hidden");
						content.classList.add("active");
					}
				});
			});
		}

		const descrBlock = document.querySelector('.descr-block');
		if (descrBlock !== null ) {
			const btn = descrBlock.querySelector('.descr-block__btn');
			btn.addEventListener('click', () => {
				const content = descrBlock.querySelector('.descr-block__text-content');
				content.classList.add('active');
				btn.classList.add('hidden');

			})
		}
	};
	showMoreText();

	// показать имя файла 
	const  showFileName =() => {
		const inputs = document.querySelectorAll('input[type="file"]');
		inputs.forEach(input => {
			input.addEventListener( 'change', () => {
				const file = input.files;
				const span = input.parentElement.querySelector('span');
				 span.textContent = file[0].name
			});
		})
	};
	showFileName();

	// toggle categories 
	const toggleCategories = () => {
		const categoriesTitle  = document.querySelector('.categories-title');
		const categoriesList  = document.querySelector('.categories-list');
		if (categoriesTitle !== null) {
				const collapse = new ItcCollapse(categoriesList);
				categoriesTitle.addEventListener('click', () => {
					collapse.toggle();
					categoriesTitle.classList.toggle('active')
				})
		}
	};
	toggleCategories()

	// tabs
	const tabs = () => {
		const tabNav = document.querySelector(".tab-nav");
		const tabNavItem = document.querySelectorAll(".tab-nav__item");
		const tabContentItem = document.querySelectorAll(".tab-content__item");
		if (tabNav !== null) {
			const swiper = new Swiper(tabNav, {
				// Optional parameters
				slidesPerView: 1,

				loop: false,
				slideToClickedSlide: true,
				// on: {
				// 			reachEnd: function () {
				// 				this.snapGrid = [...this.slidesGrid];
				// 			},
				// 		},
				navigation: {
					nextEl: ".tab-nav__arrow--next",
					prevEl: ".tab-nav__arrow--prev",
				},
				breakpoints: {
					// when window width is >= 320px
					320: {
						slidesPerView: "auto",
					},
					1600: {
						slidesPerView: 6,
					},
				},
			});
			swiper.on("slideChange", (swiper) => {
				let index = swiper.activeIndex;
				tabNavItem.forEach((item) => item.classList.remove("active"));
				tabContentItem.forEach((item) => item.classList.remove("active"));

				tabNavItem[index].classList.add("active");
				tabContentItem[index].classList.add("active");
			});
			tabNavItem[0].classList.add("active");
			tabContentItem[0].classList.add("active");
			tabNavItem.forEach((item, index) => {
				item.addEventListener("click", () => {
					tabNavItem.forEach((item) => item.classList.remove("active"));
					tabContentItem.forEach((item) => item.classList.remove("active"));

					item.classList.add("active");
					tabContentItem[index].classList.add("active");
				});
			});
		}
	};
	tabs();

	// dropdown
	const dropdown = () => {


		const dropdownSection = document.querySelector(".dropdown");

		
		if (dropdownSection !== null) {

			const body = dropdownSection.querySelectorAll(".dropdown-body");
		const title = dropdownSection.querySelectorAll(".dropdown-item-title");
		const collapse = new ItcCollapse(body[0]);
		title[0].classList.add('active');

		collapse.show();


			dropdownSection.addEventListener("click", (e) => {
				let t = e.target;
				if (t.closest(".dropdown-item-title")) {
					const title = t.closest(".dropdown-item-title");
					title.classList.toggle("active");

					const body = title.nextElementSibling;
					const collapse = new ItcCollapse(body);
					collapse.toggle();
				}
			});
		}
	};
	dropdown();
	// маска телефона
	setTimeout(() => {
		const telInput = document.querySelectorAll('input[type="tel"]');

		if (telInput !== null) {
			telInput.forEach((input) => {
				const phoneMask = {
					AC: "+247-9999",
					AD: "+376-999-999",
					AE: "+971-59-999-9999",
					AE: "+971-9-999-9999",
					AF: "+93-99-999-9999",
					AG: "+1(268)999-9999",
					AI: "+1(264)999-9999",
					AL: "+355(999)999-999",
					AM: "+374-99-999-999",
					AN: "+599-999-9999",
					AN: "+599-999-9999",
					AN: "+599-9999-9999",
					AO: "+244(999)999-999",
					AQ: "+672-199-999",
					AR: "+54(999)999-9999",
					AS: "+1(684)999-9999",
					AT: "+43(999)999-9999",
					AU: "+61-9-9999-9999",
					AW: "+297-999-9999",
					AZ: "+994-99-999-99-99",
					BA: "+387-99-99999",
					BA: "+387-99-9999",
					BB: "+1(246)999-9999",
					BD: "+880-99-999-999",
					BE: "+32(999)999-999",
					BF: "+226-99-99-9999",
					BG: "+359(999)999-999",
					BH: "+973-9999-9999",
					BI: "+257-99-99-9999",
					BJ: "+229-99-99-9999",
					BM: "+1(441)999-9999",
					BN: "+673-999-9999",
					BO: "+591-9-999-9999",
					BR: "+55(99)9999-9999",
					BR: "+55(99)7999-9999",
					BR: "+55(99)99999-9999",
					BS: "+1(242)999-9999",
					BT: "+975-17-999-999",
					BT: "+975-9-999-999",
					BW: "+267-99-999-999",
					BY: "+375(99)999-99-99",
					BZ: "+501-999-9999",
					CA: "+1(999)999-9999",
					CD: "+243(999)999-999",
					CF: "+236-99-99-9999",
					CG: "+242-99-999-9999",
					CH: "+41-99-999-9999",
					CI: "+225-99-999-999",
					CK: "+682-99-999",
					CL: "+56-9-9999-9999",
					CM: "+237-9999-9999",
					CN: "+86(999)9999-9999",
					CN: "+86(999)9999-999",
					CN: "+86-99-99999-99999",
					CO: "+57(999)999-9999",
					CR: "+506-9999-9999",
					CU: "+53-9-999-9999",
					CV: "+238(999)99-99",
					CW: "+599-999-9999",
					CY: "+357-99-999-999",
					CZ: "+420(999)999-999",
					DE: "+49(9999)999-9999",
					DE: "+49(999)999-9999",
					DE: "+49(999)99-9999",
					DE: "+49(999)99-999",
					DE: "+49(999)99-99",
					DE: "+49-999-999",
					DJ: "+253-99-99-99-99",
					DK: "+45-99-99-99-99",
					DM: "+1(767)999-9999",
					DO: "+1(809)999-9999",
					DO: "+1(829)999-9999",
					DO: "+1(849)999-9999",
					DZ: "+213-99-999-9999",
					EC: "+593-99-999-9999",
					EC: "+593-9-999-9999",
					EE: "+372-9999-9999",
					EE: "+372-999-9999",
					EG: "+20(999)999-9999",
					ER: "+291-9-999-999",
					ES: "+34(999)999-999",
					ET: "+251-99-999-9999",
					FI: "+358(999)999-99-99",
					FJ: "+679-99-99999",
					FK: "+500-99999",
					FM: "+691-999-9999",
					FO: "+298-999-999",
					FR: "+262-99999-9999",
					FR: "+33(999)999-999",
					FR: "+508-99-9999",
					FR: "+590(999)999-999",
					GA: "+241-9-99-99-99",
					GD: "+1(473)999-9999",
					GE: "+995(999)999-999",
					GF: "+594-99999-9999",
					GH: "+233(999)999-999",
					GI: "+350-999-99999",
					GL: "+299-99-99-99",
					GM: "+220(999)99-99",
					GN: "+224-99-999-999",
					GQ: "+240-99-999-9999",
					GR: "+30(999)999-9999",
					GT: "+502-9-999-9999",
					GU: "+1(671)999-9999",
					GW: "+245-9-999999",
					GY: "+592-999-9999",
					HK: "+852-9999-9999",
					HN: "+504-9999-9999",
					HR: "+385-99-999-999",
					HT: "+509-99-99-9999",
					HU: "+36(999)999-999",
					ID: "+62(899)999-9999",
					ID: "+62-99-999-99",
					ID: "+62-99-999-999",
					ID: "+62-99-999-9999",
					ID: "+62(899)999-999",
					ID: "+62(899)999-99-999",
					IE: "+353(999)999-999",
					IL: "+972-59-999-9999",
					IL: "+972-9-999-9999",
					IN: "+91(9999)999-999",
					IO: "+246-999-9999",
					IQ: "+964(999)999-9999",
					IR: "+98(999)999-9999",
					IS: "+354-999-9999",
					IT: "+39(999)9999-999",
					JM: "+1(876)999-9999",
					JO: "+962-9-9999-9999",
					JP: "+81-99-9999-9999",
					JP: "+81(999)999-999",
					KE: "+254-999-999999",
					KG: "+996(999)999-999",
					KH: "+855-99-999-999",
					KI: "+686-99-999",
					KM: "+269-99-99999",
					KN: "+1(869)999-9999",
					KP: "+850-191-999-9999",
					KP: "+850-99-999-999",
					KP: "+850-999-9999-999",
					KP: "+850-999-999",
					KP: "+850-9999-9999",
					KP: "+850-9999-9999999999999",
					KR: "+82-99-999-9999",
					KW: "+965-9999-9999",
					KY: "+1(345)999-9999",
					KZ: "+7(699)999-99-99",
					KZ: "+7(799)999-99-99",
					LA: "+856(2099)999-999",
					LA: "+856-99-999-999",
					LB: "+961-99-999-999",
					LB: "+961-9-999-999",
					LC: "+1(758)999-9999",
					LI: "+423(999)999-9999",
					LK: "+94-99-999-9999",
					LR: "+231-99-999-999",
					LS: "+266-9-999-9999",
					LT: "+370(999)99-999",
					LU: "+352(999)999-999",
					LV: "+371-99-999-999",
					LY: "+218-99-999-999",
					LY: "+218-21-999-9999",
					MA: "+212-99-9999-999",
					MC: "+377(999)999-999",
					MC: "+377-99-999-999",
					MD: "+373-9999-9999",
					ME: "+382-99-999-999",
					MG: "+261-99-99-99999",
					MH: "+692-999-9999",
					MK: "+389-99-999-999",
					ML: "+223-99-99-9999",
					MM: "+95-99-999-999",
					MM: "+95-9-999-999",
					MM: "+95-999-999",
					MN: "+976-99-99-9999",
					MO: "+853-9999-9999",
					MP: "+1(670)999-9999",
					MQ: "+596(999)99-99-99",
					MR: "+222-99-99-9999",
					MS: "+1(664)999-9999",
					MT: "+356-9999-9999",
					MU: "+230-999-9999",
					MV: "+960-999-9999",
					MW: "+265-1-999-999",
					MW: "+265-9-9999-9999",
					MX: "+52(999)999-9999",
					MX: "+52-99-99-9999",
					MY: "+60-99-999-9999",
					MY: "+60(999)999-999",
					MY: "+60-99-999-999",
					MY: "+60-9-999-999",
					MZ: "+258-99-999-999",
					NA: "+264-99-999-9999",
					NC: "+687-99-9999",
					NE: "+227-99-99-9999",
					NF: "+672-399-999",
					NG: "+234(999)999-9999",
					NG: "+234-99-999-999",
					NG: "+234-99-999-99",
					NG: "+234(999)999-9999",
					NI: "+505-9999-9999",
					NL: "+31-99-999-9999",
					NO: "+47(999)99-999",
					NP: "+977-99-999-999",
					NR: "+674-999-9999",
					NU: "+683-9999",
					NZ: "+64(999)999-999",
					NZ: "+64-99-999-999",
					NZ: "+64(999)999-9999",
					OM: "+968-99-999-999",
					PA: "+507-999-9999",
					PE: "+51(999)999-999",
					PF: "+689-99-99-99",
					PG: "+675(999)99-999",
					PH: "+63(999)999-9999",
					PK: "+92(999)999-9999",
					PL: "+48(999)999-999",
					PS: "+970-99-999-9999",
					PT: "+351-99-999-9999",
					PW: "+680-999-9999",
					PY: "+595(999)999-999",
					QA: "+974-9999-9999",
					RE: "+262-99999-9999",
					RO: "+40-99-999-9999",
					RS: "+381-99-999-9999",
					RU: "+7(999)999-99-99",
					RW: "+250(999)999-999",
					SA: "+966-5-9999-9999",
					SA: "+966-9-999-9999",
					SB: "+677-999-9999",
					SB: "+677-99999",
					SC: "+248-9-999-999",
					SD: "+249-99-999-9999",
					SE: "+46-99-999-9999",
					SG: "+65-9999-9999",
					SH: "+290-9999",
					SH: "+290-9999",
					SI: "+386-99-999-999",
					SK: "+421(999)999-999",
					SL: "+232-99-999999",
					SM: "+378-9999-999999",
					SN: "+221-99-999-9999",
					SO: "+252-99-999-999",
					SO: "+252-9-999-999",
					SO: "+252-9-999-999",
					SR: "+597-999-9999",
					SR: "+597-999-999",
					SS: "+211-99-999-9999",
					ST: "+239-99-99999",
					SV: "+503-99-99-9999",
					SX: "+1(721)999-9999",
					SY: "+963-99-9999-999",
					SZ: "+268-99-99-9999",
					TC: "+1(649)999-9999",
					TD: "+235-99-99-99-99",
					TG: "+228-99-999-999",
					TH: "+66-99-999-9999",
					TH: "+66-99-999-999",
					TJ: "+992-99-999-9999",
					TK: "+690-9999",
					TL: "+670-999-9999",
					TL: "+670-779-99999",
					TL: "+670-789-99999",
					TM: "+993-9-999-9999",
					TN: "+216-99-999-999",
					TO: "+676-99999",
					TR: "+90(999)999-9999",
					TT: "+1(868)999-9999",
					TV: "+688-909999",
					TV: "+688-29999",
					TW: "+886-9-9999-9999",
					TW: "+886-9999-9999",
					TZ: "+255-99-999-9999",
					UA: "+380(99)999-99-99",
					UG: "+256(999)999-999",
					UK: "+44-99-9999-9999",
					US: "+1(999)999-9999",
					UY: "+598-9-999-99-99",
					UZ: "+998-99-999-9999",
					VA: "+39-6-698-99999",
					VC: "+1(784)999-9999",
					VE: "+58(999)999-9999",
					VG: "+1(284)999-9999",
					VI: "+1(340)999-9999",
					VN: "+84-99-9999-999",
					VN: "+84(999)9999-999",
					VU: "+678-99-99999",
					VU: "+678-99999",
					WF: "+681-99-9999",
					WS: "+685-99-9999",
					YE: "+967-999-999-999",
					YE: "+967-9-999-999",
					YE: "+967-99-999-999",
					ZA: "+27-99-999-9999",
					ZM: "+260-99-999-9999",
					ZW: "+263-9-999999",
				};

				const iti = window.intlTelInput(input, {
					nationalMode: true,
					utilsScript: "js/utils.js",
					// separateDialCode: true,
					initialCountry: "Ru",
					// autoPlaceholder: 'aggressive',
					customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
						const iso2 = selectedCountryData.iso2;

						for (let key in phoneMask) {
							// console.log(key);

							if (key.toLowerCase() == iso2.toLowerCase()) {
								Inputmask({ mask: phoneMask[key] }).mask(input);
								return phoneMask[key];
							}
						}
					},
				});

				const setMask = () => {
					const countryData = iti.getSelectedCountryData();
					const iso2 = countryData.iso2;

					for (let key in phoneMask) {
						if (key.toLowerCase() == iso2.toLowerCase()) {
							Inputmask({ mask: phoneMask[key] }).mask(input);
							input.value = "";
						}
					}
				};
				setMask();

				input.addEventListener("countrychange", setMask);
			});
		}
	}, 3000);
	

	// прогрузка карты
	setTimeout(() => {
		const contactsMap = document.querySelector(".contacts-map");

		if (contactsMap !== null)
		{const script = document.createElement("script");
		script.setAttribute("type", "text/javascript");
		script.setAttribute("charset", "utf-8");
		script.setAttribute("async", "true");
		script.src =
			"https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab35e02d8d4502a6f544d4da2e78036b782d6739d988d22f033ed5c03836cc1e7&amp;width=100%25&amp;height=800&amp;lang=ru_RU&amp;scroll=false";

		contactsMap.appendChild(script);}
	}, 500);

	AOS.init({
		duration: 1200,
		once: true,
	});

	// конец DOMContentLoaded
});
