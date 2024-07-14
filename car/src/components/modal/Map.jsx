import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '@yandex/ymaps3-types';

const MyMapComponent = () => {
    const [ymaps3, setYmaps3] = useState(null);
    const [YMapComponents, setYMapComponents] = useState({});

    useEffect(() => {
        const loadYMaps3 = async () => {
            const ymaps3Module = await import('@yandex/ymaps3');
            const ymaps3Reactify = await ymaps3Module.import('@yandex/ymaps3-reactify');
            const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);
            const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = reactify.module(ymaps3Module);

            setYmaps3(ymaps3Module);
            setYMapComponents({ YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker });
        };

        loadYMaps3();
    }, []);

    if (!ymaps3) {
        return <div>Loading...</div>;
    }

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = YMapComponents;

    return (
        <YMap location={{ center: [25.229762, 55.289311], zoom: 9 }} mode="vector">
            <YMapDefaultSchemeLayer />
            <YMapDefaultFeaturesLayer />
            <YMapMarker coordinates={[25.229762, 55.289311]} draggable={true}>
                <section>
                    <h1>You can drag this header</h1>
                </section>
            </YMapMarker>
        </YMap>
    );
};

export default MyMapComponent;
