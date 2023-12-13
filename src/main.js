import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        firstName: 'Juna',
        lastName: 'Crawford',
        color: 'Red',
    },
});

export default app;
