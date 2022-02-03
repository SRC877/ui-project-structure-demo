

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {

    var gridOptions = {
        height: '100%',
        width: '100%',
        data: [
            { sno: '1', name: 'Kamesh', team: 'UI Development' },
            { sno: '2', name: 'Dropdown', team: 'UI Development' },
            { sno: '3', name: 'Vinay', team: 'UI Development' },
            { sno: '4', name: 'Sangamithra', team: 'UI Development' },
            { sno: '5', name: 'Manish', team: 'UI Development' },
        ],
        enbleChecbox: true,
        enbleRadiobox: true,
        Multiche: true,
        columnDefinition: [
            {
                width: '100px',
                title: 'S.No',
                renderTitle(columnDetail) {
                    return `<span> ${columnDetail.title} </span> <button> || </button> `
                },
                beforeRenderCell(cell) {
                    if (cell.sno == 1) {
                        return { height: '50px' };
                    }
                    if (cell.sno == 2) {
                        return { span: 1 };
                    }
                },
                renderCell(cell) {

                    if (cell.sno == 2) {

                        return `<div id="customDiv"> ${cell.sno} Kamesh </div> `
                    }

                    return cell.sno;
                }
            },
            {
                width: '100px',
                title: 'Name',
                renderTitle(columnDetail) {
                    return `<span> ${columnDetail.title} </span>`
                },
                beforeRenderCell(cell) {
                    if (cell.sno == 1) {
                        return { span: 1 };
                    }
                },
                renderCell(cell) {
                    return cell.name;
                }
            },
            {
                width: '100px',
                title: 'Team',
                renderTitle(columnDetail) {
                    return `<span> ${columnDetail.title} </span>`
                },
                renderCell(cell) {
                    if (cell.name == "Manish") {
                        return `<div style="width:250px;background:red">
                        <button class="accordion">Section 1</button>
                        <div class="panel">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        
                        <button class="accordion">Section 2</button>
                        <div class="panel">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        
                        <button class="accordion">Section 3</button>
                        <div class="panel">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        </div>`
                    }
                    return `<span> ${cell.team} </span>`
                }
            },
        ]
    }

    var grid = new Grid('myGrid', gridOptions).render();



    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }


});

function updateHeight(xx) {
    document.getElementById('customDiv').style.height = '100px'
}





