
using System.Reflection.Metadata;

namespace Bolt.Web.ApiModels
{
    public class UserDTO : BaseEntityDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string GoogleId { get; set; }
        public string ImageUrl { get; set; }
        public string Email { get; set; }
    }
}