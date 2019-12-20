using System;

namespace Models
{
    public class Message
    {
        public int Id { get; set; }
        public string LicensePlate { get; set; }
        public string ActionType { get; set; }
        public DateTime CreatedDateTime { get; set; }
    }
}