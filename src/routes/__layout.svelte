<!-- 
#6161A1
#36365B
#484872
#CE1513
#F1EEEE
#521F2D
 -->
<script lang="ts">
	import Navbar from '../components/section/Navbar/navbar.svelte';
	import Footer from '../components/section/Footer/footer.svelte';
</script>

<svelte:body />
<body>
	<Navbar />

	<div class="layout-container">
		<slot />
	</div>

	<Footer />
</body>

<style global>
	* {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
		color: #f1eeee;
	}

	body {
		background: #09090d;
	}

	.layout-container {
		padding: 50px 25px;
	}
</style>
