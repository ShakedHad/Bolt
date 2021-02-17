using System.Collections.Generic;
using Bolt.SharedKernel;

namespace Bolt.Core.Entities
{
    public class MenuCategory : BaseEntity
    {
        public int MenuId { get; set; }
        public Menu Menu { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public ICollection<MenuItem> Items { get; set; }
    }
}