using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data {
    public interface IDatingRepository {
        // add a type of user or a type of phote, take entiy as parameter and constrain T to class.
        void Add<T> (T entity) where T : class;
        void Delete<T> (T entity) where T : class;
        Task<bool> SaveAll ();

        Task<IEnumerable<User>> GetUsers ();

        Task<User> GetUser (int id);

    }
}