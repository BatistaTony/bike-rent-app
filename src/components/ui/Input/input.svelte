<script lang="ts">
	export let type: string = 'text';
	export let placeholder: string;
	export let value: string;
	export let handleChange: (event: Event) => void;

	$: {
		console.log(value);
	}
</script>

<div class="input-group " style="font-size:14pt">
	<input type={'text'} {placeholder} {value} on:input={handleChange} />
</div>

<style>
	.input-group {
		width: 100%;
		height: 50px;
		border-radius: 15px;
		overflow: hidden;
		background-color: #f1eeee;
	}

	input {
		width: 100%;
		height: 100%;
		border: none;
		box-sizing: border-box;
		padding: 0px 20px;
		font-size: 1rem;
		color: #09090d;
	}

	input::placeholder {
		color: #36365b;
	}

	input:focus {
		border: none;
	}
</style>
