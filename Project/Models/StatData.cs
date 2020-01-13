using System.Collections.Generic;

namespace Models
{
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