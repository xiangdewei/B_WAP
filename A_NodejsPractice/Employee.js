var Employee=(function(){
	var name;
	var age=0;
	var salary=0;
	var getAge=function (){
		return age;
	}
	var getSalary=function (){
		return salary;
	}
	var getName=function (){
		return name;
	}
	var setAge=function(newAge){
		age=newAge;
		// console.log(age+":::age")
	}
	var setName=function(newName){
		name=newName;
		// console.log(name)
	}
	var setSalary=function(newSalary){
		salary=newSalary;
	}
	var increaseSalary=function(percentage){		
		 setSalary(salary+salary*percentage)
		 return getSalary()
	}
	var incremeentAge=function(){
		setAge(getAge()+1)
		return getAge();
	}
	return {
		setAge:setAge,
		setSalary:setSalary,
		setName:setName,
		// getName:getName,
		incremeentAge:incremeentAge,
		increaseSalary:increaseSalary
	}
})();

Employee.setName("dewei");
Employee.setSalary(100);
Employee.setAge(18);
console.log(Employee.increaseSalary(0.05)+", "+Employee.incremeentAge())