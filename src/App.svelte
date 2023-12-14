<script>
    import Modal from './Modal.svelte';
    import AddPersonForm from './AddPersonForm.svelte';

    let showModal = false;

    const toggleModal = () => {
        showModal = !showModal;
    };

    let people = [
        { name: 'Yoshi', beltColor: 'Black', age: 25, id: 1 },
        { name: 'Mario', beltColor: 'Orange', age: 45, id: 2 },
        { name: 'Luigi', beltColor: 'Brown', age: 35, id: 3 },
    ];

    // Remove person from array.
    const deletePerson = (id) => {
        people = people.filter((person) => person.id != id);
    };
</script>

<!-- Props can be added to modals for better data interaction and manipulation -->
<Modal isPromo={false} {showModal} on:click={toggleModal}>
    <AddPersonForm />
</Modal>
<main>
    <button on:click={toggleModal}>Add Person</button>
    <!-- Adding the person.id will link each row to that respective person will be easier when manipulating data in the future. -->
    {#each people as person (person.id)}
        <div>
            <h4>{person.name}</h4>
            {#if person.beltColor.toLowerCase() === 'black'}
                <p><strong>MASTER NINJA</strong></p>
            {:else if person.beltColor.toLowerCase() === 'brown'}
                <p><strong>ADVANCED NINJA</strong></p>
            {:else if person.beltColor.toLowerCase() === 'orange'}
                <p><strong>INTERMEDIATE NINJA</strong></p>
            {:else}
                <p><strong>BEGINNER</strong></p>
            {/if}
            <p>{person.age} yeras old, {person.beltColor} belt.</p>
            <button on:click={() => deletePerson(person.id)}>Delete</button>
        </div>
        <!-- :else can be used in the scenario that data is missing. -->
    {:else}
        <p>There are no people to show...</p>
    {/each}
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
