using System;
using System.Collections.Generic;
using Bolt.Core.Entities;
using NodaTime;

namespace Bolt.Web.ApiModels
{
    public class RestaurantDTO : BaseEntityDTO
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public decimal DeliveryRadius { get; set; }
        public string PhoneNumber { get; set; }
        public string Website { get; set; }
        public bool IsOpenedForOrders { get; set; }
        public Dictionary<DayOfWeek, (LocalTime, LocalTime)> OpeningHours { get; set; }
        public RestaurantCategory Category { get; set; }
        public UserDTO Owner { get; set; }
        public string ImageUrl { get; set; }
    }
}