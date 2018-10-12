using System.Collections.Generic;

namespace MAP_Web.Models
{
    public class EmployeePaged
    {
        public IEnumerable<Employee> Employees;

        public int TotalCount { get; set; }
       
    }
}