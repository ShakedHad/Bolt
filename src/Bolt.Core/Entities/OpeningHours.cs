using Bolt.SharedKernel;
using NodaTime;

namespace Bolt.Core.Entities
{
    public class OpeningHours : BaseEntity
    {
        public LocalTime OpenTime { get; set; }
        public LocalTime CloseTime { get; set; }
    }
}