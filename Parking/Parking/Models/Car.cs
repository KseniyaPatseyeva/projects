using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parking.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string carNumber { get; set; }
        public bool isIn { get; set; }
    }
}
