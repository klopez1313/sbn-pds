let Comets = function() {
    return {
        '81P/Wild 2': {
            datasets: [{
                name: 'Satdust NAVCAM 81P/Wild 2 Shape Model',
                link: 'https://pdssbn.astro.umd.edu/holdings/sdu-c-navcam-5-wild2-shape-model-v2.1/dataset.html',
                file: {
                    archivePath: 'https://pdssbn.astro.umd.edu/holdings/sdu-c-navcam-5-wild2-shape-model-v2.1/data/',
                    objPath: path('wild2/wild2_cart_full.tab.obj'),
                    preview: 'previews/wild2.png'
                }
            }]
        },
        '103P/Hartley 2': {
            datasets: [{
                name: 'Shape Model of Hartley 2',
                link: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_mri-5-hartley2-shape-v1.0/',
                file: {
                    archivePath: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_mri-5-hartley2-shape-v1.0/data/',
                    objPath: path('hartley2/hartley2_2012_cart.obj'),
                    preview: 'previews/hartley2_2012_cart.png'
                }
            }]
        },
        '9P/Tempel 1': {
            datasets: [{
                name: 'Deep Impact/Stardust-NExT Derived Shape Model',
                link: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_its_mri-5-tempel1-shape-v2.0/dataset.html',
                file: {
                    archivePath: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_its_mri-5-tempel1-shape-v2.0/data/',
                    objPath: path('tempel1/tempel1_2012_cart.obj'),
                    preview: 'previews/tempel1_2012_cart.png'
                }
            }]
        },
        '1P/Halley 1': {
            datasets: [stookDataset(nullset)]
        }
    };
    return {
        '67P/Churyumov–Gerasimenko': {
            files: {
                'Archived Shape Files': 'https://pdssbn.astro.umd.edu/holdings/ro-c-multi-5-67p-shape-v2.0/data/triplate/mspcd_lam/shap2/',
                '.obj File (Min Resolution)': path('Churyumov–Gerasimenko/cg_mspcd_shap2_006k_cart.obj'),
                '.obj File (Max Resolution)': path('Churyumov–Gerasimenko/cg_mspcd_shap2_001m_cart.obj')
            },
            datasets: [{
                name: 'Rosetta Shape Models of Comet 67P/C-G',
                link: 'https://pdssbn.astro.umd.edu/holdings/ro-c-multi-5-67p-shape-v2.0/dataset.html'
            }],
            preview: previews + '67p.png'
        },
        
        
        
        
    };
};