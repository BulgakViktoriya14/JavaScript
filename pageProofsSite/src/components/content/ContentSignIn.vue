<template>
	<div class="content_authorization">
		<h1>Вход</h1>
		<form id="authorization">
			<p>E-mail</p>
			<input type="text" name="login" id="login" required>
			<p>Пароль</p>
			<input type="password" name="password" id="password" required>
			<p>
				<a href="">Забыли пароль?</a>
				<a href="">Регистрация</a>
			</p>
			<button type="submit" name="submit" id="send">Войти</button>
		</form>
	</div>
</template>

<script>
	export default {
   		data() { return { }}
   		
 	}
</script>