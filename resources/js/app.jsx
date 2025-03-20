import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    resolve: (name) => resolvePageComponent(
            `/features/${name}.jsx`,
            import.meta.glob("/features/**/*.jsx")
        ),
        setup({ el, App, props }) {
            createRoot(el).render(<App {...props} />);
        },
    progress: {
        color: '#4B5563',
    },
});
