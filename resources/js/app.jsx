import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    // Below you can see that we are going to get all React components from resources/js/Pages folder
    resolve: (name) =>
        resolvePageComponent(
            `/features/${name}.tsx`,
            import.meta.glob("/features/**/*.tsx")
        ),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
