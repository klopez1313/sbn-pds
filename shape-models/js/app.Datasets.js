app.factory('Datasets', function() {
    return {
        'Hudson_radar': {
            name: 'Radar Shape Models (Hudson)',
            link: 'https://sbn.psi.edu/pds-staging/resource/rshape.html',
            basepath: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/'
        },
        'Stooke': {
            name: 'Stooke Small Body Shape Models',
            link: 'https://sbn.psi.edu/pds-staging/resource/stkshape.html',
            basepath: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/'
        },
        'Thomas': {
            name: 'Small Body Optical Shape Models',
            link: 'https://sbn.psi.edu/pds-staging/resource/oshape.html',
            basepath: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_SHAPE_MODELS_V2_1/data/'
        },
        'NEAR': {
            name: 'NEAR Collected Shape and Gravity Models',
            link: 'https://sbn.psi.edu/pds-staging/resource/nearmod.html',
            basepath: 'https://sbnarchive.psi.edu/pds3/near/NEAR_A_5_COLLECTED_MODELS_V1_0/data/msi/'
        },
        'Lawrence': {
            name: 'Radar Shape Models of Asteroids Compiled by Lawrence',
            link: 'https://sbn.psi.edu/pds-staging/resource/jplradarshape.html',
            basepath: 'https://sbnarchive.psi.edu/pds4/non_mission/gbo.ast.jpl.radar.shape_models_V1_0/data/'
        },
        'Saturn': {
            name: 'Saturn Small Moon Shape Models',
            link: 'https://sbn.psi.edu/pds-staging/resource/saturnsatshapes.html',
            basepath: 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/'
        }
    }
});