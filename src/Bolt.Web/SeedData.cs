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
        public static Dictionary<DayOfWeek, (LocalTime, LocalTime)> OpeningHours = new()
        {
            { DayOfWeek.Sunday, (new LocalTime(11, 00), new LocalTime(23, 00)) },
            { DayOfWeek.Monday, (new LocalTime(11, 00), new LocalTime(23, 00)) },
            { DayOfWeek.Tuesday, (new LocalTime(11, 00), new LocalTime(23, 00)) },
            { DayOfWeek.Wednesday, (new LocalTime(11, 00), new LocalTime(23, 00)) },
            { DayOfWeek.Thursday, (new LocalTime(11, 00), new LocalTime(23, 00)) },
            { DayOfWeek.Friday, (new LocalTime(11, 00), new LocalTime(23, 00)) },
            { DayOfWeek.Saturday, (new LocalTime(11, 00), new LocalTime(23, 00)) }
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
                Description = "Best Burger in TLV",
                Address = "Even Gvirol 37, Tel Aviv",
                DeliveryRadius = 5.0M,
                IsOpenedForOrders = true,
                OpeningHours = OpeningHours,
                PhoneNumber = "0524481484",
                Category = RestaurantCategory.Burger,
                Website = "https://m.facebook.com/vitrinush/",
                Owner = SeedUser,
                ImageUrl = "https://prod-wolt-venue-images-cdn.wolt.com/5ea6a9dd38feff70cd020ce0/428141d0-66d1-11eb-a0f5-2a74384763cb_bonfis_0019.jpg",
                Menu = new Menu
                {
                    Categories = new List<MenuCategory>()
                    {
                        new()
                        {
                            Name = "Burgers",
                            Description = "Yummmmmm",
                            Items = new List<MenuItem>()
                            {
                                new () {
                                    Name = "Hamburger",
                                    Description = "Meat patty between two hamburger bans",
                                    ImageUrl = "https://wolt-menu-images-cdn.wolt.com/menu-images/5bf421d392c43d000adeeb61/b1f6e9d6-66c0-11eb-aa64-e6936f25bfdc_img_0023__1_.jpeg",
                                },
                                new()
                                {
                                    Name = "Cheeseburger",
                                    Description = "Meat patty between two hamburger bans, With Cheese!",
                                    ImageUrl = "https://wolt-menu-images-cdn.wolt.com/menu-images/5bf421d392c43d000adeeb61/a4982d86-66bb-11eb-b97b-f623dcdc9c93_butler_cheeseburger.jpeg",
                                }
                            }
                        },
                        new()
                        {
                            Name = "Fries",
                            Description = "That lemon zest!",
                            Items = new List<MenuItem>()
                            {
                                new () {
                                    Name = "Mix Fries",
                                    Description = "Potato and sweet potato mixed together",
                                    ImageUrl = "https://wolt-menu-images-cdn.wolt.com/menu-images/5bf421d392c43d000adeeb61/378f67c4-66be-11eb-aed4-8eaab0637613___________.jpeg",
                                },
                                new()
                                {
                                    Name = "Potato Fries",
                                    Description = "Meat patty between two hamburger bans, With Cheese!",
                                    ImageUrl = "https://wolt-menu-images-cdn.wolt.com/menu-images/5bf421d392c43d000adeeb61/3d94b3c2-66be-11eb-b4eb-5aac908d13ff________________.jpeg",
                                }
                            }
                        },
                    }
                }
            },
            new Restaurant
            {
                Name = "Magazzino",
                Description = "Italian Restaurant",
                Address = "Menahem Begin 21, Tel Aviv",
                DeliveryRadius = 5.0M,
                IsOpenedForOrders = true,
                OpeningHours = OpeningHours,
                PhoneNumber = "0524481484",
                Category = RestaurantCategory.Italian,
                Website = "http://www.magazzino.co.il/",
                Owner = SeedUser,
                ImageUrl = "https://prod-wolt-venue-images-cdn.wolt.com/5e67a04b68bac592829ab56f/3131828e-564e-11eb-b4c6-f29e99c7ffcf_img_9052.jpg"

            },
            new Restaurant
            {
                Name = "Mexicana",
                Description = "‫Feels Like Mexico",
                Address = "Bugrashov 7 tlv",
                DeliveryRadius = 5.0M,
                IsOpenedForOrders = true,
                OpeningHours = OpeningHours,
                PhoneNumber = "0524481484",
                Category = RestaurantCategory.Mexican,
                Website = "https://mexicana.co.il/",
                Owner = SeedUser,
                ImageUrl = "https://prod-wolt-venue-images-cdn.wolt.com/5e6e424301f4c5cee1feab65/5a8e55da-2331-11eb-9fbb-ba4017ca3fe5_img_5155.jpg"
            },
            new Restaurant
            {
                Name = "Mexicana",
                Description = "‫Feels Like Mexico",
                Address = "Bugrashov 7 tlv",
                DeliveryRadius = 5.0M,
                IsOpenedForOrders = true,
                OpeningHours = OpeningHours,
                PhoneNumber = "0524481484",
                Category = RestaurantCategory.Mexican,
                Website = "https://mexicana.co.il/",
                Owner = SeedUser,
                ImageUrl = "https://prod-wolt-venue-images-cdn.wolt.com/5e6e424301f4c5cee1feab65/5a8e55da-2331-11eb-9fbb-ba4017ca3fe5_img_5155.jpg"
            },
            new Restaurant
            {
                Name = "Mexicana",
                Description = "‫Feels Like Mexico",
                Address = "Bugrashov 7 tlv",
                DeliveryRadius = 5.0M,
                IsOpenedForOrders = true,
                OpeningHours = OpeningHours,
                PhoneNumber = "0524481484",
                Category = RestaurantCategory.Mexican,
                Website = "https://mexicana.co.il/",
                Owner = SeedUser,
                ImageUrl = "https://prod-wolt-venue-images-cdn.wolt.com/5e6e424301f4c5cee1feab65/5a8e55da-2331-11eb-9fbb-ba4017ca3fe5_img_5155.jpg"
            },
            new Restaurant
            {
                Name = "Mexicana",
                Description = "‫Feels Like Mexico",
                Address = "Bugrashov 7 tlv",
                DeliveryRadius = 5.0M,
                IsOpenedForOrders = true,
                OpeningHours = OpeningHours,
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
            if (dbContext.Restaurants.Any()) return;   // DB has been seeded

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
