let bodies = Bodies();

$(document).ready(function() {
    makeTable();
    // search tool
    $('#query').on('keyup', function(event) {
        event.stopPropagation();

        const str = this.value.toUpperCase();
        const regex = new RegExp(str,'g');
        bodies = Bodies();

        if (!str) {
            makeTable();
            return;
        };

        let keys = Object.keys(Bodies());
        let filteredNewBodies = keys.filter(body => {
            body = body.toUpperCase();
            const test = regex.test(body);
            return test;
        });

        keys.map(key => {
            if (filteredNewBodies.indexOf(key) === -1) {
                delete bodies[key];
            };
        });

        makeTable();
    });
});

function makeTable() {
    const shapeModelTable = $('#shape-model-table');
    const objectNames = Object.keys(bodies);
    const table =
    `<div class="table" id="shape-model-table">
        <div class="row header">
            <div class="cell">Object Name</div>
            <div class="cell">Full Datasets with Documentation</div>
            <div class="cell">Download Original or .obj</div>
            <div class="cell">Data Ferret Search</div>
            <div class="cell">Preview</div>
        </div>
    </div>`;

    shapeModelTable.replaceWith(table);

    const reAlpha = /[^a-zA-Z]/g;
    const reNum = /[^0-9]/g;

    function sortAlphaNum(a, b) {
        const aA = a.replace(reAlpha, "");
        const bA = b.replace(reAlpha, "");
        if (aA === bA) {
            const aN = parseInt(a.replace(reNum, ""), 10);
            const bN = parseInt(b.replace(reNum, ""), 10);
            return aN === bN ? 0 : aN > bN ? 1 : -1;
        } else {
            return aA > bA ? 1 : -1;
        }
    }

    objectNames.sort(sortAlphaNum).map(name => {
        const $table = $("#shape-model-table");

        const $row = $('<div>', {class: 'row'});

        const newCell = function(element) {
            const $cell = $('<div>', {class: 'cell'});
            $cell.append(element);
            return $cell;
        };

        // construct name cell
        const $name = newCell(`<p><b>${name}</b></p>`);
        $row.append($name);

        // construct link to dataset cell
        const $datasetDiv = $('<div>',{class: 'cell'});
        const $datasetList = $('<ul>');

        $datasetDiv.append($datasetList);

        const datasets = bodies[name]['datasets'];
        datasets.map(dataset => {
            $datasetList.append(`<li><a href="${dataset.link}">${dataset.name}</a></li>`);
        });
        $row.append($datasetDiv);

        // construct files cell
        const $filesCell = $('<div>', {class: 'cell'});
        const $list = $('<ul>');
        const files = bodies[name]['files'];
        const titles = Object.keys(files);
        titles.map(title => {
            $list.append(`<li><a href="${files[title]}" download>${title}</a></li>`)
        });

        $filesCell.append($list);
        $row.append($filesCell);

        // construct data ferret search link cell
        function querify(qs) {
            return qs.replace(/ /g,'%20');
        };
        const ferretLink = `https://sbnapps.psi.edu/ferret/SimpleSearch/results.action?targetName=${querify(name)}`;
        $row.append(newCell(`<a href="${ferretLink}">Ferret Search</a>`));

        // construct preview cell
        const preview = bodies[name]['preview'];
        if (!preview) $row.append(newCell(''));
        else $row.append(newCell(`<a href="${preview}"><img src="${preview}" class="preview" title="Click to Enlarge"></a>`));

        $table.append($row);
    });
};
