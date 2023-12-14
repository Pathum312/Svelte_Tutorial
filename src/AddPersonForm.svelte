<script>
    let name;
    let beltColor;
    let age;
    let skills = [];
    // let fighting = false;
    // let sneaking = false;
    // let running = false;

    const handleSubmit = () => {
        console.log({ name, beltColor, age, skills });
    };
</script>

<h3>Add a New Person</h3>
<!-- preventDefault is used to stop the page from refreshing after submit -->
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Name" bind:value={name} />
    <input type="number" placeholder="Age" bind:value={age} />
    <label for="check">Skills:</label>
    <!-- <input type="checkbox" bind:checked={fighting} /> Fighting<br />
    <input type="checkbox" bind:checked={sneaking} /> Sneaking<br />
    <input type="checkbox" bind:checked={running} /> Running<br /> -->
    <input type="checkbox" bind:group={skills} value="fighting" /> Fighting
    <br />
    <input type="checkbox" bind:group={skills} value="sneaking" /> Sneaking
    <br />
    <input type="checkbox" bind:group={skills} value="running" /> Running
    <br />
    <label for="beltColor">Belt Color:</label>
    <select bind:value={beltColor}>
        <option value="black">Black</option>
        <option value="brown">Brown</option>
        <option value="orange">Orange</option>
    </select>
    <br />
    <button>ADD</button>
</form>

<style></style>
