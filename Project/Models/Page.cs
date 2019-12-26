using System;
using System.Collections.Generic;

namespace Models
{
    public class Page<T>
    {
        private int _totalPages;
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }

        public int TotalPages
        {
            get => _totalPages;
            set => _totalPages = (int) Math.Ceiling((double)value / PageSize);
        }

        public List<T> Records { get; set; }

        public Page()
        {
            Records = new List<T>();
        }

        public Page(IEnumerable<T> records)
        {
            Records = new List<T>(records);
        }
    }
}