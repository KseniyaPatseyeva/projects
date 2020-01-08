﻿using System.Collections.Generic;

namespace Models
{
    public struct DataRecord
    {
        public DataRecord(string key, int count)
        {
            Key = key;
            Count = count;
        }

        public string Key { get; set; }

        public int Count { get; set; }
    }

    public class StatData
    {
        public StatData(IEnumerable<DataRecord> records, string label)
        {
            Records = records;
            Label = label;
        }

        public string Label { get; set; }

        public IEnumerable<DataRecord> Records { get; set; }
    }
}