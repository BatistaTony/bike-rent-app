<script lang="ts">
	export let src: string;
	export let isActive: boolean;
</script>

<div class="card ${isActive && 'card-active'}">
	{#if src}
		<img {src} alt="" class="card-img" />
	{:else}
		<h1>UNKNOWN</h1>
	{/if}

	{#if isActive}
		<div class="card-point" />
	{/if}
</div>

<style>
	.card {
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
</style>
