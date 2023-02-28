imageViewer = {
	init: function() {
		$(this._init);
	},
	_init: function() {
		$(".image-viewer .buttons #btn-change").click(imageViewer._change);
		$(".image-viewer .buttons #btn-slideshow").click(imageViewer._slide);
	},
	_change: function() {
		imageViewer._changeImage();
	},
	_slideClick: function() {
		// 여기에 슬라이드 멈추는 토글 작업
		console.log("확인확인");
		this._slideClick = !this._slideClick;
		imageViewer._slide;
	},
	_slide: function() {
		// 여기에 슬라이드 멈추는 토글 if else 작업
		setInterval(function() {
			console.log("인터벌");
			imageViewer._slideImage();
		}, 500);
	},
	_changeImage: function() {
		var images = this._images;
		var currentImg = document.querySelector("#img").src;
		var splitImg = currentImg.split("/");
		var imgLingth = splitImg.length
		var imageTemp = splitImg[imgLingth - 2] + "/" + splitImg[imgLingth - 1];

		while (true) {
			var index = Math.floor(Math.random() * this._images.length);
			if (imageTemp != images[index].file) {
				break;
			}
		}
		$("img")
			.attr({
				src: images[index].file,
				title: images[index].name
			});
	},
	_index: 0,
	_slideClick: false,
	_slideImage: function() {
		var images = this._images;
		var imagesLingth = images.length;
			if (this._index == imagesLingth) {
				this._index = 0;
			}
			$("img")
				.attr({
					src: images[this._index].file,
					title: images[this._index].name
				});
			this._index++;
		
			var currentImg = document.querySelector("#img").src;
			var currentTitle = document.querySelector("#img").title;
			var splitImg = currentImg.split("/");
			var imgLingth = splitImg.length
			var imageTemp = splitImg[imgLingth - 2] + "/" + splitImg[imgLingth - 1];
			
			$("img")
			.attr({
				src: imageTemp,
				title: currentTitle
			});
	},
	_images: [{
		name: '국화',
		file: 'images/Chrysanthemum.jpg'
	}, {
		name: '사막',
		file: 'images/Desert.jpg'
	}, {
		name: '수국',
		file: 'images/Hydrangeas.jpg'
	}, {
		name: '해파리',
		file: 'images/Jellyfish.jpg'
	}, {
		name: '코알라',
		file: 'images/Koala.jpg'
	}, {
		name: '등대',
		file: 'images/Lighthouse.jpg'
	}, {
		name: '펭귄',
		file: 'images/Penguins.jpg'
	}, {
		name: '듈립',
		file: 'images/Tulips.jpg'
	}],
}
