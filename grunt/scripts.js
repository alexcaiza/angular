function AlumnosController($scope) 
{
	
	$scope.alumnos = 
	[
		{
			nombre: "Alex Caiza",
			telefono: "11111",
			curso: "2"
		},
		{
			nombre: "Maria Endara",
			telefono: "554545",
			curso: "1"
		},
		{
			nombre: "Sandra Salazar",
			telefono: "344434",
			curso: "3"
		},
		{
			nombre: "Jose Cera",
			telefono: "22222",
			curso: "2"
		},
		{
			nombre: "Raul Caiza",
			telefono: "11111",
			curso: "7"
		}
	];

	$scope.Save = function() {
		$scope.alumnos.push(
			{
				nombre: $scope.nuevoAlumno.nombre,
				telefono: $scope.nuevoAlumno.telefono,
				curso: $scope.nuevoAlumno.curso,
			}
		);
		$scope.nuevoAlumno = {};
		$scope.formVisibility = false;
		
		console.log($scope.formVisibility);
	};

	$scope.formVisibility = false;

	$scope.ShowForm = function() {
		$scope.formVisibility = true;
		console.log($scope.formVisibility);
	};

	$scope.Cancel = function() {
		$scope.formVisibility = false;
		console.log($scope.formVisibility);
		
		$scope.nuevoAlumno = {};
	};
}