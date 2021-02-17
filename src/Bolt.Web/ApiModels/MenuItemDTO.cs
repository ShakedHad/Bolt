namespace Bolt.Web.ApiModels
{
    public class MenuItemDTO : BaseEntityDTO
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
    }
}