using System.Collections.Generic;
using Bolt.SharedKernel;

namespace Bolt.Core.Entities
{
    public class Menu : BaseEntity
    {
        public Restaurant Restaurant { get; set; }
        public ICollection<MenuItem> Items { get; set; }
    }
}