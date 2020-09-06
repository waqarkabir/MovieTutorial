
namespace MovieTutorial.MovieDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;
    using System.IO;

    [FormScript("MovieDB.Genre")]
    [BasedOnRow(typeof(Entities.GenreRow))]
    public class GenreForm
    {
        public String Name { get; set; }
    }
}
