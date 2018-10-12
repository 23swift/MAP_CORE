using System.Collections;
using System.Collections.Generic;


namespace MAP_Web.Services
{
    public interface IEmployeeService
    {
         void Create(Models.Employee employee);
         IEnumerable<Models.Employee>Get();
         Models.EmployeePaged GetPaged(int pageIndex,int pageSize,string sortedBy,string direction);
    }
}