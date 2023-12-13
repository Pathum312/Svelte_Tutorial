<script>
    export let name;
    export let color;

    const handleCLick = () => {
        color = 'Blue';
    };
</script>

<main>
    <h1>Hello {name}!</h1>
    <p>Your belt color is {color}.</p>
    <button on:click={handleCLick}>Change Color</button>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
