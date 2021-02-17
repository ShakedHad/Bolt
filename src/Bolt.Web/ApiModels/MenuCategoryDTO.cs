using System.Collections.Generic;

namespace Bolt.Web.ApiModels
{
    public class MenuCategoryDTO : BaseEntityDTO
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public ICollection<MenuItemDTO> Items { get; set; }
    }
}