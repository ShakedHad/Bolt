using System;
using System.Collections.Generic;
using System.Linq;
using Bolt.Core.Entities;
using Bolt.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using NodaTime;

namespace Bolt.Web
{
    public static class SeedData
    {
        public static Dictionary<DayOfWeek, (LocalTime,LocalTime)> OpenningHours = new()
        {
            { DayOfWeek.Sunday, (new LocalTime(11, 00), new LocalTime(23, 00))},
            { DayOfWeek.Monday, (new LocalTime(11, 00), new LocalTime(23, 00))},
            { DayOfWeek.Tuesday, (new LocalTime(11, 00), new LocalTime(23, 00))},
            { DayOfWeek.Wednesday, (new LocalTime(11, 00), new LocalTime(23, 00))},
            { DayOfWeek.Thursday, (new LocalTime(11, 00), new LocalTime(23, 00))},
            { DayOfWeek.Friday, (new LocalTime(11, 00), new LocalTime(23, 00))},
            { DayOfWeek.Saturday, (new LocalTime(11, 00), new LocalTime(23, 00))}
        };

        public static User SeedUser = new()
        {
            FirstName = "Shaked",
            LastName = "Hadas"
        };

        public static readonly List<Restaurant> RestaurantsSeedData = new()
        {
            new Restaurant
            {
                Name = "Vitrina",
                Description = "Bust Burger in TLV",
                Address = "Even Gvirol 37, Tel Aviv",
                DeliveryRadius = 5.0M,
                IsOpenedForOrders = true,
                OpeningHours = OpenningHours,
                PhoneNumber = "0524481484",
                Category = RestaurantCategory.Burger,
                Website = "https://m.facebook.com/vitrinush/",
                Owner = SeedUser,
                ImageUrl = "https://prod-wolt-venue-images-cdn.wolt.com/5ea6a9dd38feff70cd020ce0/a0a6eb72-501d-11eb-b115-4e507104f923__________________.jpg"
            },
            new Restaurant
            {
                Name = "Magazzino",
                Description = "Italian Restaurant",
                Address = "Menahem Begin 21, Tel Aviv",
                DeliveryRadius = 5.0M,
                IsOpenedForOrders = true,
                OpeningHours = OpenningHours,
                PhoneNumber = "0524481484",
                Category = RestaurantCategory.Italian,
                Website = "http://www.magazzino.co.il/",
                Owner = SeedUser,
                ImageUrl = "https://prod-wolt-venue-images-cdn.wolt.com/5e67a04b68bac592829ab56f/4726b500-564e-11eb-af6c-6e39c82040f7_list_with_badge.jpg"

            },
            new Restaurant
            {
                Name = "Mexicana",
                Description = "‫Feels Like Mexico",
                Address = "Bugrashov 7 tlv",
                DeliveryRadius = 5.0M,
                IsOpenedForOrders = true,
                OpeningHours = OpenningHours,
                PhoneNumber = "0524481484",
                Category = RestaurantCategory.Mexican,
                Website = "https://mexicana.co.il/",
                Owner = SeedUser,
                ImageUrl = "https://prod-wolt-venue-images-cdn.wolt.com/5e6e424301f4c5cee1feab65/5a8e55da-2331-11eb-9fbb-ba4017ca3fe5_img_5155.jpg"
            }
        };


        public static void Initialize(IServiceProvider serviceProvider)
        {
            using var dbContext = new AppDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<AppDbContext>>(), null);
            if (dbContext.Restaurants.Any())
            {
                return;   // DB has been seeded
            }

            PopulateTestData(dbContext);
        }
        public static void PopulateTestData(AppDbContext dbContext)
        {
            foreach (var item in dbContext.Restaurants)
            {
                dbContext.Remove(item);
            }
            dbContext.SaveChanges();

            foreach (var restaurant in RestaurantsSeedData)
            {
                dbContext.Restaurants.Add(restaurant);
            }

            dbContext.SaveChanges();
        }
    }
}
