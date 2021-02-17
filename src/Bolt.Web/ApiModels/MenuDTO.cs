using System.Collections.Generic;

namespace Bolt.Web.ApiModels
{
    public class MenuDTO : BaseEntityDTO
    {
        public ICollection<MenuCategoryDTO> Categories { get; set; }
    }
}