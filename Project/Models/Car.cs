using System;

namespace Models
{
    public class Car
    {
        public int Id { get; set; }
        public string LicensePlate { get; set; }
        public DateTime ArrivedTime { get; set; }
        public DateTime LeftTime { get; set; }
    }
}