<template>
	<div class="content_check_in">
		<h1>Регистрация</h1>
		<form id="check_in">
			<p>E-mail</p>
			<input type="text" name="login" id="login" required>
			<p>Пароль</p>
			<input type="password" name="password" id="password" required>
			<p>Повторите пароль</p>
			<input type="password" name="password_repeat" id="password_repeat" required>
			<p>Фамилия</p>
			<input type="text" name="surname" id="surname" required>
			<p>Имя</p>
			<input type="text" name="name" id="name" required>
			<p>Номер телефона</p>
			<input type="text" name="phone" id="phone" required>
			<button type="submit" name="submit" id="send">Зарегистрироваться</button>
		</form>
	</div>
</template>

<script>
	export default {
   		data() { return { }}
   		
 	}
</script>