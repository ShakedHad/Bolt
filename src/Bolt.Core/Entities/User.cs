using Bolt.SharedKernel;

namespace Bolt.Core.Entities
{
    public class User : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}