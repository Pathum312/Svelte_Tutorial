<script>
    let name;
    let beltColor;
    let age;

    const handleSubmit = () => {
        console.log({ name, beltColor, age });
    };
</script>

<h3>Add a New Person</h3>
<!-- preventDefault is used to stop the page from refreshing after submit -->
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Name" bind:value={name} />
    <input type="text" placeholder="Belt Color" bind:value={beltColor} />
    <input type="number" placeholder="Age" bind:value={age} />
    <br />
    <button>ADD</button>
</form>

<style></style>
