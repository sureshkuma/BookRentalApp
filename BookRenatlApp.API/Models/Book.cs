using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BookRenatlApp.API.Models
{
    public class Book
    {
        [Key]
        public int BookId {get;set;}

      public Genre genreId {get;set;}

        public string BookName {get;set;}

        public string ImageUrl {get;set;}

        public string Descripation {get;set;}

        public int cost {get;set;}

        public string Title {get;set;}

        public int Pages {get;set;}

        public string Author {get;set;}

        public string Publisher {get;set;}

        public List<Genre> genres {get;set;}

        public DateTime PublicationDate {get;set;}

    }
}