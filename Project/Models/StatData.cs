using System.Collections.Generic;

namespace Models
{
    public struct DataRecord
    {
        public string Key { get; set; }

        public int Count { get; set; }

        public DataRecord(string key, int count)
        {
            Key = key;
            Count = count;
        }
    }
    public class StatData
    {
        public string Label { get; set; }

        public List<DataRecord> Records { get; set; }

        public StatData(List<DataRecord> records, string label)
        {
            Records = records;
            Label = label;
        }
    }
}