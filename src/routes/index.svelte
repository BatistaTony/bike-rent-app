<script lang="ts">
	import Title from '../components/ui/Title/title.svelte';
	import Input from '../components/ui/Input/input.svelte';
	import Card from '../components/ui/Card/card.svelte';

	let search = '';

	const handleChangeInput = (event: Event) => {
		const inputTarget = event.target as HTMLInputElement;
		search = inputTarget.value;
		console.log(inputTarget.value);
	};
</script>

<svelte:head>
	<title>Bike Rent</title>
	<meta name="description" content="bike rent app" />
</svelte:head>

<section>
	<div class="home-header">
		<Title text="Browse Bikes" />
		<Input handleChange={handleChangeInput} placeholder="search" value={search} />
	</div>
</section>

<section class="brands-list">
	<Card
		isActive={true}
		src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC8CAMAAABYM3sZAAAAw1BMVEX/SgD/////RgD+//z8///4PwD/PwD0LAD2VRv++Pj6TAP8SAb57ubyl3vzppD85N3yrKLwZEn96uf1RQD1yLHzdVv/+PHyWSL5Tw/6a0L9//nrZEDWgnHvXDD0VinwXzrjb0zJh3HMiHjka07dd13nZznzh2nfcU/PhXzqYzLnakPgdmTRgmvVemnkcVz6UCD1ycbxnIfEkYbZeFbFknbVfV/279/1u6brd0m+mpfuXyj5X0v4lobst6vHj4zbdmnafXVhwieYAAAEPElEQVR4nO3deXuiOAAG8CSEiIlOq7aFkUvFW3u3c+0x+/0/1QatJHR2mXbmj1Z4f9rWAvI07xOCUEKIJLDn5d/YW/8V8L5g+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqBWmn69StS6zUPWC75Tne68TDFzBJFGqelW+9waF+T2tm86nfudV+ief54mrfgiDzTvFmvqf+rfiTQr0G1odyjl9Bc7z5S/Ozt3nGwHrcqdYzOEfji+Lk2F7SJ2X2pfT0Wnws1iUa4boUrMmSo8xC+44/1cHKuuH0/niMjsN1qVWvWhOFno70Y+ua6+qqVlQ2tZNAu/a5W1uFvptuqm8YqTYTJqbxd7FtSru/dX0LPhNq1hV07MY8i/FvqRWWehXw+qi6ybCaZc+mg1viiLXKguH8uFFBa4bS4eW4nJoe3BYVa2yoPwibVVwe6e6UnB7k9LBzA9lrlUWnLb/qL4lpOt+5k67VC9MmWuVhW4NepUL66Ox1p/lttahf9UyC8rbvZ+dgVHuqd166g3mrLFZEOae2E1Gk7NQSs3zo3wri8MBWo2z+KERfZrF3D5tXBalMMxhB3FPqXlLE7JQsnz2Wyl2SIPNOW1UFkSqjyU6nKc57NzaqTYiCxIM7QOP/qA4UaGzaNp+ZGB/vqR9czqvVC9oI7Mo5iALZPHTLJrZXiALZJFDFr+QRQM+ayELZIEscsjCQBYGsjCQhYEsDGRhIAsDWRg4NjOQhYEsDGRhIAsDWRjIwkAWBv5XZCALA1kYOgv+sixM3wg7C87/MwvnKLPo0OIyC07t6zuD51mY6y+s7no6i8OxmejaER1h3ztxe2pLDvVCEvXBnnGrZFEx0tJbzDXQ69L086PrrCtdoR9PhNV/TMmBa2PKNBj2dOEeruOSSggzWQzI8bEv1zPdCiUr98VV1oJWFalY7dFVCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHhfnnVWtEegbVw/xnRXYrUbuYGxZHO1SVjenZNdJ/tZ5GnIMLbLRuVP9oIeocdorMsofZ1CoIgvg2QSB3HApBfMspkMfMF8ybxEl175hCRET2J+9ZBKx0tn4Y8X08X0LtyOokCM2X32wJajv1fZNhzr6esoje5j4kXT0Xi0jR++P2ymNd16xoKNemIZiezqUjymbEuyxdd0KibhaLvuXS8nl1EcPcYsWwt/Iy7XV9+mbFnTLCZhbxWNHjeju94knFyzMblbfZWT8C7MtrMsiaJZFF/eL3r+Mpsuw0k4TReyrlmEs5n0V2SVblM5CyTxiZ8mQfZtGXh+4KmEhB7zVyxW3krJVRB4gUdiVsudTH4DAL1jIMk/Wf5aqd09BNjo0s/bVJYPE6R/6D2LYvvbCzC5CyKoYRZ5uZTcjQeUD5Ak872pykfAYftbKah85PM8Eb2MXlR/Sf2r9y+W6mhGX40gzQAAAABJRU5ErkJggg=="
	/>
</section>

<style>
	.home-header {
		height: 130px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.brands-list {
		margin-top: 15px;
		display: grid;
		grid-template-columns: 100px;
		grid-template-rows: 200px;
	}
</style>
