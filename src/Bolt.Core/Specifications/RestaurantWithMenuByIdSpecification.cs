using System.Linq;
using Ardalis.Specification;
using Bolt.Core.Entities;

namespace Bolt.Core.Specifications
{
    public class RestaurantWithMenuByIdSpecification : Specification<Restaurant>
    {
        public RestaurantWithMenuByIdSpecification(int id)
        {
            Query.Where(restaurant => restaurant.Id == id).Include(restaurant => restaurant.Menu)
                .ThenInclude(menu => menu.Categories).ThenInclude(category => category.Items);
        }
    }
}