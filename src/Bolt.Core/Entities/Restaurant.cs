using System;
using System.Collections.Generic;
using System.Reflection.Metadata;
using System.Reflection.Metadata.Ecma335;
using Bolt.SharedKernel;
using Bolt.SharedKernel.Interfaces;
using NodaTime;

namespace Bolt.Core.Entities
{
    public class Restaurant : BaseEntity, IAggregateRoot
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public User Type { get; set; }
        public string Address { get; set; }
        public decimal DeliveryRadius { get; set; }
        public string PhoneNumber { get; set; }
        public string Website { get; set; }
        public bool IsOpenedForOrders { get; set; }
        public Dictionary<DayOfWeek, OpeningHours> OpeningHours { get; set; }
        public RestaurantCategory Category { get; set; }
        public User Owner  { get; set; }
        public string ImageUrl { get; set; }
        

        public Restaurant()
        {
            
        }
    }
}