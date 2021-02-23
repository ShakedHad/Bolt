using System;
using System.Linq;
using Ardalis.Specification;
using Bolt.Core.Entities;

namespace Bolt.Core.Specifications
{
    public class UserByGoogleIdSpecification : Specification<User>
    {
        public UserByGoogleIdSpecification(string googleId)
        {
            Query.Where(user => user.GoogleId == googleId);
        }
    }
}