class Grid {
    height = 'auto';
    width = 'auto';
    element = null;
    columnDefinition = [];
    data = [];

    //private variables
    _table = null;
    constructor(id, gridOptions) {
        this.element = document.getElementById(id)
        this.height = gridOptions.height ? gridOptions.height : this.height;
        this.width = gridOptions.width ? gridOptions.width : this.width;
        this.data = gridOptions.data ? gridOptions.data : this.data;
        if (gridOptions.columnDefinition.length > 0) {
            for (let i = 0; i < gridOptions.columnDefinition.length; i++) {
                var xx = new ColumnDefinition(gridOptions.columnDefinition[i]);
                this.columnDefinition.push(xx);
            }
        };
    }
    render() {
        this.element.setAttribute('style', 'width:' + this.width + ';height:' + this.height + '');
        this.renderTable();
        this.renderHeader();
        this.renderColumns();
    }
    renderTable() {
        this._table = document.createElement('table');
        this._table.setAttribute('style', 'width:' + this.width);
        this.element.appendChild(this._table)
    }
    renderHeader() {
        if (this.columnDefinition.length > 0) {
            let tr = document.createElement('tr');
            debugger
            this._table.appendChild(tr)
            for (let i = 0; i < this.columnDefinition.length; i++) {
                let column = this.columnDefinition[i];
                let th = document.createElement('th');
                // th.setAttribute('style', 'width:' + column.width);
                th.innerHTML = column.renderTitle ? column.renderTitle(column) : column.title;
                tr.appendChild(th)
            }
        }
    }
    renderColumns() {
        for (let dataLength = 0; dataLength < this.data.length; dataLength++) {
            let tr = document.createElement('tr');
            this._table.appendChild(tr)
            for (let i = 0; i < this.columnDefinition.length; i++) {
                let column = this.columnDefinition[i];
                let td = document.createElement('td');
                var data = this.data[dataLength];
                var cellDefinition = new CellDefinition(column.beforeRenderCell ? column.beforeRenderCell(data) : {});
                if (cellDefinition.span && cellDefinition.span > 1) {
                    i = i + cellDefinition.span;
                    td.setAttribute('colspan', cellDefinition.span);
                }
                td.innerHTML = column.renderCell(data);
                td.setAttribute('style', 'height:' + cellDefinition.height);

                tr.appendChild(td)
            }
        }
    }
}

class ColumnDefinition {
    width = 'auto';
    title = "";
    renderTitle = null;
    beforeRenderCell = null;
    renderCell = null;
    constructor(column) {
        this.width = column.width ? column.width : this.width;
        this.title = column.title ? column.title : this.title;
        this.renderTitle = column.renderTitle ? column.renderTitle : this.renderTitle;
        this.renderCell = column.renderCell ? column.renderCell : this.renderCell;
        this.beforeRenderCell = column.beforeRenderCell ? column.beforeRenderCell : this.beforeRenderCell;

    }
}

class CellDefinition {
    height = 'auto';
    span = 1;
    constructor(cell) {
        this.height = (cell && cell.height) ? cell.height : this.height;
        this.span = (cell && cell.span) ? cell.span : this.span;
    }
}
