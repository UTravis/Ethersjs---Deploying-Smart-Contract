// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Employees{

    // Array of employees names
    string[] public names;

    mapping(uint256 => info) public employeeInfo;

    // Struct of employees properties
    struct info {
        string sex;
        uint256 age;
        string department;
        uint256 salary;
    }

    // Add an employee to array
    function addEmployee(string memory _name) public {
        names.push(_name);
    }

    // Get an employee by index
    function getEmployeeName(uint256 _index) public view returns(string memory) {
        return names[_index];
    }


    // Give an employee info
    function addInfo(uint256 _index, string memory _sex, uint256 _age, string memory _department, uint256 _salary) public {
        employeeInfo[_index] = info({
            sex: _sex, age: _age, department: _department, salary: _salary
        });
    }

    // Read employee info
    function getInfo(uint256 _index) public view returns(info memory) {
        return employeeInfo[_index];
    }
}