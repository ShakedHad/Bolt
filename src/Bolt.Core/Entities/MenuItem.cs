using System;
using Bolt.SharedKernel;

namespace Bolt.Core.Entities
{
    public class MenuItem : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public Guid CategoryId { get; set; }
        public MenuCategory Category { get; set; }
    }
}
