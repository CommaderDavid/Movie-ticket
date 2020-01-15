// business logic for Ticket
function Ticket(movieSelection, timeSelection, ticketSelection) {
  this.movieSelection = movieSelection;
  this.timeSelection = timeSelection;
  this.ticketSelection = ticketSelection;
}

Ticket.prototype.addPrice = function() {
  price = 0;
  if (this.movieSelection === "new") {
    price += 10;
  } else {
    price += 8;
  }
  if (this.timeSelection === "normal") {
    price += 3;
  } else {
    price += 1;
  }
  if (this.ticketSelection === "normal") {
    price += 4;
  } else {
    price += 1;
  }
  return price;
}

// user logic
$(document).ready(function() {
  $("form#movie-form").submit(function(e) {
    e.preventDefault();
    var movieSelect = $("select#movie-selection").val();
    var timeSelect = $("select#time-selection").val();
    var ticketSelect = $("select#ticket-selection").val();

    var personalTicket = new Ticket(movieSelect, timeSelect, ticketSelect);
    $("#final-price").append(personalTicket.addPrice());
    $("#final-ticket-price").show();
  })
})
