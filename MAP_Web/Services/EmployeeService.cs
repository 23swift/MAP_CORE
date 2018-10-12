using System.Collections.Generic;
using System.Linq;
using MAP_Web.Models;
using Microsoft.EntityFrameworkCore;

namespace MAP_Web.Services
{
    public class EmployeeService : IEmployeeService
    {
       IUnitOfWork _unitOfWork;
        public EmployeeService(IUnitOfWork unitOfWork){
            _unitOfWork = unitOfWork; 
        }
        public void Create(Employee employee)
        {
            var employeeRepo= _unitOfWork.GetRepository<Models.Employee>();

            employeeRepo.Insert(employee);

            _unitOfWork.SaveChanges();

        }

        public IEnumerable<Models.Employee> Get()
        {
            var employeeRepo= _unitOfWork.GetRepository<Models.Employee>();
            
            //  var items=employeeRepo.GetPagedList().Items.ToList();
            
            var items=employeeRepo.GetAll();
            return items;
        }

        public Models.EmployeePaged GetPaged(int _pageIndex, int _pageSize,string sortedBy,string direction)
        {
            var employeeRepo= _unitOfWork.GetRepository<Models.Employee>();
            var _pagedEmployeeList=employeeRepo.GetPagedList(pageIndex: _pageIndex,pageSize:_pageSize);
            var pagedEmployees=new Models.EmployeePaged{
                TotalCount=_pagedEmployeeList.TotalCount
                // Employees=_pagedEmployeeList.Items
            };

            switch (sortedBy)
            { case "name":
                pagedEmployees.Employees=_pagedEmployeeList.Items.OrderBy(x=>x.Name).ToList();
                break;
                case "address":
                pagedEmployees.Employees=_pagedEmployeeList.Items.OrderBy(x=>x.Address).ToList();
                break;
                default:
                pagedEmployees.Employees=_pagedEmployeeList.Items.OrderBy(x=>x.Name).ToList();
                break;
            }
             return pagedEmployees;
        }
    }
}