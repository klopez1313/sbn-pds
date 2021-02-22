const nullset = {
    objPath: null,
    usdzPath: null,
    preview: null
};
const files = 'files/';
const previews = 'previews/';
const path = (path) => `files/${path}`;
const radarDataset = function(file) {
    return {
        name: 'Radar Shape Models (Hudson)',
        link: 'https://sbn.psi.edu/pds-staging/resource/rshape.html',
        file: {
            archivePath: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_RADARSHAPE_MODELS_V2_0/data/',
            objPath: file.objPath,
            usdzPath: file.objPath,
            preview: file.preview
        }
    };
};
const saturnDataset = function(file) {
    return {
        name: 'Saturn Small Moon Shape Models',
        link: 'https://sbn.psi.edu/pds-staging/resource/saturnsatshapes.html',
        file: {
            archivePath: 'https://sbnarchive.psi.edu/pds4/certified/saturn_satellite_shape_models_V1_0/data/',
            objPath: file.objPath,
            usdzPath: file.objPath,
            preview: file.preview
        }
    };
};
const stookDataset = function(file) {
    return {
        name: 'Stooke Small Body Shape Models',
        link: 'https://sbn.psi.edu/pds-staging/resource/stkshape.html',
        file: {
            archivePath: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/',
            objPath: file.objPath,
            usdzPath: file.objPath,
            preview: file.preview
        }
    };
};
const thomasDataset = function(file) {
    return {
        name: 'Small Body Optical Shape Models',
        link: 'https://sbn.psi.edu/pds-staging/resource/oshape.html',
        file: {
            archivePath: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_SHAPE_MODELS_V2_1/data/',
            objPath: file.objPath,
            usdzPath: file.objPath,
            preview: file.preview
        }
    }
};
const nearDataset = function(file) {
    return {
        name: 'NEAR Collected Shape and Gravity Models',
        link: 'https://sbn.psi.edu/pds-staging/resource/nearmod.html',
        file: {
            archivePath: 'https://sbnarchive.psi.edu/pds3/near/NEAR_A_5_COLLECTED_MODELS_V1_0/data/msi/',
            objPath: file.objPath,
            usdzPath: file.usdzPath,
            preview: file.preview
        }
    }
};
const lawrenceRadar = function(filePaths) {
    return {
        name: 'Radar shape models of asteroids compiled by Lawrence',
        link: 'https://sbn.psi.edu/pds-staging/resource/jplradarshape.html',
        file: {
            archivePath: 'https://sbnarchive.psi.edu/pds4/non_mission/gbo.ast.jpl.radar.shape_models_V1_0/data/',
            objPath: filePaths.objPath,
            usdzPath: filePaths.usdzPath,
            preview: filePaths.preview
        }
    };
};