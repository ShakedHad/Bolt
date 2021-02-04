using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Security.Cryptography;
using Bolt.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Newtonsoft.Json;
using NodaTime;
using Npgsql;

namespace Bolt.Infrastructure.Data.Config
{
    public class DateTimeOpeningHours
    {
        public DateTime OpenTime { get; set; }
        public DateTime CloseTime { get; set; }

        public DateTimeOpeningHours(OpeningHours openingHours)
        {
            OpenTime = new DateTime(0, 0, 0, openingHours.OpenTime.Hour, openingHours.OpenTime.Minute, 0);
            CloseTime = new DateTime(0, 0, 0, openingHours.CloseTime.Hour, openingHours.CloseTime.Minute, 0);
        }

        public OpeningHours ToNodaTimeOpeningHours()
        {
            return new()
            {
                OpenTime = new LocalTime(OpenTime.Hour, OpenTime.Minute),
                CloseTime = new LocalTime(CloseTime.Hour, CloseTime.Minute)
            };
        }
    }

    public class RestaurantConfiguration : IEntityTypeConfiguration<Restaurant>
    {
        public void Configure(EntityTypeBuilder<Restaurant> builder)
        {
            builder.Property(restaurant => restaurant.OpeningHours)
                .HasConversion(
                    v => JsonConvert.SerializeObject(v),
                    v => JsonConvert.DeserializeObject<Dictionary<DayOfWeek, OpeningHours>>(v));
            //.HasConversion(
            //    property => property.Select(keyValuePair =>
            //    new {
            //        key = keyValuePair.Key,
            //        value = new DateTimeOpeningHours(keyValuePair.Value)
            //    }).ToDictionary(pair => pair.key, pair => pair.value),
            //    property => property.Select(keyValuePair =>
            //    new {
            //        key = keyValuePair.Key,
            //        value = keyValuePair.Value.ToNodaTimeOpeningHours()
            //    }).ToDictionary(pair => pair.key, pair => pair.value)
            //);
        }
    }
}