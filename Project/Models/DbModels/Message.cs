using System;

namespace Models.DbModels
{
    public class Message
    {
        public int Id { get; set; }

        public string LicensePlate { get; set; }

        public bool IsArrived { get; set; }

        public DateTime CreatedDateTime { get; set; }

        public int ParkingId { get; set; }
    }
}