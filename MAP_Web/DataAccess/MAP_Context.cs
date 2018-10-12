using Microsoft.EntityFrameworkCore;
namespace MAP_Web.DataAccess
{
    public class MAP_Context:DbContext
    {
        public MAP_Context(DbContextOptions<MAP_Context> options)
        :base(options)
        {

        }

        public DbSet<Models.Employee>Employee{get;set;}
        public DbSet<Models.CustomerProfile>CustomerProfile{get;set;}

        
        
    }
}