var peopleList = [],
    userName;

while (peopleList.length < 7 || userName) {
   userName = prompt("Please enter name:", "Bob");

    if (userName != null && userName != "") {
        peopleList.push( userName );
    }
}

for (var i = 0; i < peopleList.length; i++) {
    $('#sortable').append('<li>' + peopleList[i] + '</li>');
}

$( function() {
    $( "#sortable" ).sortable({
        revert: true
    });

    $( "ul, li" ).disableSelection();
} );