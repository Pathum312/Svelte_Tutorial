<script>
    export let name;
    export let color;

    const handleCLick = () => {
        color = 'Blue';
    };

    const handleInput = (e) => {
        color = e.target.value;
    };
</script>

<main>
    <h1>Hello {name}!</h1>
    <p style="color: {color};">Your belt color is {color}.</p>
    <button on:click={handleCLick}>Change Color</button>
    <!-- The on:input type method is better for one way data binding. -->
    <!-- <input type="text" on:input={handleInput} value={color} /> -->
    <!-- This is better for two way data binding. -->
    <input type="text" bind:value={color} />
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
