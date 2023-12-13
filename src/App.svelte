<script>
    export let firstName;
    export let lastName;
    export let color;

    // The reactive value will actumatically update when the dependent values are updated.
    $: fullName = `${firstName} ${lastName}`;
    // It will log in the console everytime the color changes.
    $: {
        console.log(color);
        console.log(fullName);
    }

    const handleCLick = () => {
        color = 'Blue';
    };

    const handleInput = (e) => {
        color = e.target.value;
    };
</script>

<main>
    <p style="color: {color};">{fullName} - Your belt color is {color}.</p>
    <input type="text" bind:value={firstName} />
    <input type="text" bind:value={lastName} />
    <input type="text" bind:value={color} />
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
