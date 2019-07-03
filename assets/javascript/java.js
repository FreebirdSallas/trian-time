$("#submit").on("click", function(event){
    event.preventDefault();

    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var fTT = $("#ftt").val().trim();
    var freq = $("#freq").val().trim();
    console.log(trainName);
    

    var firsttimeMoment = moment(fTT, "HH:mm").subtract(1,"years");
    console.log(firsttimeMoment);

    var currenttime = moment();
    

    var minuteArrival = currenttime.diff(firsttimeMoment, 'minutes');
    var minuteLast = minuteArrival % freq;
    var awayTrain = freq - minuteLast;

    var nextArrival = currenttime.add(awayTrain, 'minutes');
    var arrivaltime = nextArrival.format("HH:mm");

    var x = `
    <tr>
      <td>${trainName}</td>
      <td>${destination}</td>
      <td>${freq}</td>
      <td>${arrivaltime}</td>
      <td>${awayTrain}</td>
    </tr>
    `
    $("tbody").append(x);
})