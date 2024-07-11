indow.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimpleAlert = document.getElementById('datatablesSimpleAlert');
    if (datatablesSimpleAlert) {
        new simpleDatatables.DataTable(datatablesSimpleAlert);
    }
});
