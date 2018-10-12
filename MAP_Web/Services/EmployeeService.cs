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
            IPagedList<Employee> _pagedEmployeeList;
            // .GetPagedList(pageIndex: _pageIndex,pageSize:_pageSize,orderBy:x=>x.OrderBy(y=>y.Name));
            // .GetPagedList(pageIndex: _pageIndex,pageSize:_pageSize); 
            Models.EmployeePaged pagedEmployees=new Models.EmployeePaged();

            switch (sortedBy)
            { case "name":
           
           
                if(direction!="asc"){
                     _pagedEmployeeList=employeeRepo
            .GetPagedList(pageIndex: _pageIndex,pageSize:_pageSize,orderBy:x=>x.OrderByDescending(y=>y.Name));
                }else{
                     _pagedEmployeeList=employeeRepo
            .GetPagedList(pageIndex: _pageIndex,pageSize:_pageSize,orderBy:x=>x.OrderBy(y=>y.Name));
                }
                
                pagedEmployees.Employees=_pagedEmployeeList.Items.ToList();
                pagedEmployees.TotalCount=_pagedEmployeeList.TotalCount;
                break;
                case "address":
                if(direction!="asc"){
                     _pagedEmployeeList=employeeRepo
            .GetPagedList(pageIndex: _pageIndex,pageSize:_pageSize,orderBy:x=>x.OrderByDescending(y=>y.Address));
                }else{
                     _pagedEmployeeList=employeeRepo
            .GetPagedList(pageIndex: _pageIndex,pageSize:_pageSize,orderBy:x=>x.OrderBy(y=>y.Address));
                }
                
                pagedEmployees.Employees=_pagedEmployeeList.Items.ToList();
                
                pagedEmployees.TotalCount=_pagedEmployeeList.TotalCount;
                break;
                default:
                 _pagedEmployeeList=employeeRepo
            .GetPagedList(pageIndex: _pageIndex,pageSize:_pageSize,orderBy:x=>x.OrderBy(y=>y.Name));
                pagedEmployees.Employees=_pagedEmployeeList.Items.ToList();
                pagedEmployees.TotalCount=_pagedEmployeeList.TotalCount;
                break;
            }
             return pagedEmployees;
        }
    }
}