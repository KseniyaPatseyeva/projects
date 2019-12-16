using System;

namespace Project.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string LicensePlate { get; set; }
        public DateTime ArrivedTime { get; set; }

        public bool IsIn { get; set; }
    }
}