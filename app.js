$(document).ready(function() {
	var empArray = [];
	// make new variables for salary math
	var empMonthlySalary = 0;
	var monthlyPayroll = 0;	
	


	$('#employeeForm').on('submit', function(event) {
		event.preventDefault();

		var values = {};

		$.each($('#employeeForm').serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});
		//salary math ****reference *empSalary.value* to access empSalary in empArray
	empMonthlySalary = parseInt((empSalary.value)/12);
	monthlyPayroll += empMonthlySalary;

		
		$('#employeeForm').find('input[type=text], input[type=number]').val('');
		appendDom(values);
	
		empArray.push(values);

	});
// Bonus1: add Delete button that deletes last employee info.
	$('#deleteEmployee').on('click', function(event) {
		$('#container').children().last().remove();
		//console.log('clear');
	});


	function appendDom(empInfo) {
		$('#container').append('<div></div>');
		var $el = $('#container').children().last();

		$el.append('<p>Name: ' + empInfo.empFirstName + '</p>');
		$el.append('<p>Last: ' + empInfo.empLastName + '</p>');
		$el.append('<p>ID# ' + empInfo.empIdNumber + '</p>');
		$el.append('<p>Title: ' + empInfo.empJobTitle + '</p>');
		$el.append('<p>Salary: ' + empInfo.empSalary + '</p>'); 
		$el.append('<p>Monthly Salary : ' + empMonthlySalary + '</p>'); 
		$el.append('<p>Total Monthly Payroll : ' + monthlyPayroll + '</p>'); 

	}

});

// Bonus2:
// update the total spent on salaries to discount removed employee's salary.
// req logic that knows which element was removed.
// explore using jQuery .data() function for this.
// action req when employee added & when deleted.


