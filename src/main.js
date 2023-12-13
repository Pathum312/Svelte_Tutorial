import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        name: 'Juna',
        color: 'Red',
    },
});

export default app;
