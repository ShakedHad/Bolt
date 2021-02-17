using System.Collections.Generic;
using Bolt.SharedKernel;

namespace Bolt.Core.Entities
{
    public class Menu : BaseEntity
    {
        public int RestaurantId { get; set; }
        public Restaurant Restaurant { get; set; }
        public ICollection<MenuCategory> Categories { get; set; }
    }
}