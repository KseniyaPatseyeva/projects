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
}