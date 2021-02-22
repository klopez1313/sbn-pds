app.factory('Comets', function () {
        return [{
                name: '67P/Churyumov–Gerasimenko',
                type: 'comet',
                datasets: [{
                    name: 'Rosetta Shape Models of Comet 67P/C-G',
                    link: 'https://pdssbn.astro.umd.edu/holdings/ro-c-multi-5-67p-shape-v2.0/dataset.html',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://pdssbn.astro.umd.edu/holdings/ro-c-multi-5-67p-shape-v2.0/data/triplate/mspcd_lam/shap2/cg_mspcd_shap2_001m_cart.wrl',
                                fileFormat: 'WRL'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/67P/cg_mspcd_shap2_001m_cart.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/67p.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/67P/cg_mspcd_shap2_001m_cart.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '81P/Wild 2',
                type: 'comet',
                datasets: [{
                    name: 'Satdust NAVCAM 81P/Wild 2 Shape Model',
                    link: 'https://pdssbn.astro.umd.edu/holdings/sdu-c-navcam-5-wild2-shape-model-v2.1/dataset.html',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://pdssbn.astro.umd.edu/holdings/sdu-c-navcam-5-wild2-shape-model-v2.1/data/wild2_cart_full.tab',
                                fileFormat: 'TAB'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/wild2/wild2_cart_full.tab.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/wild2.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/wild2/wild2_cart_full.tab.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '103P/Hartley 2',
                type: 'comet',
                datasets: [{
                    name: 'Shape Model of Hartley 2',
                    link: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_mri-5-hartley2-shape-v1.0/',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_mri-5-hartley2-shape-v1.0/data/hartley2_2012_cart.wrl',
                                fileFormat: 'WRL'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/hartley2/hartley_2_2012_cart.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/hartley2_2012_cart.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/hartley2/hartley_2_2012_cart.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '9P/Tempel 1',
                type: 'comet',
                datasets: [{
                    name: 'Deep Impact/Stardust-NExT Derived Shape Model',
                    link: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_its_mri-5-tempel1-shape-v2.0/dataset.html',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://pdssbn.astro.umd.edu/holdings/dif-c-hriv_its_mri-5-tempel1-shape-v2.0/data/tempel1_2012_cart.wrl',
                                fileFormat: 'WRL'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/tempel1/tempel1_2012_cart.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/tempel1_2012_cart.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'previews/tempel1/tempel1_2012_cart.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            },
            {
                name: '1P/Halley 1',
                type: 'comet',
                datasets: [{
                    name: 'Stooke Small Body Shape Models',
                    link: 'https://sbn.psi.edu/pds-staging/resource/stkshape.html',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_5_DDR_STOOKE_SHAPE_MODELS_V2_0/data/1682q1halley.tab',
                                fileFormat: 'TAB'
                            },
                            derived: null
                        },
                        previews: {
                            default: null,
                            ios: null
                        }
                    }
                }]
            }
        ]
    })

    /* ASTEROIDS */
    .factory('Asteroids', function (Datasets) {
        const Hudson = Datasets['Hudson_radar'];
        const Stooke = Datasets['Stooke'];
        const Thomas = Datasets['Thomas'];
        const NEAR = Datasets['NEAR'];
        const Lawrence = Datasets['Lawrence'];

        return [{
                name: '1998 KY26',
                type: 'asteroid',
                datasets: [{
                    name: Hudson.name,
                    link: Hudson.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Hudson.basepath + '1998ky26.tab',
                                fileFormat: 'TAB'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/RADAR/1998ky26.tab.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/1998ky26.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'RADAR/1998ky26.tab.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: 'Asteroid 153591',
                type: 'asteroid',
                datasets: [{
                    name: 'Shape Model of Asteroid (153591) 2001 SN263',
                    link: 'https://sbn.psi.edu/pds-staging/resource/shape153591.html',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_SHAPE153591_V1_0/data/a153591alpha.tab',
                                fileFormat: 'TAB'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/a153591/a153591alpha.tab.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/a153591.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'a153591/a153591alpha.tab.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: 'Asteroid 52760',
                type: 'asteroid',
                datasets: [{
                    name: Hudson.name,
                    link: Hudson.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Hudson.basepath + '52760.tab',
                                fileFormat: 'TAB'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/RADAR/52760.tab.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/52760.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/RADAR/52760.tab.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: 'Asteroid 8567',
                type: 'asteroid',
                datasets: [{
                    name: 'Shape and Rotation of (8567) 1996 HW1',
                    link: 'https://sbn.psi.edu/pds-staging/resource/shape8567.html',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_SHAPE8567_V1_0/data/a8567.tab',
                                fileFormat: 'TAB'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/a8567.tab.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/asteroid_8567.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/a8567.tab.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            },
            {
                name: '1 Ceres',
                type: 'asteroid',
                datasets: [{
                    name: 'Dawn Shape Models of Ceres',
                    link: 'https://sbn.psi.edu/pds-staging/resource/dawn/dwncfcshape.html',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://sbnarchive.psi.edu/pds3/dawn/fc/DWNCSPC_4_01/DATA/ICQ/CERES_SPC181019_1024.ICQ',
                                fileFormat: 'ICQ'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/ceres/CERES_SPC181019_0128.ICQ.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/ceres.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/ceres/CERES_SPC181019_0128.ICQ.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }, {
                    name: 'Ceres LAMO Regional Digital Terrain Model (Occator)',
                    link: 'https://sbn.psi.edu/pds-staging/resource/dawn/dwncfcshape.html',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://sbnarchive.psi.edu/pds3/dawn/fc/DWNCSPC_4_01/DATA/ICQ/CERES_SPC181019_1024.ICQ',
                                fileFormat: 'ICQ'
                            },
                            derived: null
                        },
                        previews: {
                            default: null,
                            ios: null
                        }
                    }
                }, {
                    name: 'HST Images, Albedo Maps, and Shape of 1 Ceres',
                    link: 'https://sbn.psi.edu/pds-staging/resource/cereshst.html',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_HSTACS_5_CERESHST_V1_0/data/shape/ceres_shap.tab',
                                fileFormat: 'TAB'
                            },
                            derived: null
                        },
                        previews: {
                            default: null,
                            ios: null
                        }
                    }
                }]
            }, {
                name: '1620 Geographos',
                type: 'asteroid',
                datasets: [{
                    name: Hudson.name,
                    link: Hudson.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Hudson.basepath + '1620geographos.tab',
                                fileFormat: 'TAB'
                            },
                            derived: [{
                                downloadLink: Hudson.basepath + '1620geographos.tab.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/1620geographos.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: Hudson.basepath + '1620geographos.tab.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '101955 Bennu',
                type: 'asteroid',
                datasets: [{
                    name: 'Shape Model of Asteroid (101955) Bennu',
                    link: 'https://sbn.psi.edu/pds-staging/resource/bennushape.html',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://sbnarchive.psi.edu/pds3/non_mission/EAR_A_I0037_5_BENNUSHAPE_V1_0/data/101955bennu.tab',
                                fileFormat: 'TAB'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/bennu/radar/101955bennu.tab.obj',
                                fileFormat: 'OBJ'
                            },{
                                downloadLink: 'shape-models/files/dsk/BENNU_K3_NOL_V01.BDS',
                                fileFormat: 'DSK'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/101955bennu.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/bennu/radar/101955bennu.tab.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }, {
                    name: 'OSIRIS-REx SPICE Archive',
                    link: 'https://naif.jpl.nasa.gov/pub/naif/pds/pds4/orex/',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://naif.jpl.nasa.gov/pub/naif/pds/pds4/orex/orex_spice/spice_kernels/dsk/bennu_g_03170mm_spc_obj_0000n00000_v020.bds',
                                fileFormat: 'DSK'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/bennu/orex/bennu.orex.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/bennu.orex.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/bennu/orex/bennu.orex.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '162173 Ryugu',
                type: 'asteroid',
                datasets: [{
                    name: '(JAXA) Hayabusa2 observations of the top-shape carbonaceous asteroid 162173 Ryugu',
                    link: 'https://www.darts.isas.jaxa.jp/pub/hayabusa2/paper/Watanabe_2019/README.html',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://www.darts.isas.jaxa.jp/pub/hayabusa2/paper/Watanabe_2019/SHAPE_SFM_3M_v20180804.obj',
                                fileFormat: 'OBJ'
                            },
                            derived: null
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/Ryugu.png',
                                fileFormat: 'PNG'
                            },
                            ios: null
                        }
                    }
                }]
            }, {
                name: '21 Lutetia',
                type: 'asteroid',
                datasets: [{
                    name: 'Rosetta Shape Model of Asteroid Lutetia',
                    link: 'http://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-lutetia-shape-v1.0/dataset.html',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-lutetia-shape-v1.0/data/lutetia_003m_cart.wrl',
                                fileFormat: 'WRL'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/lutetia/lutetia_003k_cart.obj',
                                fileFormat: 'OBJ'
                            },{
                                downloadLink: 'shape-models/files/dsk/LUTETIA_K3_FAR_V01.BDS',
                                fileFormat: 'DSK'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/lutetia.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/lutetia/lutetia_003k_cart.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '216 Kleopatra',
                type: 'asteroid',
                datasets: [{
                    name: Hudson.name,
                    link: Hudson.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Hudson.basepath + '216kleopatra.tab',
                                fileFormat: 'TAB'
                            },
                            derived: [{
                                downloadLink: Hudson.basepath + '216kleopatra.tab.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/216kleopatra.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'Hudson.basepath' + '216kleopatra.tab.usdz',
                                fileformat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '243 Ida',
                type: 'asteroid',
                datasets: [{
                    name: Stooke.name,
                    link: Stooke.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Stooke.basepath + '243ida.tab',
                                fileFormat: 'TAB'
                            },
                            derived: null
                        },
                        previews: {
                            default: null,
                            ios: null
                        }
                    }
                }, {
                    name: Thomas.name,
                    link: Thomas.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Thomas.basepath + '243ida.tab',
                                fileFormat: 'TAB'
                            },
                            derived: null
                        },
                        previews: {
                            default: null,
                            ios: null
                        }
                    }
                }]
            }, {
                name: '253 Mathilde',
                type: 'asteroid',
                datasets: [{
                    name: Stooke.name,
                    link: Stooke.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Stooke.basepath + '253mathilde.tab',
                                fileFormat: 'TAB'
                            },
                            derived: null
                        },
                        previews: {
                            default: null,
                            ios: null
                        }
                    }
                }, {
                    name: Thomas.name,
                    link: Thomas.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Thomas.basepath + '253mathilde.tab',
                                fileFormat: 'TAB'
                            },
                            derived: null
                        },
                        previews: {
                            default: null,
                            ios: null
                        }
                    }
                }, {
                    name: NEAR.name,
                    link: NEAR.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: NEAR.basepath + '253mathilde.tab',
                                fileFormat: 'TAB'
                            },
                            derived: null
                        },
                        previews: {
                            default: null,
                            ios: null
                        }
                    }
                }]
            }, {
                name: '2063 Bacchus',
                type: 'asteroid',
                datasets: [{
                    name: Hudson.name,
                    link: Hudson.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Hudson.basepath + '2063bacchus.tab',
                                fileFormat: 'TAB'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/RADAR/2063bacchus.tab.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/2063bacchus.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/RADAR/2063bacchus.tab.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '2867 Steins',
                type: 'asteroid',
                datasets: [{
                    name: 'Rosetta Shape Model of Asteroid Steins',
                    link: 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-steins-shape-v1.0/dataset.html',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://pdssbn.astro.umd.edu/holdings/ro-a-osinac_osiwac-5-steins-shape-v1.0/data/steins_cart.wrl',
                                fileFormat: 'WRL'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/steins/steins.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/steins.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/steins/steins.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            },{
                name: '25143 Itokawa',
                type: 'asteroid',
                datasets: [{
                    name: 'Gaskell Itokawa Shape Model',
                    link: 'https://sbn.psi.edu/pds-staging/resource/itokawashape.html',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://sbnarchive.psi.edu/pds3/hayabusa/HAY_A_AMICA_5_ITOKAWASHAPE_V1_0/data/quad/quad512q.tab',
                                fileFormat: 'TAB'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/itokawa/ver64q.tab.obj',
                                fileFormat: 'OBJ'
                            },{
                                downloadLink: 'shape-models/files/dsk/ITOKAWA_K50_GAS_V01.BDS',
                                fileFormat: 'DSK'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/itokawa.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/itokawa/ver64q.tab.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }, {
                    name: Hudson.name,
                    link: Hudson.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Hudson.basepath + '25143itokawa.tab',
                                fileFormat: 'TAB'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/dsk/ITOKAWA_K12_NEE_V01.BDS',
                                fileFormat: 'DSK'
                            }]
                        },
                        previews: {
                            default: null,
                            ios: null
                        }
                    }
                }]
            }, {
                name: '4 Vesta',
                type: 'asteroid',
                datasets: [{
                    name: 'Dawn Shape Models of Vesta',
                    link: 'https://sbn.psi.edu/pds-staging/resource/dawn/dwnvfcshape.html',
                    files: {
                        data: {
                            primary: null,
                            derived: [{
                                downloadLink: 'shape-models/files/vesta/Vesta-256V.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/vesta.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/vesta/Vesta-256V.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }, {
                    name: Thomas.name,
                    link: Thomas.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Thomas.basepath + '4vesta.tab',
                                fileFormat: 'TAB'
                            },
                            derived: null
                        },
                        previews: {
                            default: null,
                            ios: null
                        }
                    }
                }]
            }, {
                name: '433 Eros',
                type: 'asteroid',
                datasets: [{
                    name: 'Gaskell Eros Shape Model',
                    link: 'https://sbn.psi.edu/pds-staging/resource/erosshape.html',
                    files: {
                        data: {
                            primary: {
                                downloadLink: 'https://sbnarchive.psi.edu/pds3/near/NEAR_A_MSI_5_EROSSHAPE_V1_0/data/vertex/ver512q.tab',
                                fileFormat: 'TAB'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/eros/ver64q.tab.obj',
                                fileFormat: 'OBJ'
                            },{
                                downloadLink: 'shape-models/files/dsk/EROS_M3_GAS_V01.BDS',
                                fileFormat: 'DSK'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/eros.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/eros/ver64q.tab.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }, {
                    name: NEAR.name,
                    link: NEAR.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: NEAR.basepath + 'eros200700.tab',
                                fileFormat: 'TAB'
                            },
                            derived: null
                        },
                        previews: {
                            default: null,
                            ios: null
                        }
                    }
                }]
            }, {
                name: '4179 Toutatis',
                type: 'asteroid',
                datasets: [{
                    name: Hudson.name,
                    link: Hudson.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Hudson.basepath + '4179toutatis.tab',
                                fileFormat: 'TAB'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/RADAR/4179toutatis.tab.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/toutatis.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/RADAR/4179toutatis.tab.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '4769 Castalia',
                type: 'asteroid',
                datasets: [{
                    name: Hudson.name,
                    link: Hudson.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Hudson.basepath + '4769castalia.tab',
                                fileFormat: 'TAB'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/RADAR/4769castalia.tab.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/4769castalia.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/RADAR/4769castalia.tab.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '6489 Golevka',
                type: 'asteroid',
                datasets: [{
                    name: Hudson.name,
                    link: Hudson.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Hudson.basepath + '6489golevka.tab',
                                fileFormat: 'TAB'
                            },
                            derived: [{
                                downloadLink: 'shape-models/files/RADAR/6489golevka.tab.obj',
                                fileFormat: 'OBJ'
                            }]
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/6489golevka.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/RADAR/6489golevka.tab.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '951 Gaspra',
                type: 'asteroid',
                datasets: [{
                    name: Stooke.name,
                    link: Stooke.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Stooke.basepath + '951gaspra.tab',
                                fileFormat: 'TAB'
                            },
                            derived: null
                        },
                        previews: {
                            default: null,
                            ios: null
                        }
                    }
                }, {
                    name: Thomas.name,
                    link: Thomas.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Thomas.basepath + '951gaspra.tab',
                                fileFormat: 'TAB'
                            },
                            derived: null
                        },
                        previews: {
                            default: null,
                            ios: null
                        }
                    }
                }]
            }, {
                name: '2100 Ra-Shalom',
                type: 'asteroid',
                datasets: [{
                    name: Lawrence.name,
                    link: Lawrence.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Lawrence.basepath + 'a2100rashalom.obj',
                                fileFormat: 'OBJ'
                            },
                            derived: null
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/a2100rashalom.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/usd/a2100rashalom.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '4486 Mithra',
                type: 'asteroid',
                datasets: [{
                    name: Lawrence.name,
                    link: Lawrence.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Lawrence.basepath + 'a4486mithra.obj',
                                fileFormat: 'OBJ'
                            },
                            derived: null
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/a4486mithra.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/usd/a4486mithra.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '4660 Nereus',
                type: 'asteroid',
                datasets: [{
                    name: Lawrence.name,
                    link: Lawrence.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Lawrence.basepath + 'a4660nereus.obj',
                                fileFormat: 'OBJ'
                            },
                            derived: null
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/a4660nereus.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/usd/a4660nereus.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '10115 1992 SK',
                type: 'asteroid',
                datasets: [{
                    name: Lawrence.name,
                    link: Lawrence.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Lawrence.basepath + 'a10115_1992sk.obj',
                                fileFormat: 'OBJ'
                            },
                            derived: null
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/a10115_1992sk.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/usd/a10115_1992sk.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '29075 1950 DA (Retrograde)',
                type: 'asteroid',
                datasets: [{
                    name: Lawrence.name,
                    link: Lawrence.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Lawrence.basepath + 'a29075_1950da_retrogrademodel.obj',
                                fileFormat: 'OBJ'
                            },
                            derived: null
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/a29075_1950da_retrogrademodel.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/usd/a29075_1950da_retrogrademodel.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '29075 1950 DA (Prograde)',
                type: 'asteroid',
                datasets: [{
                    name: Lawrence.name,
                    link: Lawrence.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Lawrence.basepath + 'a29075_1950da_progrademodel.obj',
                                fileFormat: 'OBJ'
                            },
                            derived: null
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/a29075_1950da_progrademodel.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/usd/a29075_1950da_progrademodel.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '33342 1998 WT24',
                type: 'asteroid',
                datasets: [{
                    name: Lawrence.name,
                    link: Lawrence.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Lawrence.basepath + 'a33342_1998wt24.obj',
                                fileFormat: 'OBJ'
                            },
                            derived: null
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/a33342_1998wt24.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/usd/a33342_1998wt24.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '54509 YORP',
                type: 'asteroid',
                datasets: [{
                    name: Lawrence.name,
                    link: Lawrence.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Lawrence.basepath + 'a54509_yorp.obj',
                                fileFormat: 'OBJ'
                            },
                            derived: null
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/a54509_yorp.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/usd/a54509_yorp.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '66391 1999 KW4 Alpha',
                type: 'asteroid',
                datasets: [{
                    name: Lawrence.name,
                    link: Lawrence.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Lawrence.basepath + 'a66391_1999kw4_primary.obj',
                                fileFormat: 'OBJ'
                            },
                            derived: null
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/a66391_1999kw4_primary.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/usd/a66391_1999kw4_primary.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '66391 1999 KW4 Beta',
                type: 'asteroid',
                datasets: [{
                    name: Lawrence.name,
                    link: Lawrence.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Lawrence.basepath + 'a66391_1999kw4_secondary.obj',
                                fileFormat: 'OBJ'
                            },
                            derived: null
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/a66391_1999kw4_secondary.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/usd/a66391_1999kw4_secondary.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '136617 1994 CC Alpha',
                type: 'asteroid',
                datasets: [{
                    name: Lawrence.name,
                    link: Lawrence.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Lawrence.basepath + 'a136617_1994cc_primary.obj',
                                fileFormat: 'OBJ'
                            },
                            derived: null
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/a136617_1994cc_primary.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/usd/a136617_1994cc_primary.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '276049 2002 CE26 Alpha',
                type: 'asteroid',
                datasets: [{
                    name: Lawrence.name,
                    link: Lawrence.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Lawrence.basepath + '',
                                fileFormat: 'OBJ'
                            },
                            derived: null
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/a276046_2002ce26_primary.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/usd/a276046_2002ce26_primary.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }, {
                name: '341843 2008 EV5',
                type: 'asteroid',
                datasets: [{
                    name: Lawrence.name,
                    link: Lawrence.link,
                    files: {
                        data: {
                            primary: {
                                downloadLink: Lawrence.basepath + '',
                                fileFormat: 'OBJ'
                            },
                            derived: null
                        },
                        previews: {
                            default: {
                                path: 'shape-models/previews/a341843_2008ev5.png',
                                fileFormat: 'PNG'
                            },
                            ios: {
                                path: 'shape-models/files/usd/a341843_2008ev5.usdz',
                                fileFormat: 'USDZ'
                            }
                        }
                    }
                }]
            }
        ]
    });

app.factory('Satellites', function (Datasets) {
    const Stooke = Datasets['Stooke'];
    const Saturn = Datasets['Saturn'];
    const Thomas = Datasets['Thomas'];

    return [{
        name: 'Amalthea (Jupiter V)',
        type: 'satellite',
        datasets: [{
            name: Stooke.name,
            link: Stooke.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Stooke.basepath + 'j5amalthea.tab',
                        fileFormat: 'TAB'
                    },
                    derived: null
                },
                previews: {
                    default: null,
                    ios: null
                }
            }
        }]
    }, {
        name: 'Atlas (Saturn XV)',
        type: 'satellite',
        datasets: [{
            name: Saturn.name,
            link: Saturn.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Saturn.basepath + 'atlas_30k_plt.tab',
                        fileFormat: 'TAB'
                    },
                    derived: [{
                        downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/atlas_30k_plt.tab.obj',
                        fileFormat: 'OBJ'
                    },{
                        downloadLink: 'shape-models/files/dsk/ATLAS_K30_THO_V01.BDS',
                        fileFormat: 'DSK'
                    }]
                },
                previews: {
                    default: {
                        path: 'shape-models/previews/atlas_30k_plt.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'shape-models/files/SATURN_SMALL_MOONS/atlas_30k_plt.tab.usdz',
                        fileFormat: 'UDSZ'
                    }
                }
            }
        }]
    }, {
        name: 'Calypso (Saturn XIV)',
        type: 'satellite',
        datasets: [{
            name: Saturn.name,
            link: Saturn.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Saturn.basepath + 'calypso_30k_plt.tab',
                        fileFormat: 'TAB'
                    },
                    derived: [{
                        downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/calypso_30k_plt.tab.obj',
                        fileFormat: 'OBJ'
                    },{
                        downloadLink: 'shape-models/files/dsk/CALYPSO_K30_THO_V01.BDS',
                        fileFormat: 'DSK'
                    }]
                },
                previews: {
                    default: {
                        path: 'shape-models/previews/calypso_30k_plt.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'shape-models/files/SATURN_SMALL_MOONS/calypso_30k_plt.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }]
    }, {
        name: 'Daphnis (Saturn XXXV)',
        type: 'satellite',
        datasets: [{
            name: Saturn.name,
            link: Saturn.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Saturn.basepath + 'daphnis_30k_plt.tab',
                        fileFormat: 'TAB'
                    },
                    derived: [{
                        downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/daphnis_30k_plt.tab.obj',
                        fileFormat: 'OBJ'
                    }]
                },
                previews: {
                    default: {
                        path: 'shape-models/previews/daphnis_30k_plt.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'shape-models/files/SATURN_SMALL_MOONS/daphnis_30k_plt.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }]
    }, {
        name: 'Deimos (Mars II)',
        type: 'satellite',
        datasets: [{
            name: Thomas.name,
            link: Thomas.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Thomas.basepath + 'm2deimos.tab',
                        fileFormat: 'TAB'
                    },
                    derived: null
                },
                previews: {
                    default: null,
                    ios: null
                }
            }
        }]
    }, {
        name: 'Dione (Saturn IV)',
        type: 'satellite',
        datasets: [{
            name: 'Gaskell Dione Shape Model',
            link: 'https://sbn.psi.edu/pds-staging/resource/dioneshape.html',
            files: {
                data: {
                    primary: {
                        downloadLink: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_ISSWA_5_DIONESHAPE_V1_0/data/dione_ver512q.tab',
                        fileFormat: 'TAB'
                    },
                    derived: [{
                        downloadLink: 'shape-models/files/dione/dione_ver64q.tab.obj',
                        fileFormat: 'OBJ'
                    },{
                        downloadLink: 'shape-models/files/dsk/DIONE_K50_GAS_V01.BDS',
                        fileFormat: 'DSK'
                    }]
                },
                previews: {
                    default: {
                        path: 'shape-models/previews/dione.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'shape-models/files/dione/dione_ver64q.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }]
    }, {
        name: 'Epimetheus (Saturn XI)',
        type: 'satellite',
        datasets: [{
            name: Saturn.name,
            link: Saturn.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Saturn.basepath + 'epimetheus_30k_plt.tab',
                        fileFormat: 'TAB'
                    },
                    derived: [{
                        downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/epimetheus_30k_plt.tab.obj',
                        fileFormat: 'OBJ'
                    },{
                        downloadLink: 'shape-models/files/dsk/EPIMETHEUS_K30_THO_V01.BDS',
                        fileFormat: 'DSK'
                    }]
                },
                previews: {
                    default: {
                        path: 'shape-models/previews/epimetheus_30k_plt.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'shape-models/files/SATURN_SMALL_MOONS/epimetheus_30k_plt.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }, {
            name: Stooke.name,
            link: Stooke.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Stooke.basepath + 's11epimetheus.tab',
                        fileFormat: 'TAB'
                    },
                    derived: null
                },
                previews: {
                    default: null,
                    ios: null
                }
            }
        }, {
            name: Thomas.name,
            link: Thomas.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Thomas.basepath + 's11epimetheus.tab',
                        fileFormat: 'TAB'
                    },
                    derived: null
                },
                previews: {
                    default: null,
                    ios: null
                }
            }
        }]
    }, {
        name: 'Helene (Saturn XII)',
        type: 'satellite',
        datasets: [{
            name: Saturn.name,
            link: Saturn.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Saturn.basepath + 'helene_30k_plt.tab',
                        fileFormat: 'TAB'
                    },
                    derived: [{
                        downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/helene_30k_plt.tab.obj',
                        fileFormat: 'OBJ'
                    },{
                        downloadLink: 'shape-models/files/dsk/HELENE_K30_THO_V01.BDS',
                        fileFormat: 'DSK'
                    }]
                },
                previews: {
                    default: {
                        path: 'shape-models/previews/helene_30k_plt.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'shape-models/files/SATURN_SMALL_MOONS/helene_30k_plt.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }]
    }, {
        name: 'Hyperion (Saturn VII)',
        type: 'satellite',
        datasets: [{
            name: Saturn.name,
            link: Saturn.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Saturn.basepath + 'hyperion_30k_plt.tab',
                        fileFormat: 'TAB'
                    },
                    derived: [{
                        downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/hyperion_30k_plt.tab.obj',
                        fileFormat: 'OBJ'
                    },{
                        downloadLink: 'shape-models/files/dsk/HYPERION_K30_THO_V01.BDS',
                        fileFormat: 'DSK'
                    }]
                },
                previews: {
                    default: {
                        path: 'shape-models/previews/hyperion_30k_plt.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'shape-models/files/SATURN_SMALL_MOONS/hyperion_30k_plt.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }, {
            name: Thomas.name,
            link: Thomas.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Thomas.basepath + 's7hyperion.tab',
                        fileFormat: 'TAB'
                    },
                    derived: null
                },
                previews: {
                    default: null,
                    ios: null
                }
            }
        }]
    }, {
        name: 'Janus (Saturn X)',
        type: 'satellite',
        datasets: [{
            name: Saturn.name,
            link: Saturn.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Saturn.basepath + 'janus_30k_plt.tab',
                        fileFormat: 'TAB'
                    },
                    derived: [{
                        downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/janus_30k_plt.tab.obj',
                        fileFormat: 'OBJ'
                    },{
                        downloadLink: 'shape-models/files/dsk/JANUS_K30_THO_V01.BDS',
                        fileFormat: 'DSK'
                    }]
                },
                previews: {
                    default: {
                        path: 'shape-models/previews/janus_30k_plt.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'shape-models/files/SATURN_SMALL_MOONS/janus_30k_plt.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }, {
            name: Thomas.name,
            link: Thomas.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Thomas.basepath + 's10janus.tab',
                        fileFormat: 'TAB'
                    },
                    derived: null
                },
                previews: {
                    default: null,
                    ios: null
                }
            }
        }, {
            name: Stooke.name,
            link: Stooke.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Stooke.basepath + 's10janus.tab',
                        fileFormat: 'TAB'
                    },
                    derived: null
                },
                previews: {
                    default: null,
                    ios: null
                }
            }
        }]
    }, {
        name: 'Larissa (Neptune VII)',
        type: 'satellite',
        datasets: [{
            name: Stooke.name,
            link: Stooke.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Stooke.basepath + 'n7larissa.tab',
                        fileFormat: 'TAB'
                    },
                    derived: null
                },
                previews: {
                    default: null,
                    ios: null
                }
            }
        }]
    }, {
        name: 'Mimas (Saturn I)',
        type: 'satellite',
        datasets: [{
            name: 'Gaskell Mimas Shape Model',
            link: 'https://sbn.psi.edu/pds-staging/resource/mimasshape.html',
            files: {
                data: {
                    primary: {
                        downloadLink: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_MIMASSHAPE_V2_0/data/mimas_ver512q.tab',
                        fileFormat: 'TAB'
                    },
                    derived: [{
                        downloadLink: 'shape-models/files/mimas/mimas_ver512q.tab.obj',
                        fileFormat: 'OBJ'
                    },{
                        downloadLink: 'shape-models/files/dsk/MIMAS_M3_GAS_V01.BDS',
                        fileFormat: 'DSK'
                    }]
                },
                previews: {
                    default: {
                        path: 'shape-models/previews/mimas.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'shape-models/files/mimas/mimas_ver512q.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }]
    }, {
        name: 'Pan (Saturn XVIII)',
        type: 'satellite',
        datasets: [{
            name: Saturn.name,
            link: Saturn.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Saturn.basepath + 'pan_30k_plt.tab',
                        fileFormat: 'TAB'
                    },
                    derived: [{
                        downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/pan_30k_plt.tab.obj',
                        fileFormat: 'OBJ'
                    },{
                        downloadLink: 'shape-models/files/dsk/PAN_K30_THO_V01.BDS',
                        fileFormat: 'DSK'
                    }]
                },
                previews: {
                    default: {
                        path: 'shape-models/previews/pan_30k_plt.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'shape-models/files/SATURN_SMALL_MOONS/pan_30k_plt.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }]
    }, {
        name: 'Pandora (Saturn XVII)',
        type: 'satellite',
        datasets: [{
            name: Saturn.name,
            link: Saturn.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Saturn.basepath + 'pandora_30k_plt.tab',
                        fileFormat: 'TAB'
                    },
                    derived: [{
                        downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/pandora_30k_plt.tab.obj',
                        fileFormat: 'OBJ'
                    },{
                        downloadLink: 'shape-models/files/dsk/PANDORA_K30_THO_V01.BDS',
                        fileFormat: 'DSK'
                    }]
                },
                previews: {
                    default: {
                        path: 'shape-models/previews/pandora_30k_plt.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'shape-models/files/SATURN_SMALL_MOONS/pandora_30k_plt.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }, {
            name: Stooke.name,
            link: Stooke.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Stooke.basepath + 's17pandora.tab',
                        fileFormat: 'TAB'
                    },
                    derived: null
                },
                previews: {
                    default: null,
                    ios: null
                }
            }
        }]
    }, {
        name: 'Phobos (Mars I)',
        type: 'satellite',
        datasets: [{
            name: 'Gaskell Phobos Shape Model',
            link: 'https://sbn.psi.edu/pds-staging/resource/phobosshape.html',
            files: {
                data: {
                    primary: {
                        downloadLink: 'https://sbnarchive.psi.edu/pds3/multi_mission/VO1_SA_VISA_VISB_5_PHOBOSSHAPE_V1_0/data/phobos_ver512q.tab',
                        fileFormat: 'TAB'
                    },
                    derived: [{
                        downloadLink: 'shape-models/files/phobos/phobos_ver512q.tab.obj',
                        fileFormat: 'OBJ'
                    },{
                        downloadLink: 'shape-models/files/dsk/PHOBOS_M3_GAS_V01.BDS',
                        fileFormat: 'DSK'
                    }]
                },
                previews: {
                    default: {
                        path: 'shape-models/previews/phobos.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'shape-models/files/phobos/phobos_ver512q.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }, {
            name: Thomas.name,
            link: Thomas.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Thomas.basepath + 'm1phobos.tab',
                        fileFormat: 'TAB'
                    },
                    derived: null
                },
                previews: {
                    default: null,
                    ios: null
                }
            }
        }]
    }, {
        name: 'Phoebe (Saturn IX)',
        type: 'satellite',
        datasets: [{
            name: 'Gaskell Phoebe Shape Model',
            link: 'https://sbn.psi.edu/pds-staging/resource/phoebeshape.html',
            files: {
                data: {
                    primary: {
                        downloadLink: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_PHOEBESHAPE_V2_0/data/phoebe_ver512q.tab',
                        fileFormat: 'TAB'
                    },
                    derived: [{
                        downloadLink: 'shape-models/files/phoebe/phoebe_ver512q.tab.obj',
                        fileFormat: 'OBJ'
                    },{
                        downloadLink: 'shape-models/files/dsk/PHOEBE_M3_GAS_V01.BDS',
                        fileFormat: 'DSK'
                    }]
                },
                previews: {
                    default: {
                        path: 'shape-models/previews/phoebe.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'shape-models/files/phoebe/phoebe_ver512q.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }]
    }, {
        name: 'Prometheus (Saturn XVI)',
        type: 'satellite',
        datasets: [{
            name: Stooke.name,
            link: Stooke.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Stooke.basepath + 's16prometheus.tab',
                        fileFormat: 'TAB'
                    },
                    derived: [{
                        downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/s16prometheus.tab.obj',
                        fileFormat: 'OBJ'
                    }]
                },
                previews: {
                    default: {
                        path: 'shape-models/previews/prometheus_30k_plt.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'shape-models/files/SATURN_SMALL_MOONS/s16prometheus.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }, {
            name: Saturn.name,
            link: Saturn.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Saturn.basepath + 'prometheus_30k_plt.tab',
                        fileFormat: 'TAB'
                    },
                    derived: null
                },
                previews: {
                    default: null,
                    ios: null
                }
            }
        }]
    }, {
        name: 'Proteus (Neptune VIII)',
        type: 'satellite',
        datasets: [{
            name: Stooke.name,
            link: Stooke.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Stooke.basepath + 'n8proteus.tab',
                        fileFormat: 'TAB'
                    },
                    derived: null
                },
                previews: {
                    default: null,
                    ios: null
                }
            }
        }]
    }, {
        name: 'Telesto (Saturn XIII)',
        type: 'satellite',
        datasets: [{
            name: Saturn.name,
            link: Saturn.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Saturn.basepath + 'telesto_30k_plt.tab',
                        fileFormat: 'TAB'
                    },
                    derived: [{
                        downloadLink: 'shape-models/files/SATURN_SMALL_MOONS/telesto_30k_plt.tab.obj',
                        fileFormat: 'OBJ'
                    },{
                        downloadLink: 'shape-models/files/dsk/TELESTO_K30_THO_V01.BDS',
                        fileFormat: 'DSK'
                    }]
                },
                previews: {
                    default: {
                        path: 'shape-models/previews/telesto_30k_plt.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'shape-models/files/SATURN_SMALL_MOONS/telesto_30k_plt.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }]
    }, {
        name: 'Tethys (Saturn III)',
        type: 'satellite',
        datasets: [{
            name: 'Gaskell Tethys Shape Model',
            link: 'https://sbn.psi.edu/pds-staging/resource/tethysshape.html',
            files: {
                data: {
                    primary: {
                        downloadLink: 'https://sbnarchive.psi.edu/pds3/multi_mission/CO_SA_ISSNA_5_TETHYSSHAPE_V1_0/data/tethys_ver512q.tab',
                        fileFormat: 'TAB'
                    },
                    derived: [{
                        downloadLink: 'shape-models/files/tethys/tethys_ver512q.tab.obj',
                        fileFormat: 'OBJ'
                    },{
                        downloadLink: 'shape-models/files/dsk/TETHYS_M3_GAS_V01.BDS',
                        fileFormat: 'DSK'
                    }]
                },
                previews: {
                    default: {
                        path: 'shape-models/previews/tethys.png',
                        fileFormat: 'PNG'
                    },
                    ios: {
                        path: 'shape-models/files/tethys/tethys_ver512q.tab.usdz',
                        fileFormat: 'USDZ'
                    }
                }
            }
        }]
    }, {
        name: 'Thebe (Jupiter XIV)',
        type: 'satellite',
        datasets: [{
            name: Stooke.name,
            link: Stooke.link,
            files: {
                data: {
                    primary: {
                        downloadLink: Stooke.basepath + 'j14thebe.tab',
                        fileFormat: 'TAB'
                    },
                    derived: null
                },
                previews: {
                    default: null,
                    ios: null
                }
            }
        }]
    }]
});