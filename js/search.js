'use strict';
var searchData = [];
var vueApp = {
    el: '#search-bar',
    data: {
        focused: false,
        query: '',
        mode: 'asteroid',
        searchData: searchData
    },
    computed: {
        searchResults: function() {
            switch (this.mode) {
                case 'asteroid': 
                    return this.searchData.filter(item => {
                        for (let val of Object.values(item)) {
                            if ((val.constructor === String || typeof val === 'string') && val.toUpperCase().includes(this.query.toUpperCase())) { return true; }
                            if (Array.isArray(val) && val.some(str => str.toUpperCase().includes(this.query.toUpperCase()))) { return true; }
                        }
                        return false;
                    })
                case 'pds': {
                    return [{
                        name: `Search "${this.query}" on pds.nasa.gov`,
                        description: 'Additional data may be available from other PDS nodes',
                        url: `https://pds.nasa.gov/datasearch/keyword-search/search.jsp?q=${this.query}`
                    }]
                }
            }
        },
    },
    methods: {
        title: function(result) {
            return `${result.name} - ${result.description ? result.description : result.subtitle}`
        },
        onFocus: function() {
            this.focused = true

            // set up listener to remove focus when you click outside
            const listener = (event) => {
                if(!event.target.closest('.search-container')) {
                    this.focused = false
                    removeListener()
                }
            }
            const removeListener = () => {
                document.removeEventListener('click', listener)
            }
            document.addEventListener('click', listener)
        },
        keypress: function(event) {
            switch (event.keyCode) {
                case 27: // Escape key
                    this.focused = false; event.target.blur(); break;
                case 13: // Enter key
                    const filteredResults = this.searchResults
                    if(filteredResults.length === 1) {
                        window.location = filteredResults[0].url
                    }
            }
        }
    }
}