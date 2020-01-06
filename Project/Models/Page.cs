using System;
using System.Collections.Generic;

namespace Models
{
    public class Page<T>
    {
        private int _totalPages;

        public Page()
        {
            this.Records = new List<T>();
        }

        public Page(IEnumerable<T> records)
        {
            this.Records = new List<T>(records);
        }

        public int CurrentPage { get; set; }

        public int PageSize { get; set; }

        public int TotalPages
        {
            get => _totalPages;
            set => _totalPages = (int)Math.Ceiling((double)value / PageSize);
        }

        public List<T> Records { get; set; }
    }
}