var table="<table><tr><td >Описание поля</td><td>Результат</td></tr>"+
			"<tr><td>Полный адресс страницы</td><td>"+location.href+"</td></tr>"+
			"<tr><td>Доменное имя</td><td>"+location.host+"</td></tr>"+
			"<tr><td>Хэш</td><td>"+location.hash+"</td></tr>"+
			"<tr><td>Номер порта</td><td>"+location.port+"</td></tr>"+
			"<tr><td>Название протокола</td><td>"+location.protocol+"</td></tr>"+
			"<tr><td>Строка поиска</td><td>"+location.search+"</td></tr>"+
			"<tr><td>Длина истории просмотра</td><td>"+history.length+"</td></tr>"+
			"<tr><td>Ширина экрана</td><td>"+screen.width+"</td></tr>"+
			"<tr><td>Высота экрана</td><td>"+screen.height+"</td></tr>"+
			"<tr><td>Глубина цветопередачи</td><td>"+screen.colorDepth+"</td></tr>"+
			"<tr><td>Полезная ширина</td><td>"+screen.availWidth+"</td></tr>"+
			"<tr><td>Полезная высота</td><td>"+screen.availHieght+"</td></tr>"+
			"<tr><td>Ориентация экрана</td><td>"+screen.orientation+"</td></tr>"+
			"<tr><td>Кодовое имя браузера</td><td>"+navigator.appCodeName+"</td></tr>"+
			"<tr><td>Название браузера</td><td>"+navigator.appName+"</td></tr>"+
			"<tr><td>Можно ли хранить куки</td><td>"+navigator.cookieEnabled+"</td></tr>"+
			"<tr><td>Нахождение в сети</td><td>"+navigator.onLine+"</td></tr>"+
			"<tr><td>Заголовок в userAgent</td><td>"+navigator.userAgent+"</td></tr>"+
			"<tr><td>Размерность области просмотра по горизонтали</td><td>"+window.innerWidth+"</td></tr>"+
			"<tr><td>Размерность области просмотра по вертикали</td><td>"+window.innerHeight+"</td></tr></table>";
document.write(table);