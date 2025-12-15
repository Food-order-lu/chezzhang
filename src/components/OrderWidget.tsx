'use client';

import { useEffect } from 'react';

export default function OrderWidget() {
    useEffect(() => {
        // Load GloriaFood script
        const script = document.createElement('script');
        script.src = 'https://www.fbgcdn.com/embedder/js/ewm2.js';
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup
            const existingScript = document.querySelector('script[src="https://www.fbgcdn.com/embedder/js/ewm2.js"]');
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, []);

    return (
        <>
            {/* GloriaFood Order Button - Update data-glf-ruid with actual restaurant ID */}
            <span
                className="glf-button btn btn-primary"
                data-glf-cuid="51bac733-bb04-42fd-be77-8ed7c9d2d231"
                data-glf-ruid="fbb37f86-ac13-4234-976f-a21462001e16"
            >
                Commander en Ligne
            </span>

            {/* GloriaFood Reservation Button */}
            <span
                className="glf-button btn btn-secondary"
                data-glf-cuid="51bac733-bb04-42fd-be77-8ed7c9d2d231"
                data-glf-ruid="fbb37f86-ac13-4234-976f-a21462001e16"
                data-glf-reservation="true"
            >
                Réserver une Table
            </span>
        </>
    );
}
