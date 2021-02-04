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
using NodaTime.Serialization.JsonNet;
using NodaTime.TimeZones;
using Npgsql;

namespace Bolt.Infrastructure.Data.Config
{
    public class RestaurantConfiguration : IEntityTypeConfiguration<Restaurant>
    {
        public void Configure(EntityTypeBuilder<Restaurant> builder)
        {
            var jsonSerializerSetting = new JsonSerializerSettings().ConfigureForNodaTime(DateTimeZoneProviders.Tzdb);

            builder.Property(restaurant => restaurant.OpeningHours)
                .HasConversion(
                    v => JsonConvert.SerializeObject(v, jsonSerializerSetting),
                    v => JsonConvert.DeserializeObject<Dictionary<DayOfWeek, (LocalTime, LocalTime)>>(v, jsonSerializerSetting));
        }
    }
}