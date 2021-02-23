using Bolt.SharedKernel;
using Bolt.SharedKernel.Interfaces;

namespace Bolt.Core.Entities
{
    public class User : BaseEntity, IAggregateRoot
    {
        public string GoogleId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string ImageUrl { get; set; }
    }
}