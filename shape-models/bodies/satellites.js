let Satellites = function() {
    return {
        'Amalthea (Jupiter V)': {
            datasets: [stookDataset(nullset)]
        },
        'Atlas (Saturn XV)': {
            datasets: [
                saturnDataset({
                    objPath: 'files/SATURN_SMALL_MOONS/atlas/atlas_30k_plt.tab.obj',
                    usdzPath: 'files/SATURN_SMALL_MOONS/atlas/atlas_30k_plt.usdz',
                    preview: 'previews/atlas_30k_plt.png'
                })
            ]
        },
        'Calypso (Saturn XIV)': {
            datasets: [
                saturnDataset({
                    objPath: 'files/SATURN_SMALL_MOONS/calypso/calypso_30k_plt.tab.obj',
                    preview: 'previews/calypso_30k_plt.png'
                })
            ]
        },
        'Daphnis (Saturn XXXV)': {
            datasets: [
                saturnDataset({
                    objPath: 'files/SATURN_SMALL_MOONS/daphnis/daphnis_30k_plt.tab.obj',
                    usdzPath: 'files/SATURN_SMALL_MOONS/daphnis/daphnis_30k_plt.usdz',
                    preview: 'previews/daphnis_30k_plt.png'
                }
            )]
        },
        'Deimos (Mars II)': {
            datasets: [thomasDataset(nullset)]
        },
        'Dione (Saturn IV)': {
            datasets: [{
                name: 'Gaskell Dione Shape Model',
                link: 'https://sbn.psi.edu/pds/resource/dioneshape.html',
                file: {
                    archivePath: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_ISSWA_5_DIONESHAPE_V1_0/data/',
                    objPath: 'files/dione/dione_ver64q.tab.obj',
                    preview: 'previews/dione.png'
                }
            }]
        },
        'Epimetheus (Saturn XI)': {
            datasets: [
                saturnDataset({
                    objPath: 'files/SATURN_SMALL_MOONS/epimetheus/epimetheus_30k_plt.tab.obj',
                    preview: 'previews/epimetheus_30k_plt.png'
                }),
                stookDataset(nullset),
                thomasDataset(nullset)
            ]
        },
        'Helene (Saturn XII)': {
            datasets: [
                saturnDataset({
                    objPath: 'files/SATURN_SMALL_MOONS/helene/helene_30k_plt.tab.obj',
                    preview: 'previews/helene_30k_plt.png'
                }
            )]
        },
        'Hyperion (Saturn VII)': {
            datasets: [
                saturnDataset({
                    objPath: 'files/SATURN_SMALL_MOONS/hyperion/hyperion_30k_plt.tab.obj',
                    preview: 'previews/hyperion_30k_plt.png'
                }),
                thomasDataset(nullset)
            ]
        },
        'Janus (Saturn X)': {
            datasets: [
                saturnDataset({
                    objPath: 'files/SATURN_SMALL_MOONS/janus/janus_30k_plt.tab.obj',
                    preview: 'previews/janus_30k_plt.png'
                }),
                thomasDataset(nullset),
                stookDataset(nullset)
            ]
        },
        'Larissa (Neptune VII)': {
            datasets: [stookDataset(nullset)]
        },
        'Mimas (Saturn I)': {
            datasets: [{
                name: 'Gaskell Mimas Shape Model',
                link: 'https://sbn.psi.edu/pds/resource/mimasshape.html',
                file: {
                    archivePath: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_MIMASSHAPE_V2_0/data/',
                    objPath: 'files/mimas/mimas_ver64q.tab.obj',
                    preview: 'previews/mimas.png'
                }
            }]
        },
        'Pan (Saturn XVIII)': {
            datasets: [
                saturnDataset({
                    objPath: 'files/SATURN_SMALL_MOONS/pan/pan_30k_plt.tab.obj',
                    usdzPath: 'files/SATURN_SMALL_MOONS/pan/pan_30k_plt.usdz',
                    preview: 'previews/pan_30k_plt.png'
                })
            ]
        },
        'Pandora (Saturn XVII)': {
            datasets: [
                stookDataset(nullset),
                saturnDataset({
                    objPath: 'files/SATURN_SMALL_MOONS/pandora/pandora_30k_plt.tab.obj',
                    usdzPath: 'files/SATURN_SMALL_MOONS/pandora/pandora_30k_plt.usdz',
                    preview: 'previews/pandora_30k_plt.png'
                })
            ]
        },
        'Phobos (Mars I)': {
            datasets: [
                {
                    name: 'Gaskell Phobos Shape Model',
                    link: 'https://sbn.psi.edu/pds/resource/phobosshape.html',
                    file: {
                        archivePath: 'https://sbnarchive.psi.edu/pds3/multi_mission/VO1_SA_VISA_VISB_5_PHOBOSSHAPE_V1_0/data/',
                        objPath: 'files/phobos/phobos_ver64q.tab.obj',
                        preview: 'previews/phobos.png'
                    }
                },
                thomasDataset(nullset)
            ]
        },
        'Phoebe (Saturn IX)': {
            datasets: [{
                name: 'Gaskell Phoebe Shape Model',
                link: 'https://sbn.psi.edu/pds/resource/phoebeshape.html',
                file: {
                    archivePath: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_PHOEBESHAPE_V2_0/data/',
                    objPath: 'files/phoebe/phoebe_ver64q.tab.obj',
                    preview: 'previews/phoebe.png'
                }
            }]
        },
        'Prometheus (Saturn XVI)': {
            datasets: [
                saturnDataset(nullset),
                stookDataset({
                    objPath: 'files/SATURN_SMALL_MOONS/prometheus/prometheus_30k_plt.tab.obj',
                    usdzPath: 'files/SATURN_SMALL_MOONS/prometheus/prometheus_30k_plt.usdz',
                    preview: 'previews/prometheus_30k_plt.png'
                })
            ]
        },
        'Proteus (Neptune VIII)': {
            datasets: [stookDataset(nullset)]
        },
        'Telesto (Saturn XIII)': {
            datasets: [
                saturnDataset({
                    objPath: 'files/SATURN_SMALL_MOONS/telesto/telesto_30k_plt.tab.obj',
                    preview: 'previews/telesto_30k_plt.png'
                })
            ]
        },
        'Tethys (Saturn III)': {
            datasets: [{
                name: 'Gaskell Tethys Shape Model',
                link: 'https://sbn.psi.edu/pds/resource/tethysshape.html',
                file: {
                    archivePath: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_TETHYSSHAPE_V1_0/data/',
                    objPath: 'files/tethys/tethys_ver64q.tab.obj',
                    preview: 'previews/tethys.png'
                }
            }]
        },
        'Thebe (Jupiter XIV)': {
            datasets: [stookDataset(nullset)]
        }
    };
};
