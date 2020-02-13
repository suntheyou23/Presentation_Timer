$(function() {
	Output_SValue();
	Output_Timer(5, 0);
	$(".start_button").on("click", function() {
		var SValue = $(".peopleN").val();
		Start_CountDown_Timer(2*SValue + 3, SValue + 1);
	});
});

function Output_SValue() {
	$(".peopleN").on("input", function() {
		var SValue = $(".peopleN").val();
		$(".SValue").text(SValue);
		Output_Timer(2*SValue + 3, 0);
	});
}

function Start_CountDown_Timer(Ptime, QATime) {
	$(".peopleN").prop("disabled", true);
	$(".start_button").prop("disabled", true);
	$(".Title").text("発表タイム");
	min = Ptime, sec = 0;

	var Timer = setInterval(function() {
		sec--;

		if (sec < 0 && min > 0) {
			min--;
			sec = 59;
		}
		if (sec == 0 && min == 1) {
			if(typeof($(".chin1").get(0).currentTime) != 'undefined') {
				$(".chin1").get(0).currentTime = 0;
			}
			$(".chin1").get(0).play();
		}
		if (sec == 0 && min == 0) {
			if(typeof($(".chin2").get(0).currentTime) != 'undefined') {
				$(".chin2").get(0).currentTime = 0;
			}
			$(".chin2").get(0).play();
			clearInterval(Timer);
			Start_CountUp_Timer(QATime);
		}

		Output_Timer(min, sec);

		$(".reset_button").on("click", function() {
				clearInterval(Timer);
				$(".peopleN").prop("disabled", false);
				$(".start_button").prop("disabled", false);
				$(".Title").text("発表タイム");

				var SValue = $(".peopleN").val();
				Output_Timer(2*SValue + 3, 0);
		});
	}, 1000);
}

function Start_CountUp_Timer(MaxTime) {
	min = 0, sec = 0;
	$(".Title").text("質疑応答タイム");
	Output_Timer(min, sec);
	var Timer = setInterval(function() {
		sec++;

		if (sec > 59 && min < MaxTime) {
			min++;
			sec = 0;
		}
		if (sec == 0 && min == MaxTime) {
			if(typeof($(".chin3").get(0).currentTime) != 'undefined') {
				$(".chin3").get(0).currentTime = 0;
			}
			$(".chin3").get(0).play();
			clearInterval(Timer);
			$(".peopleN").prop("disabled", false);
			$(".start_button").prop("disabled", false);
			$(".Title").text("発表タイム");

			var SValue = $(".peopleN").val();
			Output_Timer(2*SValue + 3, 0);
		}

		Output_Timer(min, sec);

		$(".reset_button").on("click", function() {
				clearInterval(Timer);
				$(".peopleN").prop("disabled", false);
				$(".start_button").prop("disabled", false);
				$(".Title").text("発表タイム");

				var SValue = $(".peopleN").val();
				Output_Timer(2*SValue + 3, 0);
		});
	}, 1000);
}

function Output_Timer(min, sec) {
	var min_Value = ("0" + min).slice(-2);
	var sec_Value = ("0" + sec).slice(-2);
	$(".Timer").text(min_Value + ":" + sec_Value);
}
