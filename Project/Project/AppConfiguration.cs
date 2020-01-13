﻿using System.Globalization;

namespace Project
{
    public class AppConfiguration
    {
        public int TablePageSize { get; set; } = 10;

        public string ConnectionString { get; private set; } =
            "Server = (local); Database=parking;Trusted_Connection=True;";

        //public CultureInfo CurrentCulture { get; set; } = new CultureInfo();
    }
}