using AutoMapper;
using Bolt.Core.Entities;

namespace Bolt.Web.ApiModels
{
    public class MappingConfiguration : Profile
    {
        public MappingConfiguration()
        {
            CreateMap<Restaurant, RestaurantDTO>();
            CreateMap<User, UserDTO>();
        }
    }
}